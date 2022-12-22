import Input from '../../components/Input';
import template from './changePassword.hbs';
import { Block } from '../../utils/Block';
import Button from '../../components/Button';
import './changePassword.less';
import Img from '../../components/Img';
import profileLogo from '../../static/image/profile.svg';
import Form from '../../components/Form';
import { focusin, focusout, submit } from '../../utils/events';

export class ChangePasswordPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.img = new Img({
      alt: 'logo',
      class: 'img',
      srcImg: profileLogo,
    });
    this.children.form = new Form({
      formClass: 'change_password-fields',
      inputs: [
        new Input({
          class: 'change_password-input-form',
          spanClass: 'change_password-input-form__title',
          label: 'Old Password',
          inputClass: 'change_password-input-form__input',
          inputType: 'password',
          inputName: 'password',
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
          inputName: 'password',
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
          inputName: 'password',
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
      }),
      events: { submit },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
