import React, { useState } from "react";
import Input from "./components/Input";

function toPixel(rem) {
  return rem * 16;
}

function toRem(px) {
  return px / 16;
}

function tryConvert(unit, convert) {
  const input = parseFloat(unit);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Converter() {
  const [localState, setLocalState] = useState({
    unit: "",
    scale: "px",
  });

  const handlePxChange = (unit) => {
    setLocalState({ scale: "px", unit });
  };

  const handleRemChange = (unit) => {
    setLocalState({ scale: "rem", unit });
  };

  const scale = localState.scale;
  const unit = localState.unit;
  const pixel = scale === "rem" ? tryConvert(unit, toPixel) : unit;
  const rem = scale === "px" ? tryConvert(unit, toRem) : unit;

  return (
    <main className="main">
      <h2>Css Unit Converter</h2>

      <div className="container">
        <Input scale="px" unit={pixel} onUnitChange={handlePxChange} />
        <Input scale="rem" unit={rem} onUnitChange={handleRemChange} />
      </div>
    </main>
  );
}

export default Converter;
