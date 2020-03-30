import React from 'react';
import NativeSelect from '../../../filter/NativeSelect';

/* eslint-disable react/forbid-dom-props */
const NativeSelectTest = () => (
  <div
    style={{
      width: '300px',
      padding: '20px',
      position: 'relative',
    }}
  >
    <NativeSelect
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
  </div>
);

export default NativeSelectTest;
