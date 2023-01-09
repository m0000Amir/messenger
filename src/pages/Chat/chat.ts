import { Block } from '../../utils/Block';
import template from './chat.hbs';
import Dialogue from '../../components/Dialogue';
import MessageHistory from '../../components/MessageHistory';
import Message from '../../components/Message1';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { focusin, focusout, submit } from '../../utils/events';
import clipImg from '../../static/image/clip.svg';
import './chat.less';
import {
  dialogues, messagesOut, messagesIn, senderName,
} from '../../utils/mockData';
import { Routes } from '../../types/types';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.link = new Link({
      class: 'chat-page__dialogues__link',
      href: Routes.Profile,
      label: 'Profile',
    });
    this.children.search = new Form({
      inputs: [
        new Input({
          label: '',
          inputClass: 'chat-page__dialogues_search',
          inputType: 'text',
          inputName: 'search',
          inputPlaceholder: 'Search',

        }),
      ],
    });
    this.children.dialogues = dialogues.map((dlg) => new Dialogue({ ...dlg }));
    this.children.messageHistory = new MessageHistory({
      senderName,
      messageIn: messagesIn.map((msg) => new Message({ ...msg })),
      messageOut: messagesOut.map((msg) => new Message({ ...msg })),
      // clip: new Avatar({
      //   alt: 'clip',
      //   class: 'message-img',
      //   srcImg: clipImg,
      // }),
      form: new Form({
        formClass: 'form',
        inputs: [
          new Input({
            class: 'message-input',
            label: '',
            inputClass: 'message-input',
            inputType: 'text',
            inputName: 'message',
            inputPlaceholder: 'Message',
            events: {
              focusin,
              focusout,
            },
          }),
        ],
        buttonClass: 'message-form',
        button: new Button({
          label: '>',
          class: 'message-form__button',
          type: 'submit',
        }),
        events: { submit },
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
