import PropTypes from 'prop-types';

import s from './Search.module.css';

export const Search = ({ value, onChange }) => {
  return (
    <input
      className={s.search}
      type="text"
      name="search"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
