import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ActionHeader from 'terra-action-header';
import styles from 'terra-modal-manager/lib/ModalManager.module.scss';

import ApplicationModal from '../application-modal/ApplicationModal';
// import ContentContainer from 'terra-content-container';

import DisclosureManager, { availableDisclosureSizes } from '../disclosure-manager';
import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';

import ModalDisclosureContainer from './ModalDisclosureContainer';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The component to render within the Modal above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderModals = this.renderModals.bind(this);
  }

  renderModals(manager) {
    const {
      children, disclosureAccessory, ...customProps
    } = this.props;
    const theme = this.context;

    const containerClassNames = classNames(cx(
      'container',
      theme.className,
    ),
    customProps.className);

    // const classArray = ['modal-manager'];
    // const isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    // if (!isFullscreen) {
    //   if (manager.disclosure.dimensions) {
    //     classArray.push(`height-${manager.disclosure.dimensions.height}`, `width-${manager.disclosure.dimensions.width}`);
    //   } else if (manager.disclosure.size) {
    //     classArray.push(`height-${heightFromSize[manager.disclosure.size]}`, `width-${widthFromSize[manager.disclosure.size]}`);
    //   }
    // }

    // const presentedDisclosureComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
    // const presentedDisclosureComponentData = manager.disclosureComponentData[presentedDisclosureComponentKey] || {};
    // const headerDataForPresentedComponent = presentedDisclosureComponentData.headerAdapterData;

    function renderModalsForKeys(keys) {
      if (!keys || !keys.length) {
        return undefined;
      }

      const keyForModal = keys.shift();
      const modalData = manager.disclosureComponentData[keyForModal];

      return (
        <ApplicationModal
          title={modalData?.headerAdapterData?.title}
          toolbar={modalData?.headerAdapterData?.collapsibleMenuView ? (
            <ActionHeader>
              {modalData.headerAdapterData.collapsibleMenuView}
            </ActionHeader>
          ) : undefined}
          size={manager.disclosure.size}
          onRequestClose={manager.dismissPresentedComponent}
          dangerouslyDisableNavigationPromptHandling
        >
          {modalData.component}
          {keys.length ? renderModalsForKeys(keys) : undefined}
        </ApplicationModal>
      );
    }

    return (
      <div {...customProps} className={containerClassNames}>
        {manager.children.components}
        {renderModalsForKeys([...manager.disclosureComponentKeys])}
      </div>
    );
  }

  render() {
    const { navigationPromptResolutionOptions, children } = this.props;

    return (
      <DisclosureManager
        supportedDisclosureTypes={[disclosureType]}
        render={this.renderModals}
        withDisclosureContainer={disclosureContent => (
          <ModalDisclosureContainer navigationPromptResolutionOptions={navigationPromptResolutionOptions}>
            {disclosureContent}
          </ModalDisclosureContainer>
        )}
        trapNestedDisclosureRequests
      >
        {children}
      </DisclosureManager>
    );
  }
}

ModalManager.propTypes = propTypes;
ModalManager.contextType = ThemeContext;

export default ModalManager;
