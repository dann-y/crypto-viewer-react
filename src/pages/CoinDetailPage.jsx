import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Coin from "../components/Coin";
import HistoryChart from "../components/HistoryChart";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);

  const formatData = (data) => {
    return data.map((el) => {
      return { t: el[0], y: el[1].toFixed(2) };
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
      <div>
        <Coin
          key={coinData.coin && coinData.coin.id}
          name={coinData.coin && coinData.coin.name}
          image={coinData.coin && coinData.coin.image}
          symbol={coinData.coin && coinData.coin.symbol}
          volume={coinData.coin && coinData.coin.total_volume}
          price={coinData.coin && coinData.coin.current_price}
          priceChange={
            coinData.coin && coinData.coin.price_change_percentage_24h
          }
          marketcap={coinData.coin && coinData.coin && coinData.coin.market_cap}
        />
        <HistoryChart data={coinData} />
        <div>
          <button className="bg-purple-700 rounded-lg p-4">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
