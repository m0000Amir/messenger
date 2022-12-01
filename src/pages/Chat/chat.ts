import { Block } from '../../utils/Block';
import template from './chat.hbs';
import Dialogue from '../../components/Dialogue';
import { MessageHistory } from '../../components/MessageHistory/mesageHistory';
import { Message } from '../../components/Message/message';
import './chat.less';
import Form from '../../components/Form';
import { focusin, focusout, submit } from '../../utils/events';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

export class ChatPage extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.link = new Link({
      class: 'chat-page__dialogues__link',
      href: './profile',
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
    this.children.dialogues = [
      new Dialogue({
        name: 'Andrew',
        lastMessage: 'Hello!',
        time: '13:40',
      }),
      new Dialogue({
        name: 'John',
        lastMessage: 'Sure!',
        time: '12:01',
      }),
      new Dialogue({
        name: 'Mark',
        lastMessage: 'Definitely!',
        time: '11:23',
      }),
      new Dialogue({
        name: 'Emily',
        lastMessage: 'Here you go!',
        time: '09:02',

      }),
      new Dialogue({
        name: 'Jane',
        lastMessage: 'Here you are!',
        time: '08:02',
      }),
    ];
    this.children.messageHistory = new MessageHistory({
      user: 'Andrew',
      messageIn: [
        new Message({
          messageClass: 'message_in-message',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quibusdam! Officia autem quo eius nobis voluptatem molestias dolore odio quaerat hic, optio, voluptatibus perspiciatis quasi illum quam, laborum temporibus et!',
          timeClass: 'message-time',
          time: '13:38',
        }),
        new Message({
          messageClass: 'message_in-message',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quibusdam! Officia autem quo eius nobis voluptatem molestias dolore odio quaerat hic, optio, voluptatibus perspiciatis quasi illum quam, laborum temporibus et!',
          timeClass: 'message-time',
          time: '13:40',
        }),
      ],
      messageOut: [
        new Message({
          messageClass: 'message_out-message',
          text: 'Cool!',
          timeClass: 'message-time',
          time: '13-38',
        }),
      ],
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
