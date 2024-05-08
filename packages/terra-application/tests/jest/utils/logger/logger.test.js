import { Logger, initializeLogger } from '../../../../src/utils';

/* eslint-disable no-console */
describe('Logger', () => {
  it('logs errors to console', () => {
    const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    Logger.error('error');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('logs warnings to console', () => {
    const spy = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    Logger.warn('warn');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it('logs info to console', () => {
    const spy = jest.spyOn(global.console, 'info').mockImplementation(() => {});
    Logger.info('info');
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
/* eslint-enable no-console */

describe('initializeLogger', () => {
  it('updates error', () => {
    const oldError = Logger.error;
    const error = () => {};
    initializeLogger({
      onError: error,
    });
    expect(Logger.error).toEqual(error);
    Logger.error = oldError;
  });

  it('updates warn', () => {
    const oldWarn = Logger.warn;
    const warn = () => {};
    initializeLogger({
      onWarn: warn,
    });
    expect(Logger.warn).toEqual(warn);
    Logger.warn = oldWarn;
  });

  it('updates info', () => {
    const oldInfo = Logger.info;
    const info = () => {};
    initializeLogger({
      onInfo: info,
    });
    expect(Logger.info).toEqual(info);
    Logger.info = oldInfo;
  });
});
