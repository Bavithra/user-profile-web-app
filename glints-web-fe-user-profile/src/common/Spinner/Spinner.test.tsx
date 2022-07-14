import { render } from '@testing-library/react';
import React from 'react';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render only positioning container', () => {
    const renderResult = render(<Spinner />);
    const positioningContainer = renderResult.getByTestId('positioning-container');
    expect(positioningContainer).toBeDefined();
    const fullspaceContainer = renderResult.queryByTestId('fullspace-container');
    expect(fullspaceContainer).toBeNull();
  });

  it('should render only positioning container', () => {
    const renderResult = render(<Spinner isFullSpace />);
    const positioningContainer = renderResult.getByTestId('positioning-container');
    expect(positioningContainer).toBeDefined();
    const fullspaceContainer = renderResult.getByTestId('fullspace-container');
    expect(fullspaceContainer).toBeDefined();
  });
});
