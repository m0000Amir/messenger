
import BaseAPI from './BaseAPI';
import { SigninData, SignupData, User } from '../types/types';

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signin(signinData: SigninData) {
    return this.http.post('/signin', { data: signinData });
  }

  public signup(signupData: SignupData) { // create
    return this.http.post('/signup', { data: signupData });
  }

  public read(): Promise<User> { // getUser
    return this.http.get('/user');
  }

  public logout() { // delete
    return this.http.post('/logout');
  }

  create = undefined;

  update = undefined;

  delete = undefined;
}
