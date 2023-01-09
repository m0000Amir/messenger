export interface SignupData {
  'first_name': string,
  'second_name': string,
  'login': string,
  'email': string,
  'password': string,
  'phone': string
}

export interface SigninData {
  'login': string,
  'password': string
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface UpdateUserData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export enum Routes {
  Index = '/',
  Registration = '/sign-up',
  Chat = '/messenger',
  Profile = '/settings',
  ChangePassword = '/change-password',
  ChangeData = '/change-data',
  Error404 = '/error404',
  Error500 = '/error500',
}

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User,
    time: string;
    content: string;
  }
}

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  }
}
