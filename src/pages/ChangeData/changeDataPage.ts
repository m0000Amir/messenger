import Input from '../../components/Input';
import template from './changeData.hbs';
import { Block } from '../../utils/Block';
import Button from '../../components/Button';
import './changeData.less';
import Form from '../../components/Form';
import { focusin, focusout, isValid } from '../../utils/events';
import router from '../../utils/Router';
import { Routes, UpdateUserData } from '../../types/types';
import UserController from '../../controllers/UserController';

export class ChangeDataPage extends Block {
  constructor() {
    super({});
  }

  init() {
    // this.children.img = new Img({
    //   alt: 'logo',
    //   class: 'img',
    //   srcImg: profileLogo,
    // });
    this.children.form = new Form({
      formClass: 'change_data-fields',
      inputs: [
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'Email',
          inputClass: 'change_data-input-form__input',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'Login',
          inputClass: 'change_data-input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'First name',
          inputClass: 'change_data-input-form__input',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'Second name',
          inputClass: 'change_data-input-form__input',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'Display name',
          inputClass: 'change_data-input-form__input',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
        new Input({
          class: 'change_data-input-form',
          spanClass: 'change_data-input-form__title',
          label: 'Phone',
          inputClass: 'change_data-input-form__input',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: '',
          events: {
            focusin,
            focusout,
          },
        }),
      ],
      buttonClass: 'change_data-button',
      button: new Button({
        label: 'Save',
        class: 'button-link',
        type: 'submit',
        events: {
          click: (e) => this.onSubmit(e),
        },
      }),
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const updateUserData = {};
    debugger
    if (isValid(inputs)) {
      Array.from(inputs).forEach((input) => {
        updateUserData[input.name] = input.value;
      });
      UserController.updateUser(updateUserData as UpdateUserData);
      router.go(Routes.Profile);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
