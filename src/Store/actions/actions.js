export const ADD = 'ADD';
export const LIKE = 'LIKE';
export const SAVE = 'SAVE';

export const add = payload => {
  return {type: ADD, payload: payload};
};
export const like = payload => {
  return {type: LIKE, payload: payload};
};

export const save = payload => {
  return {type: SAVE, payload: payload};
};
