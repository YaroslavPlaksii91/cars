import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://myfakeapi.com/api/cars');
      console.log(response.data.cars);
      setCars(response.data.cars);
      setFilteredCars(response.data.cars);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = event => {
    const keyword = event.target.value.toLowerCase();
    setSearchInput(keyword);
    const filteredData = cars.filter(car => {
      return (
        car.company.toLowerCase().includes(keyword) ||
        car.model.toLowerCase().includes(keyword) ||
        car.vin.toLowerCase().includes(keyword) ||
        car.color.toLowerCase().includes(keyword) ||
        car.year.toString().includes(keyword) ||
        car.price.toString().includes(keyword) ||
        car.availability.toLowerCase().includes(keyword)
      );
    });
    setFilteredCars(filteredData);
  };

  return (
    <div className="container">
      <h1>Cars List</h1>
      <input
        type="text"
        id="searchInput"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearch}
      />
      <table id="carsTable">
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCars.map(car => (
            <tr key={car.vin}>
              <td>{car.id}</td>
              <td>{car.car}</td>
              <td>{car.car_model}</td>
              <td>{car.car_vin}</td>
              <td>{car.car_color}</td>
              <td>{car.car_model_year}</td>
              <td>{car.price}</td>
              <td>{car.availability}</td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
