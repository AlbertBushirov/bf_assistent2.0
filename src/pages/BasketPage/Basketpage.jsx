import { useState, useMemo, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { squads } from "../../Data/localKoldun";
import { SinglePage } from "../singlePage/Singlpage";
import { Modal } from "../../components/modal/modal";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { saveBasketAsImage } from "../../utils/saveBasketAsImage";
import "./basketPage.scss";

const categoryPriority = {
  "Войска Колдуна": 1,
  "Легионеры Некроманта": 1,
  "Гвардия Чародея": 1,
  "Гильдия вольных стрелков": 1,
  "Нейтральный отряд (КБФ)": 1,
  "Нейтралы (АОБФ)": 1,
  "Войско павшего мага (КБФ)": 1,
  "Войско павшего мага (АОБФ)": 1,
  "Альянс Свободных (АОБФ)": 1,
  "Альянс Свободных (КБФ)": 1,
  "База (КБФ)": 1,
  "База (АОБФ)": 1,
  "Легионы черной планеты (КБФ)": 1,
  "Х-Бункер (КБФ)": 1,
  Персонаж: 2,
  "Персонаж (КБФ)": 2,
  "Персонаж (АОБФ)": 2,
  "Боевая машина": 3,
  weapons: 4,
};

export function Basketpage({
  roster,
  setRoster,
  hasWheels,
  setHasWheels,
  limit,
  setLimit,
}) {
  const removeFromBasket = (id) => {
    const filterRoster = roster.filter((unit) => unit.uniqueId !== id);
    setRoster(filterRoster);
  };

  const basketListRef = useRef(null);

  const navigate = useNavigate();
  const close = () => navigate(-1);

  const clearBusket = () => {
    setRoster([]);
  };

  const getTotalPrice = (item) => {
    return item.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  const toggleWheelsInRoster = (uniqueId) => {
    setRoster((prev) =>
      prev.map((u) => {
        if (u.uniqueId === uniqueId) {
          const newIsWheels = !u.isWheels;

          const priceDiff = u.wheelsPrise || 0;

          return {
            ...u,
            isWheels: newIsWheels,
            price: newIsWheels ? u.price + priceDiff : u.price - priceDiff,
          };
        }
        return u;
      }),
    );
  };

  const sortUnits = useMemo(() => {
    return [...roster].sort((a, b) => {
      const priorityA = categoryPriority[a.category?.trim()] || 99;
      const priorityB = categoryPriority[b.category] || 99;

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      return b.price - a.price;
    });
  }, [roster]);

  const handleSave = () => {
    saveBasketAsImage(basketListRef.current, getTotalPrice(sortUnits));
  };

  return (
    <Modal>
      <div className="basket">
        <span className="basket__title">Просмотр Армии</span>

        <motion.ul className="basket__list" ref={basketListRef}>
          <AnimatePresence>
            {sortUnits.length === 0 ? (
              <motion.span
                key="empty-message"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Армия не выбрана
              </motion.span>
            ) : (
              sortUnits.map((unit) => (
                <motion.li
                  className="basket__item"
                  key={unit.uniqueId}
                  layout
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: 20,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 500,
                      damping: 50,
                      mass: 1,
                    },
                  }}
                >
                  <img
                    className="basket__image"
                    src={unit.image}
                    alt={unit.title}
                  />

                  {unit.description && (
                    <img
                      className="basket__description"
                      src={unit.description}
                      alt="description"
                    />
                  )}

                  {unit.wheelsPrise && (
                    <label onClick={(e) => e.stopPropagation()}>
                      <span className="wheels">Шины</span>
                      <input
                        type="checkbox"
                        checked={unit.isWheels}
                        onChange={() => toggleWheelsInRoster(unit.uniqueId)}
                      />
                    </label>
                  )}

                  {unit.shells && (
                    <div className="shell__list">
                      <span className="weapons_span">Выбранные снаряды:</span>
                      {unit.selectedShells?.map((shell, index) => (
                        <div key={index}>
                          <img src={shell.image} alt={shell.title} />
                        </div>
                      ))}
                    </div>
                  )}

                  {unit.weapons && (
                    <div className="weapons_conteiner">
                      <span className="weapons_span">
                        {unit.selectedWeapons.length > 0
                          ? "Выбранное вооружение:"
                          : ""}
                      </span>
                      {unit.selectedWeapons?.map((weapon) => (
                        <div key={weapon.id}>
                          <img src={weapon.image} alt={weapon.title} />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="basket__item-aside" data-html2canvas-ignore>
                    <span>{unit.price} очков</span>
                    <button
                      className="basket__item-delete"
                      onClick={() => removeFromBasket(unit.uniqueId)}
                    ></button>
                  </div>
                </motion.li>
              ))
            )}
          </AnimatePresence>
        </motion.ul>

        <div className="basket__controls">
          <button
            className="basket__controls__save_button"
            onClick={handleSave}
            disabled={roster.length === 0}
          >
            <img src={require("../../images/saveImage.png")} alt="дискета" />
          </button>
          <div>
            <span>
              {limit
                ? `${getTotalPrice(sortUnits)}/ ${limit} очков`
                : `${getTotalPrice(sortUnits)} очков`}
            </span>
            <button
              className="button__clear"
              onClick={() => {
                clearBusket();
                close();
              }}
              disabled={sortUnits.length === 0}
            >
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
