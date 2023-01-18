type Options = {
  method: Method;
  data?: any;
};

export enum Method {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Patch = 'Patch',
  Delete = 'Delete'
}

export function queryStringify(data: Record<string, any>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);

  if (!keys.length) {
    return '';
  }

  return keys.reduce(
    (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?',
  );
}

type HTTPMethod<Response> = (url: string, options?: Options) => Promise<Response>;

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get: HTTPMethod = (url, options = {}) => (
    this.request(
      this.endpoint + url,
      { ...options, method: Method.Get },
      options.timeout,
    )
  );

  post: HTTPMethod = (url, options = {}) => (
    this.request(this.endpoint + url, {
      ...options,
      method: Method.Post,
    }, options.timeout)
  );

  put: HTTPMethod = (url, options = {}) => (
    this.request(this.endpoint + url, { ...options, method: Method.Put }, options.timeout)
  );

  delete: HTTPMethod = (url, options = {}) => (
    this.request(this.endpoint + url, { ...options, method: Method.Delete }, options.timeout)
  );

  //
  // public get<Response>(path = '/'): Promise<Response> {
  //   return this.request<Response>(this.endpoint + path);
  // }
  //
  // public post<Response = void>(path: string, data?: unknown): Promise<Response> {
  //   return this.request<Response>(this.endpoint + path, {
  //     method: Method.Post,
  //     data,
  //   });
  // }
  //
  // public put<Response = void>(path: string, data: unknown): Promise<Response> {
  //   return this.request<Response>(this.endpoint + path, {
  //     method: Method.Put,
  //     data,
  //   });
  // }
  //
  // public patch<Response = void>(path: string, data: unknown): Promise<Response> {
  //   return this.request<Response>(this.endpoint + path, {
  //     method: Method.Patch,
  //     data,
  //   });
  // }
  //
  // public delete<Response>(path: string, data?: unknown): Promise<Response> {
  //   return this.request<Response>(this.endpoint + path, {
  //     method: Method.Delete,
  //     data,
  //   });
  // }

  private request<Response>(url: string, options: Options = { method: Method.Get }, timeout = 5000): Promise<Response> {
    const { method, data } = options;

    const isQueryParameters = method === Method.Get && !!data && typeof data === 'object';

    const resultUrl = isQueryParameters ? `${url}${queryStringify(data)}` : url;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, resultUrl);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      // xhr.onabort = reject;
      // xhr.onerror = reject;
      // xhr.ontimeout = reject;

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      // xhr.setRequestHeader('Content-Type', 'application/json');

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }
}
