import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from '../../../../disclosure-manager';
import NavigationPrompt from '../../../../navigation-prompt';

import { Card } from '../../../../page';

const DisclosedComponent = ({ index }) => {
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [showBlockingOverlay, setShowBlockingOverlay] = React.useState(false);

  React.useEffect(() => {
    if (showBlockingOverlay) {
      setTimeout(() => {
        setShowBlockingOverlay(false);
      }, 5000);
    }
  }, [showBlockingOverlay]);

  const newIndex = index + 1;

  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title={`Disclosed Modal ${index}`}
        collapsibleMenuView={(
          <CollapsibleMenuView>
            <CollapsibleMenuView.Item
              text={`Item ${index}`}
              key={index}
              shouldCloseOnClick={false}
            />
          </CollapsibleMenuView>
        )}
      />
      <p>
        <Button
          text={`Disclose Another Modal (${newIndex})`}
          onClick={() => {
            disclosureManager.disclose({
              preferredType: 'modal',
              content: {
                key: `disclosed-component-${newIndex}`,
                component: <DisclosedComponent index={newIndex} />,
              },
            });
          }}
        />
      </p>
      <p>
        <Button
          text="Close All Disclosed Modals"
          onClick={() => {
            disclosureManager.closeDisclosure();
          }}
        />
      </p>
      <p>
        <Button
          text={`Unsaved Changes - ${hasUnsavedChanges ? 'Yes' : 'No'}`}
          onClick={() => { setHasUnsavedChanges(state => !state); }}
        />
      </p>
      {hasUnsavedChanges && <NavigationPrompt description={`Disclosed Modal ${index}`} />}
    </div>
  );
};

DisclosedComponent.propTypes = {
  index: PropTypes.number,
};

const ModalManagerIntegrationCard = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <Card label="ModalManager Integration">
      <p>Existing implementations that utilize the ModalManager and DisclosureManagerHeaderAdapter are supported by the new Modal presentation styles.</p>
      <p>Pressing the below button will cause a modal to be presented using the ModalManager.</p>
      <Button
        text="Disclose Modal"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: 'modal-manager-integration-card',
              component: <DisclosedComponent index={0} />,
            },
          });
        }}
      />
    </Card>
  );
};

export default ModalManagerIntegrationCard;
