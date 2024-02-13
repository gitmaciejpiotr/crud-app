//selectors
export const getAllCategories = (state) => {
  return state.categories;
}

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;