import {
  SET_HERO,
  SET_HEROES_LIST,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE
} from './heroTypes';

const heroesState = {
  heroesList: [],
  hero: {},
  isLoading: false
};

const heroesReducer = (state = heroesState, action) => {
  switch (action.type) {
    case SET_HERO:
      return { ...state, hero: action.payload };

    case SET_HEROES_LIST:
      return { ...state, heroesList: action.payload };
      break;
    case SET_LOADING_TRUE:
      return { ...state, isLoading: true };
      break;
    case SET_LOADING_FALSE:
      return { ...state, isLoading: false };
      break;
    default:
      return { state };
  }
};

export default heroesReducer;
