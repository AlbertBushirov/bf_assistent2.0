import React, { useState, useEffect } from "react";
import "./filter.scss";
import { FilterButton } from "../FilterButton/FilterButton";

const filterButtons = [
  { id: "copyright", image: require("../../images/filter/copyright-logo.png") },
  { id: "tower", image: require("../../images/filter/tower-logo.png") },
  { id: "kbf", image: require("../../images/filter/kbf-logo.png") },
  { id: "aobf", image: require("../../images/filter/ao-logo.png") },
];

const showButtons = [
  { id: "like", image: require("../../images/filter/like-logo.png") },
  { id: "new", image: require("../../images/filter/new-logo.png") },
  { id: "rebalance", image: require("../../images/filter/rebalance-logo.png") },
];

export function Filter({
  activeFilters,
  toggleFilter,
  search,
  setSearch,
  limit,
  setLimit,
  toggleMarkerFilter,
  newSquadMarker,
  setLikeSquadParams,
  likeSquadParams,
  rebalanceMarker,
  toggleRebalanceFilter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`filter-mobile-toggle ${isOpen ? "is-open" : ""}`}
        onClick={toggleDrawer}
      >
        {isOpen ? "✕" : ""}
      </button>

      <aside className={`filter ${isOpen ? "filter--open" : ""}`}>
        <input
          id="search"
          name="search"
          type="search"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="filter__buttons">
          <span>Фильтры</span>
          <div className="filter__group">
            {filterButtons.map((btn) => (
              <FilterButton
                key={btn.id}
                button={btn}
                isChecked={!!activeFilters[btn.id]}
                onToggle={() => toggleFilter(btn.id)}
              />
            ))}
          </div>
        </div>
        <div className="filter__buttons">
          <span>Категории</span>
          <div className="filter__group">
            <FilterButton
              button={showButtons[0]}
              isChecked={!!likeSquadParams}
              onToggle={() => setLikeSquadParams((prev) => !prev)}
            />

            <FilterButton
              button={showButtons[1]}
              isChecked={!!newSquadMarker}
              onToggle={toggleMarkerFilter}
            />

            <FilterButton
              button={showButtons[2]}
              isChecked={!!rebalanceMarker}
              onToggle={toggleRebalanceFilter}
            />
          </div>
        </div>
        <div className="filter__limit">
          <input
            id="number"
            type="number"
            placeholder="Введите лимит..."
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
        </div>
      </aside>
      {isOpen && <div className="filter-overlay" onClick={toggleDrawer} />}
    </>
  );
}
