import { Block } from '../utils/Block';
import Router from '../utils/Router';

export function withRouter(Component: typeof Block<any>) {
  type P = typeof Component extends typeof Block<infer Props extends Record<string, any>> ? Props : any;

  return class withRouter extends Component {
    constructor(props: P & PropsWithRouter) {
      super({ ...props, router: Router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof Router
}
