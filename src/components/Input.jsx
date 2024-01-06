import React, { useState } from "react";

function UnitInput({ scale, unit, onUnitChange }) {
  const scaleNames = {
    px: "px",
    rem: "rem",
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onUnitChange(value);
  };

  return (
    <>
      <label htmlFor={scaleNames[scale]}>
        Enter value in <span className="unit">{scaleNames[scale]}</span>
      </label>

      <input
        type="number"
        value={unit}
        onChange={handleChange}
        id={scaleNames[scale]}
      />
    </>
  );
}

export default UnitInput;
