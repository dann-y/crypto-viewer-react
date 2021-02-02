import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinListPage from "./pages/CoinListPage";
import CoinWatchListPage from "./pages/CoinWatchListPage";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <CoinListPage />
        </Route>
        <Route exact path="/coins/:id">
          <CoinDetailPage />
        </Route>
        <Route exact path="/watch-list">
          <CoinWatchListPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
