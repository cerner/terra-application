import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NotificationBanner from '../../../notification-banner';

const Example = ({ id }) => {
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showWarningBanner, setShowWarningBanner] = useState(false);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(true);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false);
  const [showAdvisoryBanner, setShowAdvisoryBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowErrorBanner(true);
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowWarningBanner(true);
    }, 30000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowUnverifiedBanner(true);
    }, 60000);
  }, []);

  return (
    <>
      {showErrorBanner && <NotificationBanner type="error" id={`error-banner-${id}`} description="Something happened..." />}
      {showUnsatisfiedBanner && <NotificationBanner type="unsatisfied" id={`unsatisfied-banner-${id}`} />}
      {showWarningBanner && (
        <NotificationBanner
          type="warning"
          id={`warning-banner-${id}`}
          onRequestDismiss={() => setShowWarningBanner(false)}
        />
      )}
      {showUnverifiedBanner && (
        <NotificationBanner
          type="unverified"
          id={`unverified-banner-${id}`}
          description={<div>There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included.</div>}
          bannerAction={{
            text: 'Verify Records',
            onClick: () => {
              alert('records verified.'); // eslint-disable-line no-alert
              setShowUnverifiedBanner(false);
            },
          }}
        />
      )}
      {showAdvisoryBanner && <NotificationBanner type="advisory" id={`advisory-banner-${id}`} />}
      <p>The Error banner will appear after 10 seconds.</p>
      <button onClick={() => setShowErrorBanner(!showErrorBanner)} type="button" id={`toggle-error-banner-${id}`}>Show/Hide Error Banner</button>
      <p>The Warning banner will appear after 30 seconds.</p>
      <button onClick={() => setShowWarningBanner(!showWarningBanner)} type="button" id={`toggle-warning-banner-${id}`}>Show/Hide Warning Banner</button>
      <p>Click to toggle Unsatisfied Banner.</p>
      <button onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)} type="button" id={`toggle-unsatisfied-banner-${id}`}>Show/Hide Unsatisfied Banner</button>
      <p>The Unverified banner will appear after 60 seconds.</p>
      <button onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)} type="button" id={`toggle-unverified-banner-${id}`}>Show/Hide Unverified Banner</button>
      <p>Click to toggle Advisory Banner.</p>
      <button onClick={() => setShowAdvisoryBanner(!showAdvisoryBanner)} type="button" id={`toggle-advisory-banner-${id}`}>Show/Hide Advisory Banner</button>
      <p>This is a bunch of random page content to make the screen reader talk a lot longer. This is to help keep the reader going while we wait for the 60 second timeout to show the unverified banner. This contents does not add value to this example except to add a bunch of words for the voice over screen reader to read out loud. This could be cut-off when an banner is rendered unless the banner is polite and waits for the screen reader to finish so the user can understand what is happening on the page. </p>
    </>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
};

Example.defaultProps = {
  id: '1',
};

export default Example;
