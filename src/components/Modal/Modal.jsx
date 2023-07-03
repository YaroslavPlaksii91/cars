import { useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

export const Modal = ({ isModalOpen, children }) => {
  useEffect(() => {
    const handleBodyScroll = () => {
      if (isModalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    };

    handleBodyScroll();

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div className={s.modal}>
      <div className={s.content}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
