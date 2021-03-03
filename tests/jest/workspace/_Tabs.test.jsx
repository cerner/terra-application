import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tabs from '../../../src/workspace/subcomponents/_Tabs';

/**
 * The logic within Tabs related to size detection is unable to be tested
 * using JSDOM. That logic is tested using wdio instead.
 */

describe('Tabs', () => {
  test('should render a tablist container with the provided label', () => {
    render((
      <Tabs ariaLabel="Test Label" tabData={[]} />
    ));

    expect(screen.getByRole('tablist', { name: 'Test Label' })).toBeInTheDocument();
  });

  test('should render a tabs', () => {
    render((
      <Tabs
        ariaLabel="Test Label"
        tabData={[{
          id: 'tab-1',
          associatedPanelId: 'panel-1',
          label: 'Tab 1',
        }, {
          id: 'tab-2',
          associatedPanelId: 'panel-2',
          label: 'Tab 2',
        }, {
          id: 'tab-3',
          associatedPanelId: 'panel-3',
          label: 'Tab 3',
        }]}
      />
    ));

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });
});
