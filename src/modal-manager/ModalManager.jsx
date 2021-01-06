import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import ActionHeader from 'terra-action-header';

import ApplicationModal from '../application-modal/ApplicationModal';

import DisclosureManager, { availableDisclosureSizes } from '../disclosure-manager';
import { unsavedChangesPromptResolutionOptionsShape } from '../unsaved-changes-prompt';

import ModalDisclosureContainer from './ModalDisclosureContainer';

const disclosureType = 'modal';
export { disclosureType };

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
  unsavedChangesPromptResolutionOptions: unsavedChangesPromptResolutionOptionsShape,
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
      children, disclosureAccessory,
    } = this.props;

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
          dangerouslyDisableUnsavedChangesPromptHandling
        >
          {modalData.component}
          {keys.length ? renderModalsForKeys(keys) : undefined}
        </ApplicationModal>
      );
    }

    return (
      <>
        {manager.children.components}
        {renderModalsForKeys([...manager.disclosureComponentKeys])}
      </>
    );
  }

  render() {
    const { unsavedChangesPromptResolutionOptions, children } = this.props;

    return (
      <DisclosureManager
        supportedDisclosureTypes={[disclosureType]}
        render={this.renderModals}
        withDisclosureContainer={disclosureContent => (
          <ModalDisclosureContainer unsavedChangesPromptResolutionOptions={unsavedChangesPromptResolutionOptions}>
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
