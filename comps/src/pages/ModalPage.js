import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const actionBar = <div>
      <Button onClick={onClose} primary>I Accept</Button>
  </div>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      
      {showModal && (
        <Modal onClose={onClose} actionBar={actionBar}>
          <p>
            Her is an important agreement for you to accept
          </p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
