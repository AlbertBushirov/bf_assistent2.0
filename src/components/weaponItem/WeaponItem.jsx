import { useState } from "react";
import "./weaponItem.scss";

export function WeaponItem({
  weapon,
  countWeapons,
  setCountWeapons,
  selectedWeapons,
  setSelectedWeapons,
}) {
  const [count, setCount] = useState(0);

  const updateCount = (val) => {
    const newCountWeapons = countWeapons + val;
    const newCount = count + val;
    setCountWeapons(newCountWeapons);
    setCount(newCount);
  };

  const addWeapons = (weapon) => {
    setSelectedWeapons((prev) => [...prev, weapon]);
  };

  const removeWeapons = (weapon) => {
    setSelectedWeapons((prev) => {
      const index = prev.findIndex((w) => w.title === weapon.title);

      if (index !== -1) {
        const newArr = [...prev];
        newArr.splice(index, 1);
        return newArr;
      }

      return prev;
    });
  };

  return (
    <div key={weapon.id} className="weapon-row">
      <span>
        {weapon.title} [{weapon.price}]
      </span>
      <div className="volume-control">
        <button
          disabled={count === 0}
          onClick={() => {
            updateCount(-1);
            removeWeapons(weapon);
          }}
        >
          -
        </button>
        <span className="volume-level">{count}</span>
        <button
          disabled={countWeapons === 2}
          onClick={() => {
            updateCount(1);
            addWeapons(weapon);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
