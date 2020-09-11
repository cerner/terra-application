import React from 'react';
// import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import NavigationContext from '../navigation/NavigationContext';

import SkipToLinksContext from './SkipToLinksContext';

const propTypes = {};

const SkipToLink = ({
  description, callback,
}) => {
  const skipToLinkContextValue = React.useContext(SkipToLinksContext);
  const navigationContextValue = React.useContext(NavigationContext);

  const uuidRef = React.useRef(uuidv4());

  React.useEffect(() => {
    if (!skipToLinkContextValue) {
      throw new Error('A SkipToLink was not rendered within the context of a SkipToLinkProvider.');
    }

    if (!navigationContextValue.isActive) {
      return;
    }

    skipToLinkContextValue.registerLink(uuidRef.current, description, callback);
  }, [skipToLinkContextValue, description, callback, navigationContextValue.isActive]);

  React.useEffect(() => {
    if (!navigationContextValue.isActive) {
      skipToLinkContextValue.unregisterLink(uuidRef.current);
    }
  }, [skipToLinkContextValue, navigationContextValue.isActive]);

  React.useEffect(() => () => {
    skipToLinkContextValue.unregisterLink(uuidRef.current);
  }, [skipToLinkContextValue]);

  return null;
};

SkipToLink.propTypes = propTypes;

export default SkipToLink;
