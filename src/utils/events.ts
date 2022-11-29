const focusin = (event: Event): void => {
  console.log('focus');
};

const focusout = (event: Event): void => {
  console.log('blur');
};

const submit = (event: Event): void => {
  event.preventDefault();
  console.log('submit');
};

export { focusin, focusout, submit };
