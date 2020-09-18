import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationConceptContext from '../application-concept/ApplicationConceptContext';
import ApplicationContainerContext from '../application-container/private/ApplicationContainerContext';

import styles from './ApplicationConceptLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A collection of child elements to render within the ApplicationContainer body.
   */
  children: PropTypes.node,
};

const ApplicationConceptLayout = ({
  children,
}) => {
  const applicationConcept = React.useContext(ApplicationConceptContext);
  const applicationContainer = React.useContext(ApplicationContainerContext);

  return (
    <div className={cx('concept-layout', { 'fill-parent': !applicationContainer.disableParentFill })}>
      <div className={cx('header')}>
        {applicationConcept && applicationConcept.renderPageConceptView()}
      </div>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
};

ApplicationConceptLayout.propTypes = propTypes;

export default ApplicationConceptLayout;
