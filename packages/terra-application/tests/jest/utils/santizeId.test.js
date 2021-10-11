import sanitizeId from '../../../src/utils/sanitize-id';

describe('sanitizeId', () => {
  it('should not manipulate valid strings', () => {
    const testId = 'Abcd._-:';
    expect(sanitizeId(testId)).toEqual(testId);
  });

  it('should replace invalid characters', () => {
    const testId = 'Abc/123/<>';
    expect(sanitizeId(testId)).toEqual('Abc-123-');
  });

  it('should group sequential invalid characters', () => {
    const testId = 'A///////2';
    expect(sanitizeId(testId)).toEqual('A-2');
  });
});
