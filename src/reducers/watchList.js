const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COIN":
      return [...state, action.payload.toLowerCase()];
    case "REMOVE_COIN":
      return state.filter((coin) => {
        return coin !== action.payload.toLowerCase();
      });
    default:
      return state;
  }
};

export default watchListReducer;
