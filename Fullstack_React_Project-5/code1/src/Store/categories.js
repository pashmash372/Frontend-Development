export function loadCategories() {
  return (dispatch) => {
    dispatch({ type: "LOAD_CATEGORIES_START" });
    fetch("https://run.mocky.io/v3/091681d7-5a01-47f4-b320-519e70aec7b2")
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
      });
  };
}

function categoriesReducer(
  state = {
    isLoading: true,
    categories: []
  },
  action
) {
  switch (action.type) {
    case "LOAD_CATEGORIES_START": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        isLoading: false,
        categories: action.payload
      };
    }
    default:
      return state;
  }
}

export default categoriesReducer;
