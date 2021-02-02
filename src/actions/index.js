export const addCoin = (coin) => {
  return {
    type: "ADD_COIN",
    payload: coin,
  };
};

export const removeCoin = (coin) => {
  return {
    type: "REMOVE_COIN",
    payload: coin,
  };
};
