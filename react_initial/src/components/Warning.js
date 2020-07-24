import React, { useState } from 'react';
import WarningBanner from './WarningBanner';

export default function Warning() {
  const [showWarning, setShowWarning] = useState(true);

  function handleToggleClick() {
    setShowWarning(!showWarning);
  }
  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button type="button" onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
