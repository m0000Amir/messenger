import BaseAPI from './BaseAPI';
import { ChatInfo, User } from '../types/types';
import { Options } from '../utils/HTTPTransport';

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(title: string) {
    return this.http.post('/', { data: { title } });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete('/', { data: { chatId: id } });
  }

  read(): Promise<ChatInfo[]> {
    return this.http.get('/');
  }

  getUsers(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { data: { users, chatId: id } });
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete('/users', { data: { users, chatId: id } });
  }

  async getToken(id: number): Promise<string> {
    // @ts-ignore
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatsAPI();
