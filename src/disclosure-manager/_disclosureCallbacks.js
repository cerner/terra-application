let disclosureCallbacks = [];

const addCallback = (callback) => {
  disclosureCallbacks = [...disclosureCallbacks, callback];
};

const removeCallback = (callback) => {
  disclosureCallbacks = disclosureCallbacks.filter(disclosureCallback => disclosureCallback !== callback);
};

const closeMostRecentDisclosure = () => {
  if (!disclosureCallbacks.length) {
    return Promise.resolve();
  }

  return disclosureCallbacks[disclosureCallbacks.length - 1]();
};

const getActiveDisclosureCount = () => (disclosureCallbacks.length);

export {
  addCallback,
  removeCallback,
  closeMostRecentDisclosure,
  getActiveDisclosureCount,
};
