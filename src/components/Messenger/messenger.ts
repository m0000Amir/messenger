import { Block } from '../../utils/Block';
import template from './messenger.hbs';
import Message from '../Message';
import { Input } from '../Input/input';
import Button from '../../components/Button';
import MessagesController from '../../controllers/MessagesController';
import { Message as MessageInfo } from '../../types/types';
import ChatsController from '../../controllers/ChatsController';
import { withStore } from '../../utils/Store';
import { focusin, focusout } from '../../utils/events';
import Popup from '../../components/Popup';
import './messenger.less';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }

  protected init() {
    this.children.messages = this.createMessages(this.props);

    this.children.message_input = new Input({
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
    });

    this.children.button = new Button({
      label: '>',
      class: 'message-button',
      type: 'button',
      events: {
        click: () => {
          const input: any = document.querySelector('#message');
          const message = input.value;
          input.value = '';

          MessagesController.sendMessage(this.props.selectedChat!, message);
        },
      },
    });

    this.children.menuButton = new Button({
      label: '⋮',
      class: 'menu-button',
      events: {
        click: () => {
          console.log('click');
          const menuPopup = document.querySelector('.menu-popup');
          (menuPopup as HTMLElement).classList.toggle('visible');
        },
      },
    });

    this.children.addUserButton = new Button({
      label: 'add user',
      class: 'add-button',
      events: {
        click: () => {
          (this.children.addUserPopup as Popup).show();
        },
      },
    });
    this.children.deleteUserButton = new Button({
      label: 'delete user',
      class: 'add-button',
      events: {
        click: () => {
          (this.children.deleteUserPopup as Popup).show();
        },
      },
    });
    this.children.deleteChatButton = new Button({
      label: 'delete chat',
      class: 'add-button',
      events: {
        click: () => {
          (this.children.deleteChatPopup as Popup).show();
        },
      },
    });

    this.children.addUserPopup = new Popup({
      title: 'Add User',
      button: new Button({
        class: 'button-link',
        label: 'Add',
        type: 'submit',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const input: any = document.querySelector('#addUserId');
            const userId = input.value;
            if (userId !== '') {
              ChatsController.addUserToChat(this.props.selectedChat as number, userId);
              input.value = '';
            }
            (this.children.addUserPopup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: '',
        inputType: 'text',
        inputPlaceholder: 'user Id',
        inputName: 'addUserId',
        class: 'add-user-validated-input',
      }),
    });

    this.children.deleteChatPopup = new Popup({
      title: 'Delete Chat',
      button: new Button({
        class: 'button-link',
        label: 'Delete',
        type: 'submit',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const input: any = document.querySelector('#deleteChatId');
            const chatId = input.value;

            if (chatId !== '') {
              ChatsController.delete(
                chatId,
              );
              input.value = '';
            }
            (this.children.deleteChatPopup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: '',
        inputType: 'text',
        inputPlaceholder: 'chat Id',
        inputName: 'deleteChatId',
        class: 'delete-user-validated-input',
      }),
    });

    this.children.deleteUserPopup = new Popup({
      title: 'Delete User',
      button: new Button({
        class: 'button-link',
        label: 'Delete',
        type: 'submit',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const input: any = document.querySelector('#deleteUserId');
            const userId = input.value;

            if (userId !== '') {
              ChatsController.deleteUserFromChat(
                this.props.selectedChat as number,
                userId,
              );
              input.value = '';
            }
            (this.children.deleteUserPopup as Popup).hide();
          },
        },
      }),
      content: new Input({
        label: '',
        inputType: 'text',
        inputPlaceholder: 'user Id',
        inputName: 'deleteUserId',
        class: 'delete-user-validated-input',
      }),
    });
  }

  protected componentDidUpdate(newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => new Message(
      { ...data, isMine: props.userId === data.user_id },
    ));
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase as any);
