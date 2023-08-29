import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const Modal = () => {
  const { closeModal, handleDeleteConfirmed, handleDeleteCancelled } =
    useContext(FeedbackContext);
  return (
    <div className='custom-modal' onClick={closeModal}>
      <div className='modal-content'>
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className='modal-actions'>
          <button
            type='button'
            onClick={handleDeleteConfirmed}
            className='btn-confirm'
          >
            Confirm
          </button>
          <button
            type='button'
            onClick={handleDeleteCancelled}
            className='btn-cancel'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
