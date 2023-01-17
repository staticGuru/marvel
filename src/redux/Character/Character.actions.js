import { CHARECTERLIST, OFFSET, SAVEDCHARECTERLIST, SEARCHCHARECTER } from "./Character.type";

export const getCharectersList = (payload) => {
  return {
    type: CHARECTERLIST,
    payload
  };
};
export const setSearchLetter=(payload) => {
  return {
    type:SEARCHCHARECTER,
    payload
  }
};
export const setOffset=(payload) => {
  return {
    type:OFFSET,
    payload
  }
}

export const getSavedCharectersList=(payload) => {
  return {
    type:SAVEDCHARECTERLIST,
    payload
  }
}
