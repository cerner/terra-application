// eslint-disable-next-line import/first
import Logger, { initializeLogger } from '../../../../src/utils/logger/logger';

// global.console = { info: jest.fn(), warn: jest.fn(), error: jest.fn() };

// const spyWarn = jest.spyOn(global.console, 'warn').mockImplementation();

// const spyInfo = jest.spyOn(global.console, 'info').mockImplementation();

// const spyError = jest.spyOn(global.console, 'error').mockImplementation();

/* eslint-disable no-console */
describe('Logger', () => {
  const OLD_ENV = process.env;

  // beforeEach(() => {
  //   jest.resetModules(); // this is important - it clears the cache
  //   process.env = { ...OLD_ENV };
  //   delete process.env.NODE_ENV;
  // });

  afterEach(() => {
    // process.env = OLD_ENV;
    // spyWarn.mockClear();
    // spyInfo.mockClear();
    // spyError.mockClear();
  });

  it('logs errors to console', () => {
    const spyError = jest.spyOn(global.console, 'error').mockImplementation(() => {});
    Logger.error('error');
    expect(spyError).toHaveBeenCalledTimes(1);
    spyError.mockRestore();
  });

  // it('logs warnings to console', () => {
  //   Logger.warn('warn');
  //   expect(spyWarn).toHaveBeenCalledTimes(1);
  // });

  // it('logs info to console', () => {
  //   Logger.info('info');
  //   expect(spyInfo).toHaveBeenCalledTimes(1);
  // });

  // it('logs an error in production', () => {
  //   const spyError = jest.spyOn(global.console, 'error').mockImplementation();
  //   process.env.NODE_ENV = 'production';
  //   Logger.error('error');
  //   expect(spyError).toHaveBeenCalledTimes(1);
  // });

  // it('no-ops for warn in production', () => {
  //   process.env.NODE_ENV = 'production';
  //   Logger.warn('warn');
  //   expect(spyWarn).toHaveBeenCalledTimes(0);
  // });

  // it('no-ops for info in production', () => {
  //   process.env.NODE_ENV = 'production';
  //   Logger.info('info');
  //   expect(spyInfo).toHaveBeenCalledTimes(0);
  // });
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
    Logger.error = oldWarn;
  });

  it('updates info', () => {
    const oldInfo = Logger.info;
    const info = () => {};
    initializeLogger({
      onInfo: info,
    });
    expect(Logger.info).toEqual(info);
    Logger.error = oldInfo;
  });
});
