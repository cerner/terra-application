import React from 'react';
import PropTypes from 'prop-types';
import { BannerProvider } from '../../../banner';
import BannerExample from './BannerExample';

const Example = ({ isInitiallyClosed }) => (
  <BannerProvider>
    <BannerExample isInitiallyClosed={isInitiallyClosed} />
  </BannerProvider>
);

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: true,
};

export default Example;
