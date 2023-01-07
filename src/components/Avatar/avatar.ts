import { Block } from '../../utils/Block';
import template from './avatar.hbs';
import './avatar.less';

interface ImgProps {
  alt?: string
  srcImg: string
  events?: {
    click: (e: Event) => void;
  };
}

export class Avatar extends Block {
  constructor(props: ImgProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
