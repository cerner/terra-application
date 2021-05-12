import React from 'react';
import PropTypes from 'prop-types';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPerson from 'terra-icon/lib/icon/IconPerson';

import NavigationPrompt from '../../../navigation-prompt';

import Page from '../../../page';

const TestPage = ({
  index, testLabel, onRequestDismiss,
}) => {
  const label = `Page ${index}`;
  const [showChildPage, setShowChildPage] = React.useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const metaData = React.useRef({ test: index });

  const actions = (
    <Page.Actions>
      <Page.Action actionKey="action-1" label="Action 1" onSelect={() => { console.log('action-1'); }} icon={<IconSearch />} />
      {index % 2 === 0 && <Page.Action actionKey="action-2" label="Action 2" onSelect={() => { console.log('action-2'); }} icon={<IconAdd />} />}
      {index % 2 === 0 && <Page.Action isDisabled actionKey="action-3" label="Action 3" onSelect={() => { console.log('action-3'); }} icon={<IconPerson />} />}
    </Page.Actions>
  );

  return (
    <Page
      label={label}
      metaData={metaData.current}
      onRequestClose={onRequestDismiss}
      actions={actions}
    >
      <div style={{ padding: '15px', height: '100%', overflow: 'auto' }}>
        <p>{testLabel}</p>
        <button type="button" onClick={() => { setShowChildPage(true); }}>Show Child</button>
        <p>
          Label:
          {' '}
          <span>{label}</span>
        </p>
        <p>
          Meta:
          {' '}
          <span>{JSON.stringify(metaData.current)}</span>
        </p>
        <p>
          Has Unsaved Changes:
          {' '}
          {hasUnsavedChanges ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setHasUnsavedChanges(state => !state)}>Toggle</button>
        </p>
        {hasUnsavedChanges ? <NavigationPrompt description={label} /> : undefined}
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
        <p>Paragraph 5</p>
        <p>Paragraph 6</p>
        <p>Paragraph 7</p>
        <p>Paragraph 8</p>
        {showChildPage ? (
          <TestPage testLabel={testLabel} index={index + 1} onRequestDismiss={() => { setShowChildPage(false); }} />
        ) : undefined}
      </div>
    </Page>
  );
};

TestPage.propTypes = {
  index: PropTypes.number,
  testLabel: PropTypes.string,
  onRequestDismiss: PropTypes.func,
};

export default TestPage;
