export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const dummy = "for-eslint";
