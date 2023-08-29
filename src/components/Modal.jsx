const Modal = ({ handleDeleteConfirmed, handleDeleteCancelled }) => {
  return (
    <div className='custom-modal'>
      <div className='modal-content'>
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className='modal-actions'>
          <button onClick={handleDeleteConfirmed} className='btn-confirm'>
            Confirm
          </button>
          <button onClick={handleDeleteCancelled} className='btn-cancel'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
