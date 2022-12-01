enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface IOptions {
  method: Methods;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
}

export function queryStringify(data: {[index: string]: any}) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

export class HTTPTransport {
  get(
    url: string,
    options: Omit<IOptions, 'method'>,
  ): Promise<XMLHttpRequest | unknown> {
    return this.request(
      url,
      { ...options, method: Methods.GET },
      options.timeout,
    );
  }

  post(
    url: string,
    options: Omit<IOptions, 'method'>,
  ): Promise<XMLHttpRequest | unknown> {
    return this.request(
      url,
      { ...options, method: Methods.POST },
      options.timeout,
    );
  }

  put(
    url: string,
    options: Omit<IOptions, 'method'>,
  ): Promise<XMLHttpRequest | unknown> {
    return this.request(
      url,
      { ...options, method: Methods.PUT },
      options.timeout,
    );
  }

  delete(
    url: string,
    options: Omit<IOptions, 'method'>,
  ): Promise<XMLHttpRequest | unknown> {
    return this.request(
      url,
      { ...options, method: Methods.DELETE },
      options.timeout,
    );
  }

  request(
    url: string,
    options: IOptions,
    timeout = 5000,
  ): Promise<XMLHttpRequest | unknown> {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject();
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === Methods.GET;

      xhr.open(
        method,
        isGet && !!data ? `${url}${queryStringify(data)}` : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
