import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_FOR_LATER,
} from "../actions/types";

const INITIAL_STATE = {
  myCart: [
    {
      link: "https://m.media-amazon.com/images/I/61I1WpwcBqL._AC_UL320_.jpg",
      brand: "Peter England",
      title: "Men's Slim fit T-Shirt",
      actualPrice: 1574,
      offerPrice: 1374,
      category: "accessories-backpacks",
    },
    {
      link: "https://m.media-amazon.com/images/I/61+MlcjLruL._AC_UL320_.jpg",
      brand: "Peter England",
      title: "Men's Solid Slim fit T-Shirt",
      actualPrice: 2170,
      offerPrice: 1452,
      category: "accessories-backpacks",
    },
  ],
  saveLater: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, myCart: [...state.myCart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        myCart: [
          ...state.myCart.filter((ele) => ele.link !== action.payload.link),
        ],
      };
    case SAVE_FOR_LATER:
      return {
        ...state,
        saveLater: [...state.saveLater, action.payload],
        myCart: [
          ...state.myCart.filter((ele) => ele.link !== action.payload.link),
        ],
      };
    default:
      return state;
  }
};
