import { Modal } from "../../components/modal/modal";
import "./memoPage.scss";

export function MemoPage() {
  return (
    <Modal>
      <div className="memo">
        <div className="virtual_shooting">
          <h1>Виртуальная стрельба</h1>
          <h2>
            Вероятность выпадения <span className="memo_title_number">6</span>{" "}
            при броске:
          </h2>
          <ul className="memo__list_virtual">
            <li className="memo__item">
              <span className="memo__number">1</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">16.6%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">2</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">30.5%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">3</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">42.1%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">4</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">51.8%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">5</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">59.8%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">6</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">66.5%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">7</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">75.3%</span>
            </li>
            <li className="memo__item">
              <span className="memo__number">8</span>
              <img
                className="memo__cubes"
                src={require("../../images/cubes.png")}
                alt="Игральные кости"
              />
              <span className="memo__equals">=</span>
              <span className="memo__result">76.8%</span>
            </li>
          </ul>
        </div>
        <div className="memo__combat">
          <div className="hand_combat">
            <h1>Рукопашный бой 1vs1</h1>
            <h2>Вероятность победы при разнице доп. очков:</h2>
            <ul className="memo__list_combat">
              <li>
                <div className="memo__item">
                  <span className="memo__number">4</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">91.7%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">3</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">83.3%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">2</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">72.2%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">1</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">58.3%</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hand_combat">
            <h1>Рукопашный бой 2vs2</h1>
            <h2>Вероятность победы при разнице доп. очков:</h2>
            <ul className="memo__list_combat">
              <li>
                <div className="memo__item">
                  <span className="memo__number">6</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">83%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">5</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">75%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">4</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">62.2%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">3</span>
                  <span className="memo__equals">=</span>
                  <span className="memo__result">59.3%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="memo__info">
          <div className="hand_combat">
            <h1>Активация артефакта</h1>
            <h2>Вероятность успеха:</h2>
            <ul className="memo__list_combat">
              <li>
                <div className="memo__item">
                  <span className="memo__number">4</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">80.25%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">3</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">70.37%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">2</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">55.56%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">1</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">33.33%</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hand_combat">
            <h1>Спасбросок брони</h1>
            <h2>Вероятность выпадения 6:</h2>
            <ul className="memo__list_combat">
              <li>
                <div className="memo__item">
                  <span className="memo__number">4</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">51.8%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">3</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">42.1%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">2</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">30.5%</span>
                </div>
                <div className="memo__item">
                  <span className="memo__number">1</span>
                  <img
                    className="memo__cubes"
                    src={require("../../images/cubes.png")}
                    alt="Игральные кости"
                  />
                  <span className="memo__equals">=</span>
                  <span className="memo__result">16.6%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
