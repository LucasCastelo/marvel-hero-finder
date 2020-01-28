import React from 'react';
import HeroesCardList from './smart/heroes/HeroesCardList';
import TopSearchBar from './layout/general/TopSearchBar';
import './../styles/heroes.css';

const HeroesList = () => {
  return (
    <div className='container heroes'>
      <TopSearchBar></TopSearchBar>
      <HeroesCardList></HeroesCardList>
    </div>
  );
};

export default HeroesList;
