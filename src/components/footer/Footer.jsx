import "./Footer.scss";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__img" src={require("../../images/logo.png")} />
        <p className="footer__description">
          BF assistent - это проект, призванный облегчить набор армий для игры в
          Битвы Fantasy.
        </p>
        <p className="footer__features">
          Сайт включает в себя рейтинг игроков, турнирные сетки с историей
          матчей и подробный справочник.
        </p>
      </div>
      <hr />

      <div className="footer__info">
        <span className="footer__version">Версия 2.0</span>
        <a>
          <img
            className="footer__a"
            src={require("../../images/VK_logo_dark-04.png")}
          />
        </a>
      </div>
    </div>
  );
}
