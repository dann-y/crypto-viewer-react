import React from "react";
import "./CoinHeader.css";

const CoinHeader = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  //jerryrigged way to fix receiving undefined values
  //likely that component is trying to render before api data is received

  if (image && name && symbol && price && volume && priceChange && marketcap) {
    return (
      <div className="coin-container bg-gray-800 rounded-lg mx-5 m-1 ">
        <div className="grid grid-cols-2 md:grid-cols-6  gap-4 coin-row pt-8 pb-10  ">
          <div className=" p-4 text-center col-span-2 pl-14 md:pl-0 md:col-start-3 md:mb-5 coin">
            <img src={image} alt="crypto" />

            <div>
              <h1>{name}</h1>
            </div>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <p className=" text-center md:col-span-1  md: lg:pl-20 md:col-start-1 coin-price ">
            <div className="coinvalue-title">
              Price <br />
            </div>
            ${price}
          </p>
          <p className=" text-center  md:col-span-2  coin-volume">
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
              <p className=" text-center  coin-percent red">
                {parseFloat(priceChange).toFixed(2)}%
              </p>
            </div>
          ) : (
            <p className=" text-center md:col-span-1  coin-percent green">
              <div className="coinvalue-title">
                Price Change <br />
              </div>
              {parseFloat(priceChange).toFixed(2)}%
            </p>
          )}
          <p className=" text-center md:col-span-2  coin-marketcap">
            <div className="coinvalue-title">
              Market Cap <br />
            </div>
            ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinHeader;
