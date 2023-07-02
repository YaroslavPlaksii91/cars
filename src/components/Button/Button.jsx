import PropTypes from 'prop-types';

import s from './Button.module.css';

export const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={s.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
