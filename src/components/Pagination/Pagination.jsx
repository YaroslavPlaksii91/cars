import PropTypes from 'prop-types';

import s from './Pagination.module.css';

export const Pagination = ({ data, currentPage, perPage, onClick }) => {
  const pageCount = Math.ceil(data.length / perPage);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pagination}>
      {pages.map(page => (
        <button
          type="button"
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
