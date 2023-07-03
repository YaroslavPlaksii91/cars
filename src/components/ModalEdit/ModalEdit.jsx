import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

import s from './ModalEdit.module.css';

export const ModalEdit = ({ car, closeModal, handleEdit, modalOpen }) => {
  const {
    car: company,
    car_color: color,
    car_model: model,
    car_model_year: year,
    car_vin: vin,
    price,
    availability,
  } = car;

  const [carColor, setCarColor] = useState(color);
  const [carPrice, setCarPrice] = useState(price);
  const [carAvailability, setCarAvailability] = useState(availability);

  const handleColorChange = e => {
    setCarColor(e.target.value);
  };

  const handlePriceChange = e => {
    setCarPrice(e.target.value);
  };

  const handleAvailabilityChange = e => {
    setCarAvailability(e.target.value === 'true' ? true : false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const editedCar = {
      ...car,
      car_color: carColor,
      price: carPrice,
      availability: carAvailability,
    };

    handleEdit(editedCar);

    closeModal();
  };

  return (
    <Modal isModalOpen={modalOpen}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" value={company} disabled />
        </div>
        <div className={s.row}>
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" value={model} disabled />
        </div>
        <div className={s.row}>
          <label htmlFor="vin">VIN:</label>
          <input type="text" id="vin" value={vin} disabled />
        </div>
        <div className={s.row}>
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" value={year} disabled />
        </div>
        <div className={s.row}>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={carColor}
            onChange={handleColorChange}
          />
        </div>
        <div className={s.row}>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={carPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div className={s.row}>
          <label htmlFor="availability">Availability:</label>
          <select
            value={carAvailability}
            id="availability"
            onChange={handleAvailabilityChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className={s.buttons}>
          <Button type="button" className="red" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" className="green">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

ModalEdit.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  car: PropTypes.shape({
    car: PropTypes.string.isRequired,
    car_color: PropTypes.string.isRequired,
    car_model: PropTypes.string.isRequired,
    car_model_year: PropTypes.number.isRequired,
    car_vin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
  }).isRequired,
};
