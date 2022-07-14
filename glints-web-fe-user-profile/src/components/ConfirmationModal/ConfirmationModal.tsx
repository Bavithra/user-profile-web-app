import React from 'react';
import Button from '../../common/Button';

import Modal from './../../common/Modal';

import {
  ConfirmationModalContainer,
  ConfirmationModalInfo,
  Header,
  ConfirmationModalFooter,
} from './ConfirmationModal.styles';

type Props = {
  action: string;
  isOpen: boolean;
  messageTitle: string;
  message: string;
  onActionClick: () => void;
  setIsConfirmationModalOpen: (shouldShowModal: boolean) => void;
};

export default function ConfirmationModal(props: Props) {
  const { isOpen, messageTitle, message, action, setIsConfirmationModalOpen, onActionClick } = props;

  function onCancelClick() {
    setIsConfirmationModalOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <ConfirmationModalContainer>
        <ConfirmationModalInfo>
          <Header>{messageTitle}</Header>
          {message}
        </ConfirmationModalInfo>
        <ConfirmationModalFooter>
          <Button onClick={onCancelClick}>
            Cancel
          </Button>
          <Button onClick={onActionClick}>
            {action}
          </Button>
        </ConfirmationModalFooter>
      </ConfirmationModalContainer>
    </Modal>
  );
}
