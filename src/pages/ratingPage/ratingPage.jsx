import { localPlayers } from "../../Data/localRating";
import { Modal } from "../../components/modal/modal";
import { useState } from "react";
import "./ratingPage.scss";

export function RatingPage() {
  const defaultFooterText = "(Нажмите на Кубок)";
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const winrating = (a, b) => {
    return Math.round((a / b) * 100);
  };

  const sortPlayers = [...localPlayers].sort((a, b) => {
    if (a.games === 0 && b.games !== 0) return 1;
    if (a.games !== 0 && b.games === 0) return -1;
    if (a.games === 0 && b.games === 0) return 0;

    const scoreA = Math.round((a.win / a.games) * 100) + a.win;
    const scoreB = Math.round((b.win / b.games) * 100) + b.win;

    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }

    if (b.games !== a.games) {
      return b.games - a.games;
    }

    const achievementsA = a.achievements ? a.achievements.length : 0;
    const achievementsB = b.achievements ? b.achievements.length : 0;

    return achievementsB - achievementsA;
  });
  return (
    <Modal>
      <div className="rating">
        <ul className="rating__header">
          <li>Место</li>
          <li>Аватар</li>
          <li>Игрок</li>
          <li>Достижения</li>
          <li>Побед/Игр</li>
          <li>% Побед</li>
        </ul>
        <ul className="rating__list">
          {sortPlayers.map((player, index) => (
            <li key={player.id} className="rating__item">
              <span className="rating__index">{index + 1}</span>
              <img className="rating__list-img" src={player.image} />
              <span className="rating__name">{player.player}</span>
              <div className="rating__achievements">
                {player.achievements.map((a, index) => (
                  <img
                    key={index}
                    className="rating__item__achievement"
                    src={a.image}
                    alt={a.title}
                    onMouseEnter={() => setHoveredAchievement(a.title)}
                    onMouseLeave={() => setHoveredAchievement(null)}
                  />
                ))}
              </div>
              <span>
                {player.win} / {player.games}
              </span>
              <span>
                {player.win !== 0 ? winrating(player.win, player.games) : 0}%
              </span>
            </li>
          ))}
        </ul>
        <div className="rating__footer">
          <span>Описание: {hoveredAchievement || defaultFooterText}</span>
          <a
            target="blank"
            className="rating__footer__button"
            href="https://vk.com/im/convo/-227215740?entrypoint=community_page&tab=all"
          >
            Обновить Аватар
          </a>
        </div>
      </div>
    </Modal>
  );
}
