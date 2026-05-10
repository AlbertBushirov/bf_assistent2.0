import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
  NavLink,
} from "react-router-dom";
import { localWall } from "../../Data/localWall";
import "./Homepage.scss";

export function Homepage() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__menu">
          <NavLink to="rating">
            <img src={require("../../images/icon_rating_light.png")} />
            <span>Рейтинг</span>
          </NavLink>
          <NavLink>
            <img src={require("../../images/icon_tournaments_light.png")} />
            <span>Турнир</span>
          </NavLink>
          <NavLink>
            <img src={require("../../images/icon_memo_light.png")} />
            <span>Справочник</span>
          </NavLink>
        </div>
        <ul className="home__list">
          {localWall.map((post) => (
            <li key={post.id}>
              <div className="home__image-container">
                <img src={post.image} />
                {post.button && <a className="home__button">{post.button}</a>}
              </div>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
