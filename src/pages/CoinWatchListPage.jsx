import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Coin from "../components/Coin";

const CoinWatchListPage = () => {
  let promises = [];
  let coinData = [];
  const [isLoading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [search, setSearch] = useState("");
  const watchList = useSelector((state) => state.watchList);

  useEffect(() => {
    if (watchList.length > 0) {
      for (let i = 0; i < watchList.length; i++) {
        promises.push(
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${watchList[i]}`
            )
            // .then((res) => {
            //   coinData.push(res.data[0]);
            //   // setCoinsData([...coinsData, res.data[0]]);
            // })
            .catch((error) => alert(error))
        );
      }
    }

    Promise.all(promises).then((res) => {
      res.forEach(({ data }) => coinData.push(data[0]));

      setCoinsData(coinData);

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div> Loading... </div>;
  }

  //setting search to user input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter coins based on changed state/user input
  const filteredCoins = coinsData.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  if (watchList.length === 0) {
    return <div> Your Watch List is empty! </div>;
  }
  return (
    <div>
      <div className="coin-app">
        {/* <Header /> */}
        <div className="coin-search">
          <h1 className="coin-text">Search for a cryptocurrency!</h1>
          <h4 className="subtitle">Click on any coin to view chart data.</h4>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input "
              onChange={handleChange}
            />
          </form>
          <Link to={`/`}>
            <h1>Browse Coins</h1>
          </Link>
          <h1>Watch List ({watchList.length})</h1>
        </div>

        {/* iterate through filtered coins */}
        {filteredCoins.map((coin) => {
          return (
            <Link to={`/coins/${coin.id}`}>
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoinWatchListPage;
