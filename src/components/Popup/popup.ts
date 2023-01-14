import { Block } from '../../utils/Block';
import template from './popup.hbs';
import './popup.less';

interface IPopup {
  title: string;
  content?: Block;
  button: Block;
  close?: Block;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
}

export class Popup extends Block {
  constructor(props: IPopup) {
    const events = {};
    super({ ...props, events });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
