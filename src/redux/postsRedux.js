import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getSelectedPost = ({ posts }, postId) => posts.filter(post => post.id === postId);
export const getPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const DELETE_POST = createActionName('DELETE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const addPost = payload => ({ type: ADD_POST, payload });
export const deletePost = payload => ({ type: DELETE_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload }];
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload.id);
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;