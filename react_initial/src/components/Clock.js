import React, { useState, useEffect } from 'react';
import FormatDate from './FormatDate';

function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }
  useEffect(() => {
    const timeId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timeId);
    };
  });
  return (
    <div>
      <h1>Hello, world!</h1>
      <FormatDate date={date} />
    </div>
  );
}

export default Clock;
