import React, { useEffect, useState } from 'react';

import { Container } from 'components/Container/Container';
import { Heading } from 'components/Heading/Heading';
import { Search } from 'components/Search/Search';
import { Table } from 'components/Table/Table';
import { Pagination } from 'components/Pagination/Pagination';

import { ModalDelete } from 'components/ModalDelete/ModalDelete';

import { getCars } from 'services/getCars';
import { filterCars } from 'services/filterCars';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [actionCarId, setActionCarId] = useState(null);

  useEffect(() => {
    getCars()
      .then(cars => {
        setCars(cars);
        setFilteredCars(cars);
      })
      .catch(console.error);
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

  const deleteCar = carId => {
    const updatedCars = cars.filter(car => car.id !== carId);
    setCars(updatedCars);
  };

  return (
    <Container>
      <Heading level={1}>Cars</Heading>
      <Search value={searchInput} onChange={handleSearch} />
      <Table
        cars={getPaginatedCars()}
        openModalDelete={setModalDeleteIsOpen}
        setActionCarId={setActionCarId}
      />
      <Pagination
        data={filteredCars}
        perPage={50}
        currentPage={currentPage}
        onClick={handlePageChange}
      />
      {modalDeleteIsOpen && (
        <ModalDelete
          isModalOpen={setModalDeleteIsOpen}
          deleteCar={() => deleteCar(actionCarId)}
        />
      )}
    </Container>
  );
};
