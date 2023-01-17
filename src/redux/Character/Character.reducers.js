import {
  ADDCHARECTER,
  ADDORREMOVECHARECTER,
  CHARECTERLIST,
  OFFSET,
  REMOVECHARECTER,
  SEARCHCHARECTER,
} from "./Character.type";

const INITIAL_STATE = {
  charecter_list: [],
  saved_charecter_list: [],
  offset: 0,
  search_charecter: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFSET:
      return {
        ...state,
        offset: action.payload,
      };

    case SEARCHCHARECTER:
      return {
        ...state,
        search_charecter: action.payload,
      };
    case ADDORREMOVECHARECTER:
      //write the the append actions here
      if(state.saved_charecter_list?.some(char=>action.payload.id ===char.id)){
        return {
          ...state,
          saved_charecter_list: state?.saved_charecter_list?.filter(charecter=>charecter?.id !==action.payload?.id)
        };
      }else{
        return {
          ...state,
          saved_charecter_list: [action.payload,...state?.saved_charecter_list],
        };
      }
     
    case REMOVECHARECTER:
      //write the the remove actions here

      return {
        ...state,
        searchVehicle: action.payload,
      };
    case CHARECTERLIST:
      return {
        ...state,
        charecter_list: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
