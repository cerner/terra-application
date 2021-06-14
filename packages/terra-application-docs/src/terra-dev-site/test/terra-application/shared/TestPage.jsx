import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';

import UnsavedChangesPrompt from '@cerner/terra-application/lib/unsaved-changes-prompt';
import NotificationBanner from '@cerner/terra-application/lib/notification-banner';
import Page from '@cerner/terra-application/lib/page';

import styles from './TestPage.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable no-console */
const TestPage = ({
  index, testLabel, onRequestDismiss,
}) => {
  const label = `Page ${index}`;
  const [showChildPage, setShowChildPage] = React.useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [showToolbar, setShowToolbar] = React.useState(false);
  const [showHazardHigh, setShowHazardHigh] = React.useState(false);
  const [showHazardMedium, setShowHazardMedium] = React.useState(false);
  const [showHazardLow, setShowHazardLow] = React.useState(false);
  const [showLongText, setShowLongText] = React.useState(false);

  const metaData = React.useRef({ test: index });

  return (
    <Page
      label={showLongText ? (
        `${label} With A Lot Of Extra Text Test Wrapping Scenarios Within the Page Header - Mississippi, hydrocodone/acetaminophen, OnabotulinumtoxinA, Talimogene Laherparepvec`
      ) : label}
      metaData={metaData.current}
      onRequestClose={onRequestDismiss}
      actions={(
        <Page.Actions>
          <Page.Action
            label="Action 1"
            onSelect={() => { console.log('action-1'); }}
            icon={<IconSearch />}
          />
          {index % 2 === 0 && (
            <Page.Action
              label="Action 2 With A Really Long Label To See How It Wraps"
              onSelect={() => { console.log('action-2'); }}
              icon={<IconAdd />}
            />
          )}
          {index % 2 === 0 && (
            <Page.Action
              label="Disabled Action"
              icon={<IconPerson />}
            />
          )}
        </Page.Actions>
      )}
      toolbar={showToolbar ? (
        <Page.Toolbar>
          <Button
            isIconOnly
            variant="utility"
            text="Edit"
            icon={<IconEdit />}
            onClick={() => { console.log('edit'); }}
          />
          <Button
            text="Attach"
            icon={<IconAttachment />}
            onClick={() => { console.log('attach'); }}
          />
        </Page.Toolbar>
      ) : undefined}
    >
      <div className={cx('layout')}>
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
        {hasUnsavedChanges ? <UnsavedChangesPrompt description={label} /> : undefined}
        <p>
          Show Toolbar:
          {' '}
          {showToolbar ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setShowToolbar(state => !state)}>Toggle</button>
        </p>
        <p>
          Show High Hazard Banner:
          {' '}
          {showHazardHigh ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setShowHazardHigh(state => !state)}>Toggle</button>
        </p>
        <p>
          Show Medium Hazard Banner:
          {' '}
          {showHazardMedium ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setShowHazardMedium(state => !state)}>Toggle</button>
        </p>
        <p>
          Show Low Hazard Banner:
          {' '}
          {showHazardLow ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setShowHazardLow(state => !state)}>Toggle</button>
        </p>
        <p>
          Show Long Label Text:
          {' '}
          {showLongText ? 'true' : 'false'}
          {' '}
          <button type="button" onClick={() => setShowLongText(state => !state)}>Toggle</button>
        </p>
        {showHazardHigh && (
          <NotificationBanner
            variant="hazard-high"
            id="test-page-hazard-high-banner"
            description="You need to look at something"
            bannerAction={{
              text: 'Resolve',
            }}
          />
        )}
        {showHazardMedium && (
          <NotificationBanner
            variant="hazard-medium"
            id="test-page-hazard-medium-banner"
            description="You should probably look at something"
          />
        )}
        {showHazardLow && (
          <NotificationBanner
            variant="hazard-low"
            id="test-page-hazard-low-banner"
            description="You might want to look at something"
            onRequestClose={() => { setShowHazardLow(false); }}
          />
        )}
        {showChildPage ? (
          <TestPage
            testLabel={testLabel}
            index={index + 1}
            onRequestDismiss={() => { setShowChildPage(false); }}
          />
        ) : undefined}
      </div>
    </Page>
  );
};
/* eslint-enable no-console */

TestPage.propTypes = {
  index: PropTypes.number,
  testLabel: PropTypes.string,
  onRequestDismiss: PropTypes.func,
};

export default TestPage;
