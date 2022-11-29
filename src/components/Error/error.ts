import { Block } from '../../utils/Block';
import template from './error.hbs';
import './error.less';

interface ErrorPageProps {
  title: string
  message: string
  link: Block
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
