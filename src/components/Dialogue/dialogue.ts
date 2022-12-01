import { Block } from '../../utils/Block';
import template from './dialogue.hbs';
import './dialogue.less';

interface DialogueProps {
  name: string
  lastMessage: string
  time: string
}

export class Dialogue extends Block {
  constructor(props: DialogueProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
