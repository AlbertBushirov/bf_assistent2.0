import { useState, useMemo, useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { squads } from "../../Data/localKoldun";
import { SinglePage } from "../singlePage/Singlpage";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "../../components/filter/filter";
import { factions } from "../../Data/dataUnits";
import "./Unitspage.scss";

export function Unitspage({
  dataUnits,
  roster,
  setRoster,
  massUnits,
  limit,
  setLimit,
}) {
  const { faction } = useParams();
  const [likeUnits, setLikeUnits] = useState(() => {
    const saved = localStorage.getItem("likeUnits");
    return saved ? JSON.parse(saved) : [];
  });

  const [pushRoster, setPushRoster] = useState(false);
  const [search, setSearch] = useState("");

  const [likeSquadParams, setLikeSquadParams] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const newSquadMarker = searchParams.get("marker");
  const rebalanceMarker = searchParams.get("rebalance");

  const units = dataUnits[faction] || [];

  const [activeFilters, setActiveFilters] = useState(() => {
    const savedFilters = localStorage.getItem("activeFilters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          tower: true,
          copyright: true,
          kbf: true,
          aobf: true,
        };
  });

  useEffect(() => {
    localStorage.setItem("activeFilters", JSON.stringify(activeFilters));
  }, [activeFilters]);

  useEffect(() => {
    localStorage.setItem("likeUnits", JSON.stringify(likeUnits));
  }, [likeUnits]);

  const toggleFilter = (id) => {
    setActiveFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const getTotalPrice = (item) => {
    return item.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  const filteredAndSortedUnits = useMemo(() => {
    let baseList;

    if (likeSquadParams) {
      baseList = likeUnits;
    } else {
      baseList =
        search.trim() !== "" || newSquadMarker || rebalanceMarker
          ? massUnits
          : units;
    }

    const totalPrice = getTotalPrice(roster);
    const limitNumber = limit !== "" ? Number(limit) : null;

    const safeBaseList = Array.isArray(baseList) ? baseList : [];

    return safeBaseList
      .filter((u) => {
        const markerMatch = !newSquadMarker || u.markerTitle === newSquadMarker;
        const rebalanceMatch =
          !rebalanceMarker ||
          (u.markerTitle && !u.markerTitle.toLowerCase().includes("новая"));

        const searchTerm = search.toLowerCase();
        const titleMatch = u.title?.toLowerCase().includes(searchTerm);
        const priceMatch = String(u.price || "").includes(searchTerm);

        const towerMatch = !activeFilters.tower ? !u.tower : true;
        const copyrightMatch = !activeFilters.copyright ? !u.copyright : true;
        const kbfMatch = !activeFilters.kbf
          ? !u.category.includes("(КБФ)")
          : true;
        const aobfMatch = !activeFilters.aobf
          ? !u.category.includes("(АОБФ)")
          : true;

        const budgetMatch =
          limitNumber !== null
            ? (u.price || 0) <= limitNumber - totalPrice
            : true;

        return (
          markerMatch &&
          rebalanceMatch &&
          (titleMatch || priceMatch) &&
          towerMatch &&
          copyrightMatch &&
          kbfMatch &&
          aobfMatch &&
          budgetMatch
        );
      })
      .sort((a, b) => (a.title || "").localeCompare(b.title || "", "ru"));
  }, [
    search,
    units,
    massUnits,
    activeFilters,
    limit,
    roster,
    newSquadMarker,
    rebalanceMarker,
    likeSquadParams,
    likeUnits,
  ]);

  const toggleMarkerFilter = () => {
    if (newSquadMarker === "Новая адаптированная Боевая единица") {
      setSearchParams((prev) => {
        prev.delete("marker");
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.set("marker", "Новая адаптированная Боевая единица");
        return prev;
      });
    }
  };

  const toggleRebalanceFilter = () => {
    if (rebalanceMarker === "Ребаланс") {
      setSearchParams((prev) => {
        prev.delete("rebalance");
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.set("rebalance", "Ребаланс");
        return prev;
      });
    }
  };

  const getFullPrice = (unit) => {
    const basePrice = unit.price || 0;

    const shellsPrice = unit.shells
      ? unit.shells.reduce((sum, s) => sum + s.price, 0)
      : 0;
    return basePrice + shellsPrice;
  };

  const inputRoster = (unit) => {
    const isExist = roster.some((item) => item.id === unit.id);

    if (isExist) {
      setRoster(roster.filter((item) => item.id !== unit.id));
    } else {
      const unitToBasket = {
        ...unit,
        uniqueId: Date.now(),

        selectedShells: unit.shells || [],
        selectedWeapons: [],
        isWheels: false,

        price: getFullPrice(unit),
      };
      setRoster([...roster, unitToBasket]);
    }
  };

  const titleFaction = (f) => {
    if (rebalanceMarker === "Ребаланс") return "Ребаланс Боевыx Единиц:";
    if (search) return "Результат поиска:";
    if (newSquadMarker === "Новая адаптированная Боевая единица")
      return "Новые Боевые единицы:";
    if (likeSquadParams) return "Избранные Боевые единицы:";

    const faction = factions.find((item) => item.slug === f);

    return faction ? `${faction.title} (${faction.number})` : "";
  };

  return (
    <motion.div
      className="unitsPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="unitsPage__list"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
      >
        {
          <span className={`title title--${faction}`}>
            {titleFaction(faction)}
          </span>
        }

        {filteredAndSortedUnits.length > 0 ? (
          filteredAndSortedUnits.map((u) => (
            <div
              key={u.id}
              className={`unitsPage__item unitsPage__item--${faction}`}
            >
              <input
                className="unitsPage__input"
                type="checkbox"
                checked={roster.some((item) => item.id === u.id)}
                onChange={() => inputRoster(u)}
              />

              <Link to={`/${u.faction}/${u.id}`}>
                <span>{u.title}</span>
                <span> {getFullPrice(u)} очков</span>
              </Link>
            </div>
          ))
        ) : (
          <span className="unitsPage__empty">Ничего не найдено</span>
        )}
      </motion.div>
      <Filter
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        toggleMarkerFilter={toggleMarkerFilter}
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
        newSquadMarker={newSquadMarker}
        setLikeSquadParams={setLikeSquadParams}
        likeSquadParams={likeSquadParams}
        rebalanceMarker={rebalanceMarker}
        toggleRebalanceFilter={toggleRebalanceFilter}
      />
      <Outlet
        context={{
          units: massUnits,
          roster,
          setRoster,
          likeUnits,
          setLikeUnits,
        }}
      />
    </motion.div>
  );
}
