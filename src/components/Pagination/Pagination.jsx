import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';

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
        <Button
          key={page}
          type="button"
          onClick={() => onClick(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </Button>
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
