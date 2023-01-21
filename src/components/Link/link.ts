import { Block } from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocks/withRouter';
import template from './link.hbs';
import './link.less';

interface LinkProps extends PropsWithRouter {
  class?: string;
  href: string;
  label: string;
  events?: {
    click: () => void;
  };
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.href);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);

// import { Block } from '../../utils/Block';
// import template from './link.hbs';
// import './link.less';
//
// interface LinkProps {
//   class: string
//   href: string
//   label: string
// }
//
// export class Link extends Block {
//   constructor(props: LinkProps) {
//     super(props);
//   }
//
//   render() {
//     return this.compile(template, { ...this.props });
//   }
// }
