import React, { useState } from 'react';
import CustomButton from './CustomButton';

function Button() {
  const [valueComponent, setValueComponent] = useState(true);

  function handleButtonClick() {
    setValueComponent(!valueComponent);
  }
  let button = '';
  if (valueComponent) {
    button = <CustomButton label="Login" onClick={handleButtonClick} />;
  } else {
    button = <CustomButton label="Logout" onClick={handleButtonClick} />;
  }

  return <div>{button}</div>;
}

export default Button;
