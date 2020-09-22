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
  primaryConceptBanner: PropTypes.element,
  modalConceptBanner: PropTypes.element,
};

const EmbeddedLayout = ({
  children, primaryConceptBanner, modalConceptBanner,
}) => {
  const applicationContainer = React.useContext(ApplicationContainerContext);

  const conceptBannerProviderValue = React.useMemo(() => ({
    renderModalConceptView: () => modalConceptBanner,
    renderPageConceptView: () => primaryConceptBanner,
  }), [primaryConceptBanner, modalConceptBanner]);

  return (
    <div className={cx('embedded-layout', { 'fill-parent': !applicationContainer.disableParentFill })}>
      <div className={cx('concept-banner-container')}>
        {primaryConceptBanner}
      </div>
      <div className={cx('content-container')}>
        <ApplicationConceptContext.Provider value={conceptBannerProviderValue}>
          {children}
        </ApplicationConceptContext.Provider>
      </div>
    </div>
  );
};

EmbeddedLayout.propTypes = propTypes;

export default EmbeddedLayout;
