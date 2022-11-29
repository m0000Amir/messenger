import { Block } from '../../utils/Block';
import template from './link.hbs';
import './link.less';

interface LinkProps {
  class: string
  href: string
  label: string
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
