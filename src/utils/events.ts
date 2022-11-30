interface IPattern {
  rule: string;
  regExp: RegExp;
}

const expression: Record<string, IPattern> = {
  login: {
    rule: 'It must be consists 3 - 20 characters.',
    regExp: /(?!^\d+$)^[a-zA-Z0-9_-]{3,20}$/,
  },
  email: {
    rule: 'Please provide a valid email address.',
    regExp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  },
  first_name: {
    rule: 'It must be consists 3 - 15 characters and first letter capitalized.',
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{3,15}$/,
  },
  second_name: {
    rule: 'It must be consists 3 - 15 characters and first letter capitalized.',
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{3,15}$/,
  },
  phone: {
    rule: 'It must be consists 10-15 numbers',
    regExp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  },
  chat_name: {
    rule: 'It must be consists 10-12 characters',
    regExp: /^[а-яa-zА-ЯA-Z0-9_-]{3,15}$/,
  },
  password: {
    rule: 'It must be consists 8-40 characters including a number and a capital letter.',
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
};

/** JSDoc
 * Validation of input form
 * By using RegExp input value is checked.
 * Error message is placed in <span> </span>.
 * @param {object} event - Input element
 */
const patternValidation = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const parent = target.parentElement;

  const error = parent?.querySelector('.input-error');
  const input = event.target as HTMLInputElement;
  const { regExp } = expression[input.name];
  const isValid: boolean = regExp.test(input.value);
  if (isValid) {
    error!.textContent = '';
  } else {
    error!.textContent = expression[input.name].rule;
  }
};

const focusin = (event: Event): void => {
  patternValidation(event);
};

const focusout = (event: Event): void => {
  patternValidation(event);
};

const submit = (event: Event): void => {
  event.preventDefault();
  console.log('submit');
};

export { focusin, focusout, submit };
