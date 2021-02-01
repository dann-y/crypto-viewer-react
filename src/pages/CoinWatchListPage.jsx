import React, { useEffect } from "react";
import axios from "axios";

const CoinWatchListPage = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <div className="coin-app">
        {/* <Header /> */}
        <div className="coin-search">
          <h1 className="coin-text">Search for a cryptocurrency!</h1>
          <h4 className="subtitle">Click on any coin to view chart data.</h4>
          <form>
            <input type="text" placeholder="Search" className="coin-input " />
          </form>
        </div>
      </div>
      {console.log(watchList)}
    </div>
  );
};

export default CoinWatchListPage;
