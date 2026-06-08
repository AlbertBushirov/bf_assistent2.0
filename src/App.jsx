import "./index.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { SinglePage } from "./pages/singlePage/Singlpage";
import { Unitspage } from "./pages/unitPage/Unitspage";
import { Basketpage } from "./pages/BasketPage/Basketpage";
import { Homepage } from "./pages/Home/Homepage";
import { RatingPage } from "./pages/ratingPage/ratingPage";
import { MemoPage } from "./pages/memoPage/memoPage";

import { Layout } from "./components/Layout/Layout";

//данные
import { dataUnits, massUnits } from "./Data/dataUnits";

function App() {
  const [roster, setRoster] = useState(() => {
    const saved = localStorage.getItem("roster");
    return saved ? JSON.parse(saved) : [];
  });
  const [hasWheels, setHasWheels] = useState(false);
  const [limit, setLimit] = useState("");

  useEffect(() => {
    localStorage.setItem("roster", JSON.stringify(roster));
  }, [roster]);

  return (
    <Routes>
      <Route path="/" element={<Layout limit={limit} roster={roster} />}>
        <Route index element={<Navigate to="/home" replace />} />

        <Route path="home" element={<Homepage />}>
          <Route path="rating" element={<RatingPage />} />
          <Route path="memo" element={<MemoPage />} />
        </Route>

        <Route
          path=":faction"
          element={
            <Unitspage
              roster={roster}
              setRoster={setRoster}
              dataUnits={dataUnits}
              hasWheels={hasWheels}
              setHasWheels={setHasWheels}
              massUnits={massUnits}
              limit={limit}
              setLimit={setLimit}
            />
          }
        >
          <Route path=":id" element={<SinglePage />} />
        </Route>

        <Route
          path="basket"
          element={
            <Basketpage
              hasWheels={hasWheels}
              setHasWheels={setHasWheels}
              roster={roster}
              setRoster={setRoster}
              limit={limit}
              setLimit={setLimit}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
