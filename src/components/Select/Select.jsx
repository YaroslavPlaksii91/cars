import PropTypes from 'prop-types';

import s from './Select.module.css';

export const Select = ({ label, value, options, onChange, id }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={id}>{label}</label>
      <select value={value} id={id} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
