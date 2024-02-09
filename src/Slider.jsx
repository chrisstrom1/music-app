import React, { useState } from 'react';

const Slider = ({ label }) => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="range" min="0" max="100" value={value} onChange={handleChange} />
    </div>
  );
};

export default Slider;