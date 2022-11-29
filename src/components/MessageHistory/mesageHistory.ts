import { Block } from '../../utils/Block';
import template from './messageHistory.hbs';
import './messageHistory.less';
import clipImg from '../../static/image/clip.svg';

interface MessageHistoryProps {
  user: string
  messageIn: Block[]
  messageOut: Block[]
}

export class MessageHistory extends Block {
  constructor(props: MessageHistoryProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, srcImg: clipImg });
  }
}
