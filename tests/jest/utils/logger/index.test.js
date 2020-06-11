import Logger, {
  initializeLogger,
} from '../../../../src/utils/logger';

describe('logger/index', () => {
  it('should export Logger', () => {
    expect(Logger).toBeDefined();
  });

  it('should export initializeLogger', () => {
    expect(initializeLogger).toBeDefined();
  });
});
