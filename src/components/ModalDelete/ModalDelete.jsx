import { useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './ModalDelete.module.css';

export const ModalDelete = ({ toggleModalDelete, deleteCar, modalOpen }) => {
  useEffect(() => {
    const handleBodyScroll = () => {
      if (modalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    };

    handleBodyScroll();

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  const handleConfirm = () => {
    deleteCar();
    toggleModalDelete();
  };

  const handleReject = () => {
    toggleModalDelete();
  };

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <p className={s.title}>Are you sure?</p>
        <div className={s.buttons}>
          <button onClick={handleReject} className={s.btn}>
            No
          </button>
          <button onClick={handleConfirm} className={s.btn}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  toggleModalDelete: PropTypes.func.isRequired,
  deleteCar: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
