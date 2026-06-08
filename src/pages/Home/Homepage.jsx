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

          <NavLink to="memo">
            <img src={require("../../images/icon_memo_light.png")} />
            <span>Справочник</span>
          </NavLink>
          <a
            target="_blank"
            href="https://psv4.userapi.com/s/v1/d/CeXy6G5bJpL27B9qMyHtO_VXIVI5KAacG3zv2eBlQ4NvoAwp7dkGtV70WX-L5eRXNFE9OQXAGkaf-CXdQjNJxNx8Y31r_U10HbiRb4Qx3vXuqBEA99hwyg/Turnirnaya_pamyatka_v2_0.pdf"
          >
            <img src={require("../../images/icon_Pamyatka_light.png")} />
            <span>Памятка 2.0</span>
          </a>
          <a
            target="_blank"
            href="https://psv4.userapi.com/s/v1/d/s4nAPtNyoaGQiZJPxcPDITrnSC7iNc9yStKaP5hn5kyRafzLGbScSRJ4UJrGXvkOAd5hEHonQv5vfOdSkj88uAb0A2AeSaQZdOMqEqbsCcXNTYBFyOYyKg/Svod_pravil_status_Turnir_redaktsia_2_0.pdf"
          >
            <img src={require("../../images/icon_rules_light.png")} />
            <span>Правила 2.0</span>
          </a>
        </div>
        <ul className="home__list">
          {localWall.map((post) => (
            <li key={post.id}>
              <div className="home__image-container">
                <img src={post.image} />
                {post.button && (
                  <a href={post.link} className="home__button">
                    {post.button}
                  </a>
                )}
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
