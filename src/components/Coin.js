import React from "react";
import Chart from "chart.js";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container bg-gray-800 rounded-lg mx-5 m-1 hover:bg-purple-700 ">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-4 coin-row pt-8 pb-10 lg:pb-1 lg:pt-6 ">
        <div className=" p-4 text-center col-span-2 pl-14 md:pl-0 lg:pl-14 lg:col-span-2 md:col-start-3 md:mb-5 coin">
          <img src={image} alt="crypto" />

          <div>
            <h1>{name}</h1>
          </div>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <p className=" text-center md:col-span-1 lg:col-span-2 md: lg:pl-20 md:col-start-1 coin-price ">
          <div className="coinvalue-title">
            Price <br />
          </div>
          ${price}
        </p>
        <p className=" text-center  md:col-span-2 lg:col-span-2 coin-volume">
          <div className="coinvalue-title">
            Volume <br />
          </div>
          ${volume.toLocaleString()}
        </p>
        {priceChange < 0 ? (
          <div className="price-change">
            <div className="coinvalue-title">
              Price Change <br />
            </div>
            <p className=" text-center lg:col-span-1 coin-percent red">
              {parseFloat(priceChange).toFixed(2)}%
            </p>
          </div>
        ) : (
          <p className=" text-center md:col-span-1 lg:col-span-1 coin-percent green">
            <div className="coinvalue-title">
              Price Change <br />
            </div>
            {parseFloat(priceChange).toFixed(2)}%
          </p>
        )}
        <p className=" text-center md:col-span-2 lg:col-span-2 coin-marketcap">
          <div className="coinvalue-title">
            Market Cap <br />
          </div>
          ${marketcap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;