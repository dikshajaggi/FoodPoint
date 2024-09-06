// Modal.js
import React from 'react';
import { ModalClose, ModalContent, ModalOverlay } from './styledComponents/Modal';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
        <ModalOverlay onClick={onClose}>
        <ModalContent  onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={onClose}>X</ModalClose>
            <h5>{data.menu.name} * {data.quantity}</h5>
        </ModalContent>
        </ModalOverlay>
    </>
  );
};

export default Modal;
