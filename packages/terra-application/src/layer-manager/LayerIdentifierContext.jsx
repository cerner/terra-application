import React from 'react';
import PropTypes from 'prop-types';

/**
 * The LayerIdentifierContext provides the identifier of the presenting
 * layer to the layer's contents.
 */
const LayerIdentifierContext = React.createContext();

const contextShape = PropTypes.string;

export default LayerIdentifierContext;
export { contextShape };
