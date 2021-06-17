import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import useLayerManager from './useLayerManager';

import styles from './RootLayerContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the base layer. All presented layers will
   * render on top of this content.
   */
  children: PropTypes.node,
};

/**
 * The RootLayerContainer defines the initial element structure required for
 * layer presentation and implements a LayerManager to orchestrate subsequent
 * layer rendering.
 */
const RootLayerContainer = ({ children }) => {
  const layerContainerRef = React.useRef();
  const baseContentRef = React.useRef();

  const { LayerManager } = useLayerManager(layerContainerRef, baseContentRef);

  return (
    <LayerManager>
      <div className={cx('root')} ref={layerContainerRef}>
        <div className={cx('base-container')} ref={baseContentRef}>
          {children}
        </div>
        {/* Additional layer container elements will be inserted here by the LayerManager */}
      </div>
    </LayerManager>
  );
};

RootLayerContainer.propTypes = propTypes;

export default RootLayerContainer;
