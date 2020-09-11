import React from 'react';
import Button from 'terra-button';
import ApplicationModal from '../../../../application-modal/ApplicationModal';
import PageContainer from '../../../../page-container/PageContainer';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const PagePresentingModal = ({ onRequestClose }) => {
  const [showPage2, setShowPage2] = React.useState(false);
  const [showPage3, setShowPage3] = React.useState(false);

  return (
    <ApplicationModal title="Page Presenting Modal" size="small" onRequestClose={onRequestClose}>
      <div style={{ padding: '1rem' }}>
        <h2>Page Presenting Modal</h2>
        <br />
        <Button text="Show Page 2" onClick={() => { setShowPage2(true); }} />
        {showPage2 && (
          <ApplicationModal size="large" title="Page 2 Modal" onRequestClose={() => { setShowPage2(false); }}>
            <PageContainer>
              <Page2 />
            </PageContainer>
          </ApplicationModal>
        )}
        <Button text="Show Page 3" onClick={() => { setShowPage3(true); }} />
        {showPage3 && (
          <ApplicationModal size="large" title="Page 3 Modal" onRequestClose={() => { setShowPage3(false); }}>
            <PageContainer>
              <Page3 />
            </PageContainer>
          </ApplicationModal>
        )}
      </div>
    </ApplicationModal>
  );
};

export default PagePresentingModal;
