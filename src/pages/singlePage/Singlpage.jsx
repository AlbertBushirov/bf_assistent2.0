import {
  useParams,
  useNavigate,
  Navigate,
  useOutletContext,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { WeaponItem } from "../../components/weaponItem/WeaponItem";
import { ShellInput } from "../../components/ShellInput";
import { Modal } from "../../components/modal/modal";
import "./Singlpage.scss";

const SinglePage = () => {
  const { units, setRoster, likeUnits, setLikeUnits } = useOutletContext();
  const { id, faction: urlFaction } = useParams();
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [artLoaded, setArtLoaded] = useState(false);
  const unit = units.find((u) => String(u.id) === String(id));
  const currentFaction = unit?.faction || urlFaction;

  const [hasWheels, setHasWheels] = useState(false);
  const [selectedShells, setSelectedShells] = useState(unit ? unit.shells : []);
  const [selectedWeapons, setSelectedWeapons] = useState([]);
  const [countWeapons, setCountWeapons] = useState(0);

  const close = () => navigate(-1);

  useEffect(() => {
    if (unit) {
      setHasWheels(false);
      setSelectedShells(unit.shells || []);
      setSelectedWeapons([]);
      setCountWeapons(0);
      setImgLoaded(false);
    }
  }, [id, unit]);

  const unitLike = (item) => {
    return likeUnits.find((u) => u.id === item.id);
  };

  const removeFromLike = (item) => {
    likeUnits.filter((u) => u.id !== item.id);
  };

  const isFavorite = likeUnits?.some((u) => String(u.id) === String(unit.id));

  const toggleLike = () => {
    if (!unit) return;

    if (isFavorite) {
      setLikeUnits((prev) =>
        prev.filter((u) => String(u.id) !== String(unit.id)),
      );
    } else {
      setLikeUnits((prev) => [unit, ...prev]);
    }
  };

  if (!unit) {
    return <Navigate to="/home" replace={true} />;
  }

  const handleAdd = () => {
    const unitToBasket = {
      ...unit,
      uniqueId: Date.now(),
      isWheels: hasWheels,
      price: calculateTotalPrice(),
      selectedShells: selectedShells,
      selectedWeapons: selectedWeapons,
    };

    setRoster((prev) => [unitToBasket, ...prev]);
    close();
  };

  const calculateTotalPrice = () => {
    const base = hasWheels ? unit.price + unit.wheelsPrise : unit.price;

    const shellsPrice =
      selectedShells?.reduce((sum, s) => sum + s.price, 0) || 0;

    const weaponsPrice =
      selectedWeapons?.reduce((sum, w) => sum + w.price, 0) || 0;

    return base + shellsPrice + weaponsPrice;
  };

  const getCorrectPath = (path) => {
    if (!path) return "";

    if (path.includes("bf_assistent2.0") || path.startsWith("http"))
      return path;

    if (path.startsWith("/")) return `/bf_assistent2.0${path}`;

    return `/bf_assistent2.0/${path}`;
  };

  return (
    <Modal>
      <div className={`previewPage previewPage--${currentFaction}`}>
        <div className={`img-wrapper img-wrapper--${currentFaction}`}>
          {!imgLoaded && <div className="skeleton" />}
          <img
            className={`previewPage__image previewPage__image--${currentFaction} ${imgLoaded ? "loaded" : "loading"}`}
            src={unit.image} // <--- Используем функцию здесь
            onLoad={() => setImgLoaded(true)}
            alt={unit.title}
          />
        </div>

        {unit.description && (
          <img
            className="previewPage__imageArtefact"
            src={unit.description}
            alt="Артефакт отряда"
          />
        )}

        {unit.markerTitle && <p>{unit.markerTitle}</p>}

        {unit.directory && <p>{unit.directory}</p>}

        {/*Превью Орудий с Шинами*/}
        {unit.wheelsPrise && (
          <label>
            <span className="wheels">Шины</span>
            <input
              checked={hasWheels}
              onChange={() => setHasWheels(!hasWheels)}
              className="input_wheels"
              type="checkbox"
            />
          </label>
        )}

        {/*Превью Миномётов*/}
        {unit.shells && (
          <div className="shell__list">
            {unit.shells.map((shell) => (
              <ShellInput
                key={shell.id}
                shell={shell}
                setSelectedShells={setSelectedShells}
              />
            ))}
          </div>
        )}

        {/*Превью Боевых машин*/}
        {unit.weapons && (
          <div className="weapon__list">
            {unit.weapons.map((w) => (
              <WeaponItem
                key={w.id}
                weapon={w}
                countWeapons={countWeapons}
                setCountWeapons={setCountWeapons}
                selectedWeapons={selectedWeapons}
                setSelectedWeapons={setSelectedWeapons}
              />
            ))}
          </div>
        )}

        <div className="previewPage__controls">
          <input
            className="previewPage__controls__like"
            type="checkbox"
            checked={!!isFavorite}
            onChange={toggleLike}
          />
          <div>
            <span>{`${calculateTotalPrice()} очков`}</span>
            <button
              onClick={() => {
                handleAdd();
              }}
              disabled={unit.shells && selectedShells.length === 0}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { SinglePage };
