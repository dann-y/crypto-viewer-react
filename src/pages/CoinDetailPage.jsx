import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CoinHeader from "../components/CoinHeader";
import HistoryChart from "../components/HistoryChart";
import "../components/HistoryChart.css";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);

  //formatting data to make it compatible with chart.js
  const formatData = (data) => {
    return data.map((el) => {
      return { t: el[0], y: el[1].toFixed(10) };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, coin] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
        ),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        coin: coin.data[0],
      });
    };

    fetchData();
  }, []);

  const renderData = () => {
    return (
      <div className="coin-app-detail mt-20 mw- grid content-center grid-cols-3">
        <div className="header-div">
          <h1 className="coin-text">Cryptocurrency Searcher</h1>
        </div>
        <div className="coin-detail m-auto mt-5 col-span-3">
          <CoinHeader
            key={coinData.coin && coinData.coin.id}
            name={coinData.coin && coinData.coin.name}
            image={coinData.coin && coinData.coin.image}
            symbol={coinData.coin && coinData.coin.symbol}
            volume={coinData.coin && coinData.coin.total_volume}
            price={coinData.coin && coinData.coin.current_price}
            priceChange={
              coinData.coin && coinData.coin.price_change_percentage_24h
            }
            marketcap={
              coinData.coin && coinData.coin && coinData.coin.market_cap
            }
          />
        </div>
        <div className="history-chart rounded-lg m-auto col-span-3 w-11/12 mt-3  md: lg:w-8/12">
          <HistoryChart data={coinData} />
        </div>
        <Link className="m-auto col-span-3 mt-16 md:mt-5 lg:mt-5" to="/">
          <div>
            <button className="transition duration-300 bg-purple-800 rounded-lg py-4 px-8 hover:bg-purple-700">
              Back
            </button>
          </div>
        </Link>
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
