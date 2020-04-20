let disclosureCallbacks = [];

const addCallback = (callback) => {
  disclosureCallbacks = [...disclosureCallbacks, callback];
};

const removeCallback = (callback) => {
  disclosureCallbacks = disclosureCallbacks.filter(disclosureCallback => disclosureCallback !== callback);
};

const closeMostRecentDisclosure = () => {
  if (!disclosureCallbacks.length) {
    return false;
  }

  disclosureCallbacks[disclosureCallbacks.length - 1]();
  return true;
};

export {
  addCallback,
  removeCallback,
  closeMostRecentDisclosure,
};
