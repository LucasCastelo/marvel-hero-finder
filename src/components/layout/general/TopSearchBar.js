import React from 'react';
import logo from './../../../assets/images/marvel_logo.png';
import SearchBar from '../../smart/general/SearchBar';
import { Link } from 'react-router-dom';

const TopSearchBar = () => {
  return (
    <div className='container heroes'>
      <div className='heroes__search'>
        <Link to='/'>
          <img className='heroes__search__img' src={logo}></img>
        </Link>
        <SearchBar widthProp='500px' push={false} padProp='2px'></SearchBar>
      </div>
      <span className='heroes__separator'></span>
    </div>
  );
};

export default TopSearchBar;
