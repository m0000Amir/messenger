import { Block } from '../../utils/Block';
import Input from '../../components/Input';
import Button from '../../components/Button';
import template from './registration.hbs';
import './registration.less';
import Link from '../../components/Link';
import Form from '../../components/Form';
import { focusin, focusout, isValid } from '../../utils/events';
import { Routes, SignupData } from '../../types/types';
import AuthController from '../../controllers/AuthControllers';

export class RegistrationPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form({
      formClass: 'fields',
      inputs: [
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Email',
          inputClass: 'input-form__input',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Login',
          inputClass: 'input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'First name',
          inputClass: 'input-form__input',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Second name',
          inputClass: 'input-form__input',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Phone',
          inputClass: 'input-form__input',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Password',
          inputClass: 'input-form__input',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'input-form',
          spanClass: 'input-form__title',
          label: 'Confirm password',
          inputClass: 'input-form__input',
          inputType: 'password',
          inputName: 'password',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
      ],
      buttonClass: 'registration__link',
      button: new Button({
        label: 'Sign Up',
        class: 'button-link',
        events: {
          click: (e) => this.onSubmit(e),
        },
      }),
    });

    this.children.link = new Link({
      class: 'text-link',
      href: Routes.Index,
      label: 'Sign In',
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const signUpData = {};
    if (isValid(inputs)) {
      Array.from(inputs).forEach((input) => {
        // @ts-ignore
        signUpData[input.name] = input.value;
      });
      AuthController.signup(signUpData as SignupData);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
