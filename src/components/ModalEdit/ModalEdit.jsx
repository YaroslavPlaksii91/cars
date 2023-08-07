import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Form } from 'components/Form/Form';
import { Input } from 'components/Input/Input';
import { Select } from 'components/Select/Select';
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

  const handleSubmit = e => {
    e.preventDefault();

    const editedCar = {
      ...car,
      car_color: carColor,
      price: carPrice,
      availability: carAvailability,
    };

    if (Object.values(editedCar).some(field => field === ''))
      return alert('Missing required field!');

    handleEdit(editedCar);

    closeModal();
  };

  return (
    <Modal isModalOpen={modalOpen}>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="company"
          label="Company:"
          value={company}
          disabled
        />
        <Input type="text" name="model" label="Model:" value={model} disabled />
        <Input type="text" name="vin" label="VIN:" value={vin} disabled />
        <Input type="text" name="year" label="Year:" value={year} disabled />
        <Input
          type="text"
          name="color"
          label="Color:"
          value={carColor}
          onChange={e => setCarColor(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          label="Price:"
          value={carPrice}
          onChange={e => setCarPrice(e.target.value)}
        />
        <Select
          label="Availability:"
          value={carAvailability}
          id="availability"
          onChange={e =>
            setCarAvailability(e.target.value === 'true' ? true : false)
          }
          options={[
            { value: 'true', text: 'True' },
            { value: 'false', text: 'False' },
          ]}
        />
        <div className={s.buttons}>
          <Button type="button" className="red" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" className="green">
            Save
          </Button>
        </div>
      </Form>
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
