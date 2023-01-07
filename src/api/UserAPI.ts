import BaseAPI from './BaseAPI';
import { UpdatePassword, UpdateUserData } from '../types/types';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateUser(data: UpdateUserData) {
    return this.http.put('profile', data);
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  updatePassword(data: UpdatePassword) {
    return this.http.put('/password', data);
  }

  create = undefined;

  read = undefined;

  update = undefined;

  delete = undefined;
}
