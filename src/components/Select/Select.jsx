import PropTypes from 'prop-types';

export const Select = ({
  vin,
  toggleModalDelete,
  toggleModalEdit,
  setActionCar,
}) => {
  const handleActionChange = (vin, action) => {
    setActionCar(vin);

    if (action === 'edit') {
      toggleModalEdit();
    } else if (action === 'delete') {
      toggleModalDelete();
    }
  };

  return (
    <select value="" onChange={e => handleActionChange(vin, e.target.value)}>
      <option value="">Select Action</option>
      <option value="edit">Edit</option>
      <option value="delete">Delete</option>
    </select>
  );
};

Select.propTypes = {
  vin: PropTypes.string.isRequired,
  toggleModalDelete: PropTypes.func.isRequired,
  toggleModalEdit: PropTypes.func.isRequired,
  setActionCar: PropTypes.func.isRequired,
};
