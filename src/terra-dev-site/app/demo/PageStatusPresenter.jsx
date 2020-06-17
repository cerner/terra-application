import React, {
  useState, useRef, useEffect,
} from 'react';

import ApplicationPageStatus from 'terra-application/lib/application-page-status';

const PageStatusPresenter = () => {
  const [showPageStatus, setShowPageStatus] = useState(false);

  const timeoutRef = useRef();

  useEffect(() => {
    window.clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div>
      <h3>Status View Presenter</h3>
      <p>This component uses the ApplicationPageStatus to present a status view over itself. The status view in this demo is shown for 2 seconds.</p>
      <p>
        <button
          disabled={showPageStatus}
          type="button"
          onClick={() => {
            setShowPageStatus(true);
            timeoutRef.current = setTimeout(() => {
              setShowPageStatus(false);
            }, 2000);
          }}
        >
          Show Status View
        </button>
      </p>
      {showPageStatus && <ApplicationPageStatus message="This is a demo status view" title="Demo Status View" variant="no-data" />}
    </div>
  );
};

export default PageStatusPresenter;
