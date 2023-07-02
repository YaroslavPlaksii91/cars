import PropTypes from 'prop-types';

import { Select } from 'components/Select/Select';

import s from './TableRow.module.css';

export const TableRow = ({
  car,
  toggleModalDelete,
  toggleModalEdit,
  setActionCar,
}) => {
  const {
    car: company,
    car_color: color,
    car_model: model,
    car_model_year: year,
    car_vin: vin,
    price,
    availability,
  } = car;

  return (
    <tr className={s.row}>
      <td>{company}</td>
      <td>{model}</td>
      <td>{vin}</td>
      <td>{color}</td>
      <td>{year}</td>
      <td>{price}</td>
      <td>{availability ? 'true' : 'false'}</td>
      <td>
        <Select
          vin={vin}
          toggleModalDelete={toggleModalDelete}
          toggleModalEdit={toggleModalEdit}
          setActionCar={setActionCar}
        />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  car: PropTypes.shape({
    car: PropTypes.string.isRequired,
    car_color: PropTypes.string.isRequired,
    car_model: PropTypes.string.isRequired,
    car_model_year: PropTypes.number.isRequired,
    car_vin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
  }).isRequired,
  toggleModalDelete: PropTypes.func.isRequired,
  toggleModalEdit: PropTypes.func.isRequired,
  setActionCar: PropTypes.func.isRequired,
};
