import { Block } from '../../utils/Block';
import template from './chatsList.hbs';
import Chat from '../Chat';
import { withStore } from '../../utils/Store';
import { ChatInfo, Routes } from '../../types/types';
import ChatsController from '../../controllers/ChatsController';
import Link from '../../components/Link';
import './chatsList.less';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup';

// import MessagesController from '../../controllers/MessagesController';
// import { Link } from '../Link';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super(props);
  }
  // chat-page__dialogues_search
  protected init() {
    this.children.search = new Form({
      inputs: [
        new Input({
          label: '',
          inputClass: 'search',
          inputType: 'text',
          inputName: 'search',
          inputPlaceholder: 'Search',

        }),
      ],
    });

    this.children.addChat = new Button({
      label: 'Add Chat',
      class: 'add-chat-button',
      events: {
        click: () => {
          (this.children.addChatPopup as Popup).show();
        },
      },
    });
    this.children.chats = this.createChats(this.props);
    // this.children.profileLink = new Link({ to: '/profile', label: 'Профиль' });
    this.children.profileLink = new Link({
      class: 'link',
      href: Routes.Profile,
      label: 'Profile',
    });
    this.children.addChatPopup = new Popup({
      title: 'Add Chat',
      button: new Button({
        class: 'button-link',
        label: 'Add',
        type: 'submit',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const input: any = document.querySelector("#chatName");
            const chatName = input.value;

            if (chatName !== '') {
              ChatsController.create(chatName);
              input.value = '';
            }
            (this.children.addChatPopup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: '',
        inputType: 'text',
        inputPlaceholder: 'Chat Name',
        inputName: 'chatName',
        inputClass: 'add-chat-input',
        class: 'avatar-validated-input',
      }),
    });
  }

  protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);
    // debugger

    return true;
  }

  private createChats(props: ChatsListProps) {
    // debugger
    return props.chats.map((data) => {
      // debugger
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          },
        },
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore((state) => (
  { chats: [...(state.chats || [])] }
));

export const ChatsList = withChats(ChatsListBase as any);
