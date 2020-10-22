import React from 'react';

const NotAPage = () => (
  <div style={{ padding: '1rem' }}>
    <h2>Not A Page</h2>
    <p>This content is present to test scenarios where a Page is not rendered.</p>
    <p>No main element is defined, so no skip-to button is available for main content.</p>
  </div>
);

export default NotAPage;
