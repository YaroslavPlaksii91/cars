import PropTypes from 'prop-types';

import { TableRow } from 'components/TableRow/TableRow';

import { TABLE_COLUMNS } from './constants';

import s from './Table.module.css';

export const Table = ({
  cars,
  toggleModalDelete,
  toggleModalEdit,
  setActionCar,
}) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {Object.values(TABLE_COLUMNS).map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <TableRow
            key={car.car_vin}
            car={car}
            toggleModalDelete={toggleModalDelete}
            toggleModalEdit={toggleModalEdit}
            setActionCar={setActionCar}
          />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      car: PropTypes.string.isRequired,
      car_color: PropTypes.string.isRequired,
      car_model: PropTypes.string.isRequired,
      car_model_year: PropTypes.number.isRequired,
      car_vin: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      availability: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  toggleModalDelete: PropTypes.func.isRequired,
  toggleModalEdit: PropTypes.func.isRequired,
  setActionCar: PropTypes.func.isRequired,
};
