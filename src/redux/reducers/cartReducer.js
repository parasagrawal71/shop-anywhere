import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_FOR_LATER,
  MOVE_TO_CART,
  REMOVE_SAVE_FOR_LATER,
  UPDATE_PRODUCT_COUNT,
} from "../actions/types";

const INITIAL_STATE = {
  myCart: [
    {
      link: "https://m.media-amazon.com/images/I/61I1WpwcBqL._AC_UL320_.jpg",
      brand: "Peter England",
      title: "Men's Slim fit T-Shirt",
      actualPrice: 1574,
      offerPrice: 1374,
      deliveryFee: 50,
      category: "accessories-backpacks",
      itemCount: 1,
    },
    {
      link: "https://m.media-amazon.com/images/I/61+MlcjLruL._AC_UL320_.jpg",
      brand: "Peter England",
      title: "Men's Solid Slim fit T-Shirt",
      actualPrice: 2170,
      offerPrice: 1452,
      deliveryFee: 100,
      category: "accessories-backpacks",
      itemCount: 1,
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
        myCart: [...state.myCart.filter((ele) => ele.link !== action.payload.link)],
      };

    case SAVE_FOR_LATER:
      return {
        ...state,
        saveLater: [...state.saveLater, action.payload],
        myCart: [...state.myCart.filter((ele) => ele.link !== action.payload.link)],
      };

    case MOVE_TO_CART:
      return {
        ...state,
        saveLater: [...state.saveLater.filter((ele) => ele.link !== action.payload.link)],
        myCart: [...state.myCart, action.payload],
      };

    case REMOVE_SAVE_FOR_LATER:
      return {
        ...state,
        saveLater: [...state.saveLater.filter((ele) => ele.link !== action.payload.link)],
      };

    case UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        myCart: [
          ...state.myCart.map((ele) => {
            if (ele.link === action.payload.link) {
              return action.payload;
            }
            return ele;
          }),
        ],
      };

    default:
      return state;
  }
};
