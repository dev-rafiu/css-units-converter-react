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
    <fieldset>
      <legend>Enter unit in {scaleNames[scale]}</legend>
      <input type="number" value={unit} onChange={handleChange} />
    </fieldset>
  );
}

export default UnitInput;
