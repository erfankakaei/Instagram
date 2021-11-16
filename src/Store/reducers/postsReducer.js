import {ADD, LIKE, SAVE} from '../actions/actions';

const initialState = {postsArray: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, postsArray: [...state.postsArray, action.payload]};

    case LIKE:
      return {
        ...state,
        postsArray: [
          ...state.postsArray,
          (state.postsArray[payload] = {
            liked: !state.postsArray[payload].liked,
          }),
        ],
      };

    case SAVE:
      return state;

    default:
      return state;
  }
};

export default reducer;
