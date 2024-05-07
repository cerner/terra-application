import {Logger, initializeLogger, EventEmitter} from '../../../src/utils';

describe('utils/index', () => {
  it('should export Logger', () => {
    expect(Logger).toBeDefined();
  });
  it('should export SlidePanelManager', () => {
    expect(initializeLogger).toBeDefined();
  });
  it('should export SlidePanelManager', () => {
    expect(EventEmitter).toBeDefined();
  });
});
