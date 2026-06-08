import { useState } from "react";

export const ShellInput = ({ shell, setSelectedShells }) => {
  const [checked, setChecked] = useState(true);

  const handleShellToggle = (shell, isChecked) => {
    if (isChecked) {
      // Добавляем объект в массив выбранных
      setSelectedShells((prev) => [...prev, shell]);
    } else {
      // Удаляем из массива по названию или ID
      setSelectedShells((prev) => prev.filter((s) => s.title !== shell.title));
    }
  };

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    handleShellToggle(shell, isChecked);
  };

  return (
    <label key={shell.id}>
      <img src={shell.image} alt={shell} />
      <div>
        {" "}
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span>{shell.price} очков</span>
      </div>
    </label>
  );
};
