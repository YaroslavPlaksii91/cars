import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './ModalAdd.module.css';

export const ModalAdd = ({ closeModal, addCar, modalOpen }) => {
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      if (modalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    };

    handleBodyScroll();

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  const handleSubmit = e => {
    e.preventDefault();

    const newCar = {
      car: company,
      car_model: model,
      car_vin: vin,
      car_model_year: year,
      car_color: color,
      price,
      availability,
    };

    addCar(newCar);

    closeModal();
  };

  return (
    <div className={s.modal}>
      <div className={s.content}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.row}>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={e => setModel(e.target.value)}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="vin">VIN:</label>
            <input
              type="text"
              id="vin"
              value={vin}
              onChange={e => setVin(e.target.value.toLocaleUpperCase())}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={e => setYear(Number(e.target.value))}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className={s.row}>
            <label htmlFor="availability">Availability:</label>
            <select
              value={availability}
              id="availability"
              onChange={e =>
                setAvailability(e.target.value === 'true' ? true : false)
              }
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className={s.buttons}>
            <button type="button" className={s.btn} onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className={s.btn}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ModalAdd.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addCar: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
