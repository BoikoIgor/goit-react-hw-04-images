import Modal from 'react-modal';
import PropTypes from 'prop-types';
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    position: 'relative',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0.25rem',
    outline: 'none',
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
Modal.setAppElement('#root');

export const ModalPhoto = ({ isModal, onClose, photoURL, alt }) => {
  return (
    <Modal
      isOpen={isModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div>
          <img src={photoURL} alt={alt} />
        </div>
      </div>
    </Modal>
  );
};
ModalPhoto.propTypes = {
  isModal: PropTypes.bool.isRequired,
  photoURL: PropTypes.string,
  alt: PropTypes.string,
};
