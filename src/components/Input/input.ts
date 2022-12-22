import { Block } from '../../utils/Block';
import template from './input.hbs';
import './Input.less';

interface InputFormProps {
  class?: string
  spanClass?: string
  label: string
  inputClass?: string
  inputType: string
  inputName: string
  inputPlaceholder: string
  events?: { focusin: (e: Event) => void; focusout: (e: Event) => void };
}

export class Input extends Block {
  constructor(props: InputFormProps) {
    super(props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
