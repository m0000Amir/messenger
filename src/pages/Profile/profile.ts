import Input from '../../components/Input';
import template from './profile.hbs';
import { Block } from '../../utils/Block';
import './profile.less';
import Avatar from '../../components/Avatar';
import profileLogo from '../../static/image/profile.svg';
import Form from '../../components/Form';
import Link from '../../components/Link';
import Button from '../../components/Button';
import AuthController from '../../controllers/AuthControllers';
import { Routes, User } from '../../types/types';
import Router from '../../utils/Router';
import { withStore } from '../../utils/Store';
import Popup from '../../components/Popup';
import UserController from '../../controllers/UserController';

interface ProfileProps extends User {}

export class ProfilePageBase extends Block<ProfileProps> {

  async componentDidMount() {
    await AuthController.fetchUser();
  }

  init() {
    console.log(this.props);
    this.children.img = new Avatar({
      alt: 'logo',
      srcImg: this.props.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
        : profileLogo,
      events: {
        click: () => {
          (this.children.popup as Popup).show();
        },
      },
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
          inputPlaceholder: this.props.email,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Login',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: this.props.login,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'First name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: this.props.first_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Second name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: this.props.second_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Display name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: this.props.display_name ? this.props.display_name : this.props.first_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Phone',
          inputClass: 'profile-input-form__input',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: this.props.phone,
          readonly: 'readonly',
        }),
      ],
    });
    this.children.changeData = new Link({
      class: 'profile-link',
      href: Routes.ChangeData,
      label: 'Change Data',
    });
    this.children.changePassword = new Link({
      class: 'profile-link',
      href: Routes.ChangePassword,
      label: 'Change Password',
    });
    this.children.exit = new Button({
      label: 'Exit',
      class: 'button-exit',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.back = new Button({
      label: '<-',
      class: 'button-back',
      events: {
        click: () => { Router.go(Routes.Chat); },
      },
    });

    this.children.popup = new Popup({
      title: 'Upload file',
      button: new Button({
        class: 'button-link',
        label: 'Change',
        type: 'submit',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const formData = new FormData();
            const input: any = document.querySelector('#avatar');
            formData.append('avatar', input?.files[0]);
            UserController.updateAvatar(formData);
            (this.children.popup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: '',
        inputType: 'file',
        inputPlaceholder: 'file',
        inputName: 'avatar',
        class: 'avatar-validated-input',
      }),
    });
  }

  componentDidUpdate(
    oldProps: ProfileProps,
    newProps: ProfileProps,
  ): boolean {
    /**
     * Update children
     */
    (this.children.img as Avatar).setProps({
      srcImg: this.props.avatar
        ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
        : profileLogo,
    });

    this.children.form = new Form({
      inputs: [
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Email',
          inputClass: 'profile-input-form__input',
          inputType: 'email',
          inputName: 'email',
          inputPlaceholder: this.props.email,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Login',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'login',
          inputPlaceholder: this.props.login,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'First name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'first_name',
          inputPlaceholder: this.props.first_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Second name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'second_name',
          inputPlaceholder: this.props.second_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Display name',
          inputClass: 'profile-input-form__input',
          inputType: 'text',
          inputName: 'display_name',
          inputPlaceholder: this.props.display_name ? this.props.display_name : this.props.first_name,
          readonly: 'readonly',
        }),
        new Input({
          class: 'profile-input-form',
          spanClass: 'profile-input-form__title',
          label: 'Phone',
          inputClass: 'profile-input-form__input',
          inputType: 'tel',
          inputName: 'phone',
          inputPlaceholder: this.props.phone,
          readonly: 'readonly',
        }),
      ],
    });
    return true;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
const withUser = withStore((state) => ({ ...state.user }));
export const ProfilePage = withUser(ProfilePageBase as typeof Block);
