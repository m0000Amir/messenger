import { Block } from '../../utils/Block';
import template from './messageHistory.hbs';
import './messageHistory.less';

interface MessageHistoryProps {
  senderName: string
  messageIn: Block[]
  messageOut: Block[]
  clip: Block
  form: Block
}

export class MessageHistory extends Block {
  constructor(props: MessageHistoryProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
