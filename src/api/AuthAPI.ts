import BaseAPI from './BaseAPI';
import { SigninData, SignupData, User } from '../types/types';
import { Options } from '../utils/HTTPTransport';

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signin(signinData: SigninData) {
    return this.http.post('/signin', { data: signinData } as Options);
  }

  public signup(signupData: SignupData) { // create
    return this.http.post('/signup', { data: signupData } as Options);
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
