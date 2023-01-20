import { Block } from './Block';

describe('Block', () => {
  class Component extends Block<{}> {
    render(): DocumentFragment {
      return new DocumentFragment();
    }
  }

  it('test', () => {
    const instance = new Component({});
  });
});
