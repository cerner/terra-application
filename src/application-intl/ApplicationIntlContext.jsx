import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationIntlContext = createContext();

const contextShape = PropTypes.shape({ formatMessage: PropTypes.func });

export default ApplicationIntlContext;
export { contextShape };
