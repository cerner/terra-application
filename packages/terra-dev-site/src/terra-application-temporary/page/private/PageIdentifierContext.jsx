import { createContext } from 'react';
import PropTypes from 'prop-types';

const PageIdentifierContext = createContext(undefined);

const contextShape = PropTypes.string;

export default PageIdentifierContext;
export { contextShape };
