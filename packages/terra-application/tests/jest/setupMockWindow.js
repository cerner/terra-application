/**
 * Replaces private window implementations with jest mocks.
 * @returns Function that reapplied default implementations when called.
 */
function setupMockWindow() {
  const { location, open } = window;
  delete window.location;
  delete window.open;

  window.location = { reload: jest.fn(), assign: jest.fn() };
  window.open = jest.fn();

  return {
    restoreWindow: () => {
      window.location = location;
      window.open = open;
    },
  };
}

export default setupMockWindow;
