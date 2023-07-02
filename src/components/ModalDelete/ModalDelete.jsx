import PropTypes from 'prop-types';

import s from './ModalDelete.module.css';

export const ModalDelete = ({ isModalOpen, deleteCar }) => {
  const handleConfirm = () => {
    deleteCar();
    isModalOpen(false);
  };

  const handleReject = () => {
    isModalOpen(false);
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
  isModalOpen: PropTypes.func.isRequired,
  deleteCar: PropTypes.func.isRequired,
};
