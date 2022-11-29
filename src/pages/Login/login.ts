import { Block } from '../../utils/Block';
import template from './login.hbs';
import Button from '../../components/Button';
import './login.less';
import Input from '../../components/Input';
import Link from '../../components/Link';
import Form from '../../components/Form';

export class LoginPage extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.form = new Form({
      formClass: 'fields',
      inputs: [
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Login',
          inputClass: 'input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'AMukhtarov',
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Password',
          inputClass: 'input-form__input',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: '••••••••••••',
        }),
      ],
    });
    this.children.button = new Button({
      label: 'Sign in',
      class: 'button-link',
    });
    this.children.link = new Link({
      class: 'text-link',
      href: './registration.hbs',
      label: 'Sign Up',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
