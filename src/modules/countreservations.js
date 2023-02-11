const countDataReservation = (data) => {
  let count = 0;
  if (!data) {
    return 'Reservations(0)';
  }
  data.forEach(() => {
    count += 1;
  });
  return `Reservations(${count})`;
};

export default countDataReservation;