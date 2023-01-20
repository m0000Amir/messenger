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
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]{2,15}$/,
  },
  second_name: {
    rule: 'It must be consists 3 - 15 characters and first letter capitalized.',
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]{2,15}$/,
  },
  display_name: {
    rule: 'It must be consists is no less than 3characters.',
    regExp: /(?!^\d+$)^[a-zA-Z0-9_-]{3,40}$/,
  },
  phone: {
    rule: 'It must be consists 10-15 numbers',
    regExp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  },
  password: {
    rule: 'It must be consists 8-40 characters including a number and a capital letter.',
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  oldPassword: {
    rule: 'It must be consists 8-40 characters including a number and a capital letter.',
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  newPassword: {
    rule: 'It must be consists 8-40 characters including a number and a capital letter.',
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  confirmPassword: {
    rule: 'It must be consists 8-40 characters including a number and a capital letter.',
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  message: {
    rule: 'It must not be empty.',
    regExp: /(.|\s)*\S(.|\s)*$/,
  },
  search: {
    rule: '',
    regExp: /(?!^\d+$)^[a-zA-Z0-9_-]{0,40}$/,
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
  // const error = target.getElementsByTagName('span');
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

// @ts-ignore
const isValid = (inputs: any): boolean => Array.from(inputs).every((element: Element) => {
  const inputElement = element as HTMLInputElement;
  const { regExp } = expression[inputElement.name];
  if (!regExp.test(inputElement.value)) {
    inputElement.value = '';
  }
  return regExp.test(inputElement.value);
});

const submit = (event: Event): void => {
  event.preventDefault();
  const inputs = document.getElementsByTagName('input');

  const isValid: boolean = Array.from(inputs).every((element: Element) => {
    const inputElement = element as HTMLInputElement;
    const { regExp } = expression[inputElement.name];
    if (!regExp.test(inputElement.value)) {
      inputElement.value = '';
    }
    return regExp.test(inputElement.value);
  });

  if (isValid) {
    const data: Record<string, string> = {};
    Array.from(inputs).forEach((input) => {
      data[input.name] = input.value;
    });
    console.log(data);
  }
};

export {
  focusin, focusout, isValid, submit,
};
