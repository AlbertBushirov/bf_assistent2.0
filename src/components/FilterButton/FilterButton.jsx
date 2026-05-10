import { useState } from "react";

export function FilterButton({ button, isChecked, onToggle }) {
  const uniqueId = `btn-${button.id}`;
  return (
    <div className="filter__item">
      <input
        type="checkbox"
        checked={isChecked}
        id={button.id}
        className="filter__checkbox"
        onChange={onToggle}
      />
      <label htmlFor={button.id} className="filter__label">
        <img src={button.image} alt={button.id} />
      </label>
    </div>
  );
}
