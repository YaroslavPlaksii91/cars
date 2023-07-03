import PropTypes from 'prop-types';

import s from './Form.module.css';

export const Form = ({ onSubmit, children }) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
