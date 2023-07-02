import { useEffect, useState } from 'react';

import { Container } from 'components/Container/Container';
import { Heading } from 'components/Heading/Heading';
import { Search } from 'components/Search/Search';
import { Button } from 'components/Button/Button';
import { Table } from 'components/Table/Table';
import { Pagination } from 'components/Pagination/Pagination';
import { ModalDelete } from 'components/ModalDelete/ModalDelete';
import { ModalEdit } from 'components/ModalEdit/ModalEdit';
import { ModalAdd } from 'components/ModalAdd/ModalAdd';

import { getCars } from 'services/getCars';
import { filterCars } from 'services/filterCars';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [actionCar, setActionCar] = useState(null);

  useEffect(() => {
    const storedCars = localStorage.getItem('cars');

    if (storedCars) {
      try {
        setCars(JSON.parse(storedCars));
        setFilteredCars(JSON.parse(storedCars));
      } catch (error) {
        console.error(error);
      }
    } else {
      getCars()
        .then(cars => {
          setCars(cars);
          setFilteredCars(cars);
          localStorage.setItem('cars', JSON.stringify(cars));
        })
        .catch(console.error);
    }
  }, []);

  const handleSearch = event => {
    const keyword = event.target.value.toLowerCase();
    setSearchInput(keyword);

    const filteredData = filterCars(cars, keyword);

    setFilteredCars(filteredData);
    setCurrentPage(1);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const getPaginatedCars = () => {
    const rowsPerPage = 50;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return filteredCars.slice(startIndex, endIndex);
  };

  const addCar = car => {
    const updatedCars = [car, ...filteredCars];

    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const deleteCar = vin => {
    const updatedCars = filteredCars.filter(({ car_vin }) => car_vin !== vin);

    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const handleEdit = editedCar => {
    const updatedCars = filteredCars.map(car =>
      car.car_vin === editedCar.car_vin ? editedCar : car,
    );

    setFilteredCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const toggleModalDelete = () => {
    setModalDeleteIsOpen(!modalDeleteIsOpen);
  };

  const toggleModalEdit = () => {
    setModalEditIsOpen(!modalEditIsOpen);
  };

  const toggleModalAdd = () => {
    setModalAddIsOpen(!modalAddIsOpen);
  };

  return (
    <Container>
      <Heading level={1}>Cars</Heading>
      <Search value={searchInput} onChange={handleSearch} />
      <Button type="button" onClick={toggleModalAdd}>
        Add car
      </Button>
      <Table
        cars={getPaginatedCars()}
        toggleModalDelete={toggleModalDelete}
        toggleModalEdit={toggleModalEdit}
        setActionCar={setActionCar}
      />
      <Pagination
        data={filteredCars}
        perPage={50}
        currentPage={currentPage}
        onClick={handlePageChange}
      />

      {modalDeleteIsOpen && (
        <ModalDelete
          toggleModalDelete={toggleModalDelete}
          deleteCar={() => deleteCar(actionCar)}
        />
      )}
      {modalEditIsOpen && (
        <ModalEdit
          closeModal={toggleModalEdit}
          car={filteredCars.find(({ car_vin }) => car_vin === actionCar)}
          handleEdit={handleEdit}
        />
      )}
      {modalAddIsOpen && (
        <ModalAdd closeModal={toggleModalAdd} addCar={addCar} />
      )}
    </Container>
  );
};
