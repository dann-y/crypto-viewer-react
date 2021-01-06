import React from "react";
import { useParams } from "react-router-dom";
import Coin from "../components/Coin";
import HistoryChart from "../components/HistoryChart";

const CoinDetailPage = () => {
  const { id } = useParams();

  const renderData = () => {
    return (
      <div>
        <HistoryChart />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
