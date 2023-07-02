import PropTypes from 'prop-types';

import s from './Heading.module.css';

export const Heading = ({ children, level }) => {
  const Tag = `h${level}`;

  return <Tag className={s.title}>{children}</Tag>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};
