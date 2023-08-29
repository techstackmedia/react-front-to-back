import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({
  closeModal,
  handleDeleteConfirmed,
  handleDeleteCancelled,
}) => (
  <AnimatePresence>
    <motion.div
      className='custom-modal'
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='modal-content'
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
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
      </motion.div>
    </motion.div>
  </AnimatePresence>
);
export default Modal;
