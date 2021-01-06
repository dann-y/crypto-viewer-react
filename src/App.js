import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinListPage from "./pages/CoinListPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <CoinListPage />
        </Route>
        <Route exact path="/coins/:id">
          <CoinDetailPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
