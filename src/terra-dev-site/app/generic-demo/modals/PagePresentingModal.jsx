import React from 'react';
import Button from 'terra-button';
import ApplicationModal from '../../../../application-modal/ApplicationModal';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

const PagePresentingModal = ({ onRequestClose }) => {
  const [showPage2, setShowPage2] = React.useState(false);
  const [showPage3, setShowPage3] = React.useState(false);
  const [showPage4, setShowPage4] = React.useState(false);

  return (
    <ApplicationModal title="Page Presenting Modal" size="small" onRequestClose={onRequestClose}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Page 2" onClick={() => { setShowPage2(true); }} />
        {showPage2 && (
          <ApplicationModal
            size="large"
            title="Page 2 Modal"
            onRequestClose={() => { setShowPage2(false); }}
            renderPage={() => <Page2 />}
          />
        )}
        <Button text="Show Page 3" onClick={() => { setShowPage3(true); }} />
        {showPage3 && (
          <ApplicationModal
            size="large"
            title="Page 3 Modal"
            onRequestClose={() => { setShowPage3(false); }}
            renderPage={() => <Page3 />}
          />
        )}
        <Button text="Show Page 4" onClick={() => { setShowPage4(true); }} />
        {showPage4 && (
          <ApplicationModal
            size="large"
            title="Page 4 Modal"
            onRequestClose={() => { setShowPage4(false); }}
            renderPage={() => <Page4 />}
          />
        )}

      </div>
    </ApplicationModal>
  );
};

export default PagePresentingModal;
