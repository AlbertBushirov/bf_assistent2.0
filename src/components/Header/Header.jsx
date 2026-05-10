import { NavLink } from "react-router-dom";
import { Squads } from "../Squads/Squads";
import "./Header.scss";

export function Header({ roster, limit }) {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  const getTotalPrice = (item) => {
    return item.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__main">
          <NavLink className="header__link" to="/home">
            <img
              className="header__logo"
              src={require("../../images/logo-light.png")}
              alt="Логотип BF assistent"
            />
          </NavLink>
          <nav className="header__nav">
            <ul>
              <Squads />
              <li>
                <NavLink to="/heroes" className={setActive}>
                  <span className="full-text">Боевые Персонажи</span>
                  <span className="short-text">БП</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/fightMachine" className={setActive}>
                  <span className="full-text">Боевые Машины</span>
                  <span className="short-text">БМ</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/weapons" className={setActive}>
                  Орудия
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="basket_conteiner">
          <NavLink to="/basket" className="basket_conteiner__button">
            <span className="header__basket-counter">{roster.length}</span>
            <img
              className="header__logo"
              src={require("../../images/basket_logo.png")}
              alt="Логотип BF assistent"
            />
          </NavLink>
          <span className="header__container__price">
            сумма ростера:{" "}
            {limit
              ? `${getTotalPrice(roster)}/ ${limit}`
              : `${getTotalPrice(roster)} `}{" "}
            очков
          </span>
        </div>
      </div>
    </header>
  );
}
