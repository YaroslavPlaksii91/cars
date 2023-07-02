import PropTypes from 'prop-types';

export const Select = ({ id, openModalDelete, setActionCarId }) => {
  const handleActionChange = action => {
    setActionCarId(id);

    if (action === 'edit') {
    } else if (action === 'delete') {
      openModalDelete(true);
    }
  };

  return (
    <select onChange={e => handleActionChange(id, e.target.value)}>
      <option value="">Select Action</option>
      <option value="edit">Edit</option>
      <option value="delete">Delete</option>
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.number.isRequired,
  openModalDelete: PropTypes.func.isRequired,
  setActionCarId: PropTypes.func.isRequired,
};
