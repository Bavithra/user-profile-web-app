import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ConfirmationModal from './ConfirmationModal';

describe('ConfirmationModal', () => {
  const action = 'Confirm';
  const message = 'Are you sure ?';
  const messageTitle = 'Confirmation Title';
  const onActionClick = jest.fn();
  const setIsConfirmationModalOpen = jest.fn();

  beforeEach(() => {
    render(
      <ConfirmationModal
        action={action}
        isOpen
        messageTitle={messageTitle}
        message={message}
        onActionClick={onActionClick}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
      />,
    );
  });

  it('should render message title', () => {
    screen.getByText(messageTitle);
  });

  it('should render message', () => {
    screen.getByText(message);
  });

  it('should render action button', () => {
    screen.getByText(action);
  });

  it('should call setIsConfirmationModalOpen when user click Cancel button', () => {
    const cancel = screen.getByText(/cancel/i);
    userEvent.click(cancel);

    expect(setIsConfirmationModalOpen).toHaveBeenCalledTimes(1);
  });
});
