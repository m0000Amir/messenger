import { BaseLink as Link } from './link';
import { expect } from 'chai';
import Router from '../../utils/Router';
import sinon from 'sinon';

describe('Link', () => {
  let routerMock: any;

  beforeEach(() => {
    routerMock = {
      go: sinon.fake(),
    };
  });

  it('should call Router.go on click', () => {
    const instance = new Link({
      href: '/asd',
      label: 'Click me',
      router: routerMock as any,
    });
    const { element } = instance;

    element?.click();

    expect(routerMock.go.callCount).to.eq(1);
  });

  it('should call Router.go on click with link href', () => {
    const path = '/abc';
    const instance = new Link({
      href: path,
      label: 'Click me',
      router: routerMock as any,
    });
    const { element } = instance;

    element?.click();

    expect(routerMock.go.firstArg).to.eq(path);
  });
});
