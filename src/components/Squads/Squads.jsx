import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { factions } from "../../Data/dataUnits";
import "./Squads.scss";

export function Squads() {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <details
      ref={detailsRef}
      open={isOpen}
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary>Отряды</summary>
      <ul onClick={() => setIsOpen(false)}>
        {factions.map((faction) => (
          <li key={faction.to} className={`faction faction--${faction.slug}`}>
            <NavLink to={faction.to}>
              <span>{faction.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </details>
  );
}
