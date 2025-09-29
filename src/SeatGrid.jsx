// SeatGrid.jsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io(import.meta.env.VITE_API_URL);

export default function SeatGrid({ showtimeId, layout, initialState }) {
  const [state, setState] = useState(initialState); // { 'A-1': 'available'|'held'|'booked' }

  useEffect(() => {
    socket.emit('joinShowtime', showtimeId);
    socket.on('seatHeld', ({ seats }) => {
      setState((s) => {
        const next = { ...s };
        seats.forEach(({row, number}) => next[`${row}-${number}`] = 'held');
        return next;
      });
    });
    socket.on('seatReleased', ({ seats }) => {
      setState((s) => {
        const next = { ...s };
        seats.forEach(({row, number}) => next[`${row}-${number}`] = 'available');
        return next;
      });
    });
    socket.on('seatBooked', ({ seats }) => {
      setState((s) => {
        const next = { ...s };
        seats.forEach(({row, number}) => next[`${row}-${number}`] = 'booked');
        return next;
      });
    });
    return () => socket.off();
  }, [showtimeId]);

  return (
    <div className="grid gap-1" style={{gridTemplateColumns: `repeat(${layout.cols}, 32px)`}}>
      {layout.seats.map(seat => {
        const key = `${seat.row}-${seat.number}`;
        const status = state[key];
        return (
          <button key={key}
            disabled={status !== 'available' || seat.disabled}
            className={`seat seat-${status}`}
            onClick={() => {/* call POST /holds or add to selection */}}>
            {seat.row}{seat.number}
          </button>
        );
      })}
    </div>
  );
}
