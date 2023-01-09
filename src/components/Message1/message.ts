import { Block } from '../../utils/Block';
import template from './message.hbs';
import './message.less';

interface MessageProps {
  messageClass: string
  text: string
  timeClass: string
  time: string
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
