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
      // alert('Error during signing up');
      console.error(e);
    }
  }

  async signin(signData: SigninData) {
    try {
      await this.api.signin(signData);
      await this.fetchUser();
      router.go(Routes.Chat);
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }
}

export default new AuthController();
