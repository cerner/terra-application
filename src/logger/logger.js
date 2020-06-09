const LOGGER_ENABLED = process.env.NODE_ENV !== 'production';
const NO_OP = () => {};

/* eslint-disable no-console */
const Logger = {
  info: LOGGER_ENABLED ? console.log : NO_OP,
  warn: LOGGER_ENABLED ? console.warn : NO_OP,
  error: console.error,
};
/* eslint-enable no-console */

const initializeLogger = ({ onInfo, onWarn, onError }) => {
  Logger.info = onInfo;
  Logger.warn = onWarn;
  Logger.error = onError;
};

export default Logger;
export { initializeLogger };
