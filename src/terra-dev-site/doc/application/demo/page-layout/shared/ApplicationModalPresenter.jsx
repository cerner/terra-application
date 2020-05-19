import React from 'react';
import ApplicationModal from 'terra-application/lib/application-modal/ApplicationModal';

const propTypes = {};

const ApplicationModalPresenter = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => { setShowModal((state) => !state); }}>Show Modal</button>
      <ApplicationModal isOpen={showModal} onRequestClose={() => { setShowModal(false); }}>
        <ApplicationModalPresenter />
      </ApplicationModal>
    </>
  );
};

ApplicationModalPresenter.propTypes = propTypes;

export default ApplicationModalPresenter;
