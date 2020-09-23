import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationConceptContext from '../application-container/private/ApplicationConceptContext';
import ApplicationContainerContext from '../application-container/private/ApplicationContainerContext';

import styles from './EmbeddedLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A collection of child elements to render within the ApplicationContainer body.
   */
  children: PropTypes.node,
};

const EmbeddedLayout = ({
  children,
}) => {
  const applicationContainer = React.useContext(ApplicationContainerContext);
  const conceptContext = React.useContext(ApplicationConceptContext);

  return (
    <div className={cx('embedded-layout', { 'fill-parent': !applicationContainer.disableParentFill })}>
      <div className={cx('concept-banner-container')}>
        {conceptContext?.renderPageConceptView()}
      </div>
      <div className={cx('content-container')}>
        {children}
      </div>
    </div>
  );
};

EmbeddedLayout.propTypes = propTypes;

export default EmbeddedLayout;
