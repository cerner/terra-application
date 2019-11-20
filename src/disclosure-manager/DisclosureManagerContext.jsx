import { createContext } from 'react';
import PropTypes from 'prop-types';

const DisclosureManagerContext = createContext();

const contextShape = PropTypes.shape({
  /**
   * A function that will disclose content within the determined DisclosureManager.
   * Ex:
   *
   *  disclose({
   *    preferredType: 'modal',
   *    size: 'large',
   *    content: {
   *      key: 'example-modal',
   *      component: <ExampleModal />
   *    },
   *  })
   */
  disclose: PropTypes.func.isRequired,

  /**
   * The following properties are only available to components that have been
   * disclosed by a Disclosure Manager.
   */

  /**
   * A function that will dismiss the active disclosed component and remove it
   * from the disclosure stack.
   */
  dismiss: PropTypes.func,
  /**
   * A function that will dismiss all components within the disclosure stack.
   */
  closeDisclosure: PropTypes.func,
  /**
   * A function that will dismiss the active disclosed component and remove it
   * from the disclosure stack. Similar to `dismiss`, though `goBack` is only
   * provided to nested disclosure components (i.e. when there is a component to
   * go back to).
   */
  goBack: PropTypes.func,
  /**
   * A function that will maximize the size of the disclosure. This function will
   * not be provided if the disclosure is already maximized.
   */
  maximize: PropTypes.func,
  /**
   * A function that will minimize the size of the disclosure. This function will
   * not be provided if the disclosure is already minimized.
   */
  minimize: PropTypes.func,
  /**
   * A function that will allow a component to register a function with the
   * DisclosureManager that will be called before the component is dismissed for
   * any reason. This function is expected to return true if the dismissal should
   * be allowed or false otherwise.
   */
  registerDismissCheck: PropTypes.func,
});

export default DisclosureManagerContext;
export { contextShape };
