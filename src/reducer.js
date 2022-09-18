export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after developing, change the value of token to null
  // token:
  //   "BQB0JvUMUKFrepAE6bN1Gk-UxrTFr2PtWt9yPSyp74uklg1-S_yJY6So39_-PCpi7qIr_zWKAfC2oA4t-877GqgWdWCafqCjoulzbQN4JF7iyXwbaiz1D9ZTvTxM9HN3qzkkB9GO9OpVHpAl6Jgb5uDvNO-9WnjIS8whlkl5WWM1MEMFSz6MMfEddFTKbHR9QQ",

  token: null,
};

const reducer = (state, action) => {
  console.log("this is action", action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
