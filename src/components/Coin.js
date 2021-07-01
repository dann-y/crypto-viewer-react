import React from "react";
import "./Coin.css";
import { useSelector, useDispatch } from "react-redux";
import { addCoin, removeCoin } from "../actions";

const Coin = ({
  id,
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const watchList = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const watchListHandler = (e) => {
    if (e.defaultPrevented) return; // Exits here if event has been handled
    e.preventDefault();

    if (!watchList.includes(id)) dispatch(addCoin(id));

    if (watchList.includes(id)) dispatch(removeCoin(id));
  };

  return (
    <div className="coin-container mb-5 md:mb-4 lg:mb-3 hover:bg-purple-800 md:mx-6">
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-4 gap-x-4 lg:gap-y-0 coin-row pt-4 pb-10 lg:pb-1 lg:pt-6">
        <div className=" p-4 text-center col-span-2 pl-14 md:pl-0 lg:pl-14 lg:col-span-2 md:col-start-3 md:mb-5 coin">
          <img src={image} alt="crypto" />

          <div>
            <h1>{name}</h1>
          </div>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className=" text-center md:ml-6 md:col-span-1 lg:col-span-2 lg:pl-20 md:col-start-1 coin-price ">
          <p className="coinvalue-title">
            Price <br />
          </p>
          ${parseFloat(price).toFixed(2)}
        </div>
        <div className=" text-center  md:col-span-2 lg:col-span-2 coin-volume">
          <p className="coinvalue-title">
            Volume <br />
          </p>
          ${volume.toLocaleString()}
        </div>
        {priceChange < 0 ? (
          <div className="price-change">
            <div className="coinvalue-title">
              Price Change 24h
              <br />
            </div>
            <p className=" text-center lg:col-span-1 coin-percent red">
              {parseFloat(priceChange).toFixed(3)}%
            </p>
          </div>
        ) : (
          <div className=" text-center md:col-span-1 lg:col-span-1 coin-percent green">
            <p className="coinvalue-title">
              Price Change 24h
              <br />
            </p>
            {parseFloat(priceChange).toFixed(3)}%
          </div>
        )}
        <div className=" text-center md:col-span-2 lg:col-span-2 coin-marketcap">
          <p className="coinvalue-title">
            Market Cap <br />
          </p>
          ${marketcap.toLocaleString()}
        </div>
        <div className="text-center mt-6 lg:pb-2 lg:mt-0 col-span-2 col-start-1  md:col-start-3 lg:col-start-8">
          {!watchList.includes(id) ? (
            <p onClick={watchListHandler} className=" hover:underline green">
              Add to Watch List <br />
            </p>
          ) : (
            <p onClick={watchListHandler} className="hover:underline red">
              Remove from Watch List <br />
            </p>
          )}
        </div>
      </div>
    </div>
  );
  // }
  // else {
  //   return null;
  // }
};

export default Coin;
