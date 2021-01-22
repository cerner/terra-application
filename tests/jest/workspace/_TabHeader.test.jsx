import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TabHeader from '../../../src/workspace/subcomponents/_TabHeader';

describe('TabHeader', () => {
  test('should render a heading with provided children', () => {
    render((
      <TabHeader>
        <div data-testid="test-child" />
      </TabHeader>
    ));

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '2');
    expect(screen.getByRole('heading')).toHaveAttribute('tabIndex', '-1');

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});
