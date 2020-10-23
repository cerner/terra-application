import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MainPageContainer from '../../application-page/container/MainPageContainer';

const propTypes = {
  navigationKey: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  render: PropTypes.func,
  renderPage: PropTypes.func,
  /**
   * @private
   */
  isActive: PropTypes.bool,
  /**
   * @private
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
};

const NavigationItem = ({
  children,
  render,
  renderPage,
  isActive,
  portalElement,
}) => {
  let pageContent;

  if (renderPage) {
    pageContent = (
      <MainPageContainer>
        {renderPage()}
      </MainPageContainer>
    );
  } else if (render) {
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  return ReactDOM.createPortal(pageContent, portalElement);
};

NavigationItem.propTypes = propTypes;

export default NavigationItem;
