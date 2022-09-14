import * as Type from "./type";

const initialState = {
  isLogin: false,
  // token: ''
  newrecipe: {},
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_ISLOGIN:
      return { ...state,  isLogin: payload };

    // case Type.SET_TOKEN:
    //   return { ...state,  token: payload };

    case Type.SET_NEWRECIPE:
      return { ...state, newrecipe: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";