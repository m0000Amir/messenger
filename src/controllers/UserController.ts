import { UserAPI } from '../api/UserAPI';
import {
  UpdatePassword,
  UpdateUserData,
} from '../types/types';

export class UserController {
  private api = new UserAPI();

  async updateUser(data: UpdateUserData) {
    try {
      await this.api.updateUser(data);
      // todo: check it
      // await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e);
    }
  }

  async updatePassword(data: UpdatePassword) {
    try {
      await this.api.updatePassword(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvater(data);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UserController(new UserAPI());
