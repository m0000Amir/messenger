import { Block } from '../../utils/Block';
import template from './chat.hbs';
import Dialogue from '../../components/Dialogue';
import { MessageHistory } from '../../components/MessageHistory/mesageHistory';
import { Message } from '../../components/Message/message';
import './chat.less';

export class ChatPage extends Block {
  constructor() {
    super();
  }

  init() {
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
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
