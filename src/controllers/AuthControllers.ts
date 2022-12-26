import { Routes, SigninData, SignupData } from '../types/types';
import { AuthAPI } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
  private api = new AuthAPI();

  async signup(signupData: SignupData) {
    try {
      await this.api.signup(signupData);

      await this.fetchUser();
      store.set('user.error', null);
      router.go(Routes.Chat);
    } catch (e) {
      store.set('user.error', e);
      alert('Error during signing up');
    }
  }

  async signin(signData: SigninData) {
    try {
      await this.api.signin(signData);

      await this.fetchUser();

      router.go(Routes.Chat);
    } catch (e) {
      // alert('Error during signing in');
      console.error(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      // todo:  add MessageController close All
      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  // async updateUsername(username: string) {
  //   const { username: oldUsername } = store.getState().user;
  //
  //   store.set('user.name', username);
  //
  //   const result = await this.api.update({ username });
  //
  //   if (!result) {
  //     store.set('user.name', oldUsername);
  //   }
  // }

  async fetchUser() {
    try {
      const user = await this.api.read();

      store.set('user', user);
    } catch (e) {
      console.error(e);
    }
  }
}

// async fetchChats() {
//   try {
//     const chats = await this.api.read();
//
//     store.set('chats', chats);
//   } catch (e) {
//     alert('Error during user fetch');
//   }
// }

export default new AuthController();
