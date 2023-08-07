const date = new Date(Date.now());

const counterTime = () => {
  return date.toLocaleTimeString();
};

const counterDate = () => {
  return date.toLocaleDateString();
};

export { counterTime, counterDate };
