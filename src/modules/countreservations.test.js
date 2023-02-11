/**
 * @jest-environment jsdom
 */

import countDataReservation from './countreservations.js';

describe('Testing Reservations counter', () => {
  test('should return Reservations(3)', () => {
    const data = [
      {
        username: 'John',
        date_start: '2020-12-17',
        date_end: '2020-12-18',
      },
      {
        username: 'Jane',
        date_start: '2021-1-12',
        date_end: '2021-1-17',
      },
      {
        username: 'Robert',
        date_start: '2023-1-12',
        date_end: '2024-1-17',
      },
    ];

    const counter = countDataReservation(data);
    expect(counter).toBe('Reservations(3)');
  });

  test('should return Reservations(0)', () => {
    const data = [];

    const counter = countDataReservation(data);
    expect(counter).toBe('Reservations(0)');
  });
});