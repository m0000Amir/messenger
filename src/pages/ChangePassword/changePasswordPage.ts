import Input from '../../components/Input';
import template from './changePassword.hbs';
import { Block } from '../../utils/Block';
import Button from '../../components/Button';
import './changePassword.less';
import Form from '../../components/Form';
import { focusin, focusout, isValid } from '../../utils/events';
import router from '../../utils/Router';
import { Routes, UpdatePassword } from '../../types/types';
import UserController from '../../controllers/UserController';

export class ChangePasswordPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form({
      formClass: 'change_password-fields',
      inputs: [
        new Input({
          class: 'change_password-input-form',
          spanClass: 'change_password-input-form__title',
          label: 'Old Password',
          inputClass: 'change_password-input-form__input',
          inputType: 'password',
          inputName: 'oldPassword',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_password-input-form',
          spanClass: 'change_password-input-form__title',
          label: 'New Password',
          inputClass: 'change_password-input-form__input',
          inputType: 'password',
          inputName: 'newPassword',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_password-input-form',
          spanClass: 'change_password-input-form__title',
          label: 'Confirm New Password',
          inputClass: 'change_password-input-form__input',
          inputType: 'password',
          inputName: 'confirmPassword',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
      ],
      buttonClass: 'change_password-button',
      button: new Button({
        label: 'Save',
        class: 'button-link',
        type: 'submit',
        events: {
          click: (e) => { this.onSubmit(e); },
        },
      }),
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const updatePassword = {};
    if (isValid(inputs)) {
      Array.from(inputs).forEach((input) => {
        // @ts-ignore
        updatePassword[input.name] = input.value;
      });
      UserController.updatePassword(updatePassword as UpdatePassword);
      router.go(Routes.Profile);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
