import React, { useState } from 'react';

export default function Click() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  function handleClick(e) {
    console.log(e);
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
