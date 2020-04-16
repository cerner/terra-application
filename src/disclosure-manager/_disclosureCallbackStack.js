const disclosureCallbackStack = [];

const pushCallback = (callback) => {
  disclosureCallbackStack.push(callback);
};

const popCallback = () => {
  disclosureCallbackStack.pop();
};

const closeMostRecentDisclosure = () => {
  if (!disclosureCallbackStack.length) {
    return false;
  }

  disclosureCallbackStack[disclosureCallbackStack.length - 1]();
  return true;
};

export {
  pushCallback,
  popCallback,
  closeMostRecentDisclosure,
};
