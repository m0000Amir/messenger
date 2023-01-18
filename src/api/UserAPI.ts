import BaseAPI from './BaseAPI';
import { UpdatePassword, UpdateUserData } from '../types/types';
import { Options } from '../utils/HTTPTransport';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateUser(data: UpdateUserData) {
    return this.http.put('/profile', { data } as Options);
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', { data } as Options);
  }

  updatePassword(data: UpdatePassword) {
    return this.http.put('/password', { data } as Options);
  }

  create = undefined;

  read = undefined;

  update = undefined;

  delete = undefined;
}
