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

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Post,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Put,
      data,
    });
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Patch,
      data,
    });
  }

  public delete<Response>(path: string): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Delete,
    });
  }

  private request<Response>(url: string, options: Options = { method: Method.Get }): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

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
      xhr.ontimeout = () => reject({ reason: 'timeout' });

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

// enum Methods {
//   GET = 'GET',
//   POST = 'POST',
//   PUT = 'PUT',
//   DELETE = 'DELETE',
// }
//
// interface IOptions {
//   method?: Methods;
//   data?: any;
//   timeout?: number;
//   headers?: Record<string, string>;
// }
//
// type HTTPMethod = (url: string, options: IOptions) => Promise<unknown>;
//
// export function queryStringify(data: {[index: string]: any}) {
//   if (typeof data !== 'object') {
//     throw new Error('Data must be object');
//   }
//
//   const keys = Object.keys(data);
//   return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
// }
//
// export class HTTPTransport {
//   static API_URL = 'https://ya-praktikum.tech/api/v2';
//
//   protected endpoint: string;
//
//   constructor(endpoint: string) {
//     this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
//   }
//
//   get: HTTPMethod = (url, options = {}) => (
//     this.request(url, { ...options, method: Methods.GET }, options.timeout)
//   );
//
//   post: HTTPMethod = (url, options = {}) => (
//     this.request(url, { ...options, method: Methods.POST }, options.timeout)
//   );
//
//   put: HTTPMethod = (url, options = {}) => (
//     this.request(url, { ...options, method: Methods.PUT }, options.timeout)
//   );
//
//   delete: HTTPMethod = (url, options = {}) => (
//     this.request(url, { ...options, method: Methods.DELETE }, options.timeout)
//   );
//
//   request(
//     url: string,
//     options: IOptions,
//     timeout = 5000,
//   ): Promise<XMLHttpRequest | unknown> {
//     const { headers = {}, method, data } = options;
//
//     return new Promise((resolve, reject) => {
//       if (!method) {
//         reject();
//         return;
//       }
//
//       const xhr = new XMLHttpRequest();
//       const isGet = method === Methods.GET;
//
//       xhr.open(
//         method,
//         isGet && !!data ? `${url}${queryStringify(data)}` : url,
//       );
//
//       Object.keys(headers).forEach((key) => {
//         xhr.setRequestHeader(key, headers[key]);
//       });
//
//       xhr.onload = () => {
//         resolve(xhr);
//       };
//
//       xhr.onabort = reject;
//       xhr.onerror = reject;
//
//       xhr.timeout = timeout;
//       xhr.ontimeout = reject;
//
//       if (isGet || !data) {
//         xhr.send();
//       } else {
//         xhr.send(data);
//       }
//     });
//   }
// }
