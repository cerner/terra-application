import React from 'react';
import PropTypes from 'prop-types';
import { BannerCheckpoint } from '../../../banner';
import BannerExample from './BannerExample';

const Example = ({ isInitiallyClosed }) => (
  <BannerCheckpoint>
    <BannerExample isInitiallyClosed={isInitiallyClosed} />
  </BannerCheckpoint>
);

Example.propTypes = {
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  isInitiallyClosed: false,
};

export default Example;
