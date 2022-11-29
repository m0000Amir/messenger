import Input from '../../components/Input';
import template from './profile.hbs';
import { Block } from '../../utils/Block';
import Button from '../../components/Button';
import './profile.less';
import Img from '../../components/Img';
import profileLogo from '../../static/image/profile.svg';
import Form from '../../components/Form';

export class Profile extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.img = new Img({
      class: 'img',
      srcImg: profileLogo,
    });
    this.children.form = new Form({
      formClass: 'fields',
      inputs: [
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Email',
          inputClass: 'profile-input-form__input',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: 'pochta@yandex.ru',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Login',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: 'AMukhtarov',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'First name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: 'Amir',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Second name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: 'Mukhtarov',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Username',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'Username',
          inputPlaceholder: 'Amir',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Phone',
          inputClass: 'profile-input-form__input',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: '+7 (999) 123 45 67',
        }),
      ],
    });

    this.children.button = new Button({
      label: 'Save',
      class: 'button-link',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
