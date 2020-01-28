import React, { useState } from 'react';
import marvelLogo from './../assets/images/marvel_logo.png';
import './../styles/search.css';
import { connect } from 'react-redux';
import { getHeroesList } from '../redux/hero/heroActions';
import SearchBar from './smart/general/SearchBar';

const Search = props => {
  return (
    <div className='search container center-align'>
      <div className='search__container'>
        <img src={marvelLogo} alt='Marvel Logo' className='search__image'></img>
        <h1 className='font__mont--bold search__title'>HERO FINDER</h1>
        <SearchBar widthProp='700px' push={true} padProp='10px'></SearchBar>
      </div>
      <div className='search__disclaimer font__mont--light'>
        <p>
          This site contains copyrighted material whose use has not always been
          specifically authorized by the copyright owner.
        </p>
        <p>
          Design & Development by
          <a href='https://lucas-castelo.herokuapp.com/'> Lucas Castelo</a>
        </p>
        <p>Data provided by Marvel. © 2020 MARVEL.</p>
      </div>
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    getHeroesList: data => dispatch(getHeroesList(data))
  };
};

export default connect(null, mapDispatch)(Search);
