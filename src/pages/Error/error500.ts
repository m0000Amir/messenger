import { Block } from '../../utils/Block';
import template from './error.hbs';
import Link from '../../components/Link';
import { ErrorPage } from '../../components/Error/error';

class Error500Page extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.error = new ErrorPage({
      title: '500',
      message: 'We have been fixing',
      link: new Link({
        class: 'error-text-link',
        href: './chat',
        label: 'Back to chats',
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Error500Page;
