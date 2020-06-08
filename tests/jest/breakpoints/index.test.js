import breakpoints, {
  activeBreakpointForSize,
  breakpointIsActiveForSize,
  ActiveBreakpointContext,
  ActiveBreakpointProvider,
  withActiveBreakpoint,
} from '../../../src/breakpoints';

describe('breakpoints/index', () => {
  it('should export breakpoints', () => {
    expect(breakpoints).toBeDefined();
  });

  it('should export activeBreakpointForSize', () => {
    expect(activeBreakpointForSize).toBeDefined();
  });

  it('should export breakpointIsActiveForSize', () => {
    expect(breakpointIsActiveForSize).toBeDefined();
  });

  it('should export ActiveBreakpointContext', () => {
    expect(ActiveBreakpointContext).toBeDefined();
  });

  it('should export ActiveBreakpointProvider', () => {
    expect(ActiveBreakpointProvider).toBeDefined();
  });

  it('should export withActiveBreakpoint', () => {
    expect(withActiveBreakpoint).toBeDefined();
  });
});
