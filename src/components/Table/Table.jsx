import PropTypes from 'prop-types';

import { TableRow } from 'components/TableRow/TableRow';

import { TABLE_COLUMNS } from './constants';

import s from './Table.module.css';

export const Table = ({ cars, openModalDelete, setActionCarId }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>{TABLE_COLUMNS.COMPANY}</th>
          <th>{TABLE_COLUMNS.MODEL}</th>
          <th>{TABLE_COLUMNS.VIN}</th>
          <th>{TABLE_COLUMNS.COLOR}</th>
          <th>{TABLE_COLUMNS.YEAR}</th>
          <th>{TABLE_COLUMNS.PRICE}</th>
          <th>{TABLE_COLUMNS.AVAILABILITY}</th>
          <th>{TABLE_COLUMNS.ACTIONS}</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <TableRow
            key={car.car_vin}
            car={car}
            openModalDelete={openModalDelete}
            setActionCarId={setActionCarId}
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
  openModalDelete: PropTypes.func.isRequired,
  setActionCarId: PropTypes.func.isRequired,
};
