import ActionType from "../Constant/ActionType";

const initialState = {
  data: [],
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.ADD_DATA: {
      return {
        ...state,
        error: state.data.find((c) => c.productName === payload.productName)
          ? "This product name already exists"
          : null,
        data: state.data.find((c) => c.productName === payload.productName)
          ? [...state.data]
          : [...state.data, payload],
      };
    }
    default: {
      return state;
    }
  }
}
