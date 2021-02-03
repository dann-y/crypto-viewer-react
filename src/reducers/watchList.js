const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COIN":
      return [...state, action.payload];
    case "REMOVE_COIN":
      return state.filter((coin) => {
        return coin !== action.payload;
      });
    default:
      return state;
  }
};

export default watchListReducer;
