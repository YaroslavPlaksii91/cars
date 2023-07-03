import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Form } from 'components/Form/Form';
import { Input } from 'components/Input/Input';
import { Select } from 'components/Select/Select';
import { Button } from 'components/Button/Button';

import s from './ModalAdd.module.css';

export const ModalAdd = ({ closeModal, addCar, modalOpen }) => {
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState(false);

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

    if (Object.values(newCar).some(field => field === ''))
      return alert('Missing required field!');

    addCar(newCar);

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
          onChange={e => setCompany(e.target.value)}
        />
        <Input
          type="text"
          name="model"
          label="Model:"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <Input
          type="text"
          name="vin"
          label="VIN:"
          value={vin}
          onChange={e => setVin(e.target.value.toLocaleUpperCase())}
        />
        <Input
          type="text"
          name="year"
          label="Year:"
          value={year}
          onChange={e => setYear(Number(e.target.value))}
        />
        <Input
          type="text"
          name="color"
          label="Color:"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          label="Price:"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Select
          label="Availability:"
          value={availability}
          id="availability"
          onChange={e =>
            setAvailability(e.target.value === 'true' ? true : false)
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

ModalAdd.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addCar: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
