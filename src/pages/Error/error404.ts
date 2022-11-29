import { Block } from '../../utils/Block';
import template from './error.hbs';
import Link from '../../components/Link';
import { ErrorPage } from '../../components/Error/error';

class Error404Page extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.error = new ErrorPage({
      title: '404',
      message: 'Something wrong',
      link: new Link({
        class: 'text-link',
        href: './chat.hbs',
        label: 'Back to chats',
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Error404Page;
