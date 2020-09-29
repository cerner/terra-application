import React from 'react';
import Button from 'terra-button';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from '../../../../disclosure-manager';
import NavigationPrompt from '../../../../navigation-prompt';

import useDeferredInitializer from '../shared/useDeferredInitializer';

let incrementer = 0;

const DisclosedComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const [id, setId] = React.useState(incrementer++);

  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title={`Disclosed Component ${id}`}
        collapsibleMenuView={(
          <CollapsibleMenuView>
            <CollapsibleMenuView.Item
              text={id}
              key={id}
              shouldCloseOnClick={false}
            />
          </CollapsibleMenuView>
        )}
      />
      <h2>Hello world</h2>
      <p>{id}</p>
      <Button
        text="Disclose Modal"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: `${Math.random()}`,
              component: <DisclosedComponent />,
            },
          });
        }}
      />
      <Button
        text="Abort"
        onClick={() => {
          debugger;
          disclosureManager.closeDisclosure();
        }}
      />
      <NavigationPrompt description={id} />
    </div>
  );
};

const Page4 = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();
  const disclosureManager = React.useContext(DisclosureManagerContext);

  const [showPage2, setShowPage2] = React.useState(false);

  return (
    <ApplicationPage
      title="Page 4"
      onRequestClose={onRequestClose}
    >
      <Button
        text="Disclose Modal"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: `${Math.random()}`,
              component: <DisclosedComponent />,
            },
          });
        }}
      />
    </ApplicationPage>
  );
};

export default Page4;
