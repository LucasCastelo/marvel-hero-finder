import {
  SET_HEROES_LIST,
  SET_HERO,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE
} from './heroTypes';
import Axios from 'axios';
import md5 from 'md5';
import privApi from './../../key';

const ts = new Date().getTime();
const apiKey = '31d890e05fa50da9d644820877a62900';

//SET THE HEROES LIST TO SHOW TO THE USER

export const setHeroesList = data => {
  return {
    type: SET_HEROES_LIST,
    payload: data
  };
};

//GET THE HEROES LIST AND CALLS setHeroesList(response)
export const getHeroesList = (data = 'hulk') => {
  return async dispatch => {
    dispatch(setLoadingTrue());
    await Axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${data}&limit=20&ts=${ts}&apikey=${apiKey}&hash=${md5(
        ts + privApi + apiKey
      )}`
    )
      .then(res => {
        dispatch(setHeroesList(res.data.data.results));
        dispatch(setLoadingFalse());
      })
      .catch(err => {
        dispatch(setLoadingFalse());
      });
  };
};

//SET HERO STATE TO SHOW TO THE USER
export const setHero = data => {
  return {
    type: SET_HERO,
    payload: data
  };
};

//GET SINGLE HERO BY ID AND CALLS setHero(response)
export const getHero = data => {
  return dispatch => {
    dispatch(setLoadingTrue());
    Axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${data}?limit=20&ts=${ts}&apikey=${apiKey}&hash=${md5(
        ts + privApi + apiKey
      )}`
    )
      .then(res => {
        dispatch(setHero(res.data.data.results));
        dispatch(setLoadingFalse());
      })
      .catch(err => {
        dispatch(setLoadingFalse());
      });
  };
};

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE
  };
};
export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE
  };
};
