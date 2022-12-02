import Input from '../../components/Input';
import template from './changeData.hbs';
import { Block } from '../../utils/Block';
import Button from '../../components/Button';
import './changeData.less';
import Img from '../../components/Img';
import profileLogo from '../../static/image/profile.svg';
import Form from '../../components/Form';
import { focusin, focusout, submit } from '../../utils/events';

export class ChangeData extends Block {
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
          label: 'Username',
          inputClass: 'change_data-input-form__input',
          inputType: 'text',
          inputName: 'user_name',
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
      }),
      events: { submit },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
