import { Block } from '../../utils/Block';
import template from './form.hbs';
import './form.less';

interface FormProps {
  formClass: string
  inputs: Block[]
}

export class Form extends Block {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
