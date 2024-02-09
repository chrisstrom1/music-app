import React, { useState } from 'react';

const Switch = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
};

export default Switch;