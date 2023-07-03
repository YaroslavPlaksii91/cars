import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

import s from './ModalDelete.module.css';

export const ModalDelete = ({ closeModal, deleteCar, modalOpen }) => {
  const handleConfirm = () => {
    deleteCar();
    closeModal();
  };

  const handleReject = () => {
    closeModal();
  };

  return (
    <Modal isModalOpen={modalOpen}>
      <p className={s.title}>Are you sure?</p>
      <div className={s.buttons}>
        <Button type="button" className="green" onClick={handleReject}>
          No
        </Button>
        <Button type="button" className="red" onClick={handleConfirm}>
          Yes
        </Button>
      </div>
    </Modal>
  );
};

ModalDelete.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteCar: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
