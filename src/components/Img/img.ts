import { Block } from '../../utils/Block';
import template from './img.hbs';
import './img.less';

interface ImgProps {
  alt?: string
  class: string
  srcImg: string
}

export class Img extends Block {
  constructor(props: ImgProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
