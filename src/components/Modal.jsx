import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, message, userName, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal__content">
        <p>{message}</p>
        {userName && <p className='name'>{userName}</p>}
        {message && <button title='close' onClick={onClose}>Close</button>}
      </div>
    </div>
  );
}

export default Modal;
