import React from 'react';
import './../../../styles/search__bar.css';

const SearchBar = ({ matClasses = '' }) => {
  return (
    <div className={'search__bar ' + matClasses}>
      <input className='search__bar__input' type='text'></input>
      <i></i>
    </div>
  );
};

export default SearchBar;
