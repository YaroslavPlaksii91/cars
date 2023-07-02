export const filterCars = (cars, query) => {
  return cars.filter(car => {
    return (
      car.car.toLowerCase().includes(query) ||
      car.car_model.toLowerCase().includes(query) ||
      car.car_vin.toLowerCase().includes(query) ||
      car.car_color.toLowerCase().includes(query) ||
      car.car_model_year.toString().includes(query) ||
      car.price.includes(query) ||
      car.availability.toString().toLowerCase().includes(query)
    );
  });
};
