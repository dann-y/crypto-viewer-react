import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../components/Coin";
import WatchListCoin from "../components/WatchListCoin";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import watchListReducer from "../reducers/watchList";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { addCoin } from "../actions";

const CoinListPage = () => {
  const watchList = useSelector((state) => state.watchList);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  // const [watchList, setWatchList] = useState([]);

  // fetching coin data

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  //setting search to user input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter coins based on changed state/user input
  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
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

        <h1>Browse Coins</h1>

        <Link to={`/watch-list`}>
          <h1>Watch List ({watchList.length})</h1>
        </Link>
      </div>

      {/* iterate through filtered coins */}
      {filteredCoins.map((coin) => {
        return (
          <Link to={`/coins/${coin.id}`}>
            <Coin
              id={coin.id}
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
  );
};

export default CoinListPage;
