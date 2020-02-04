import React, { useState } from 'react';
import './../../styles/search__bar.css';
import { getHeroesList } from '../../redux/hero/heroActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const SearchBar = (props, { matClasses = 's12' }) => {
  const [heroName, setHeroName] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = () => {
    const { pathname } = props.location;
    const re = /[a-zA-Z]/;

    console.log(re.test(heroName));

    if (re.test(heroName)) {
      setSubmitError(false);
      props.getHeroesList(heroName);
      if (pathname === '/') {
        props.setAnimCon('outro 200ms ease-out');
        setTimeout(() => {
          props.history.push('/heroes');
        }, 400);
      }
    } else {
      setSubmitError(true);
    }
  };

  return (
    <div
      className={
        (submitError && 'col s12 search__bar--error ') +
        ' search__bar col hoverable ' +
        props.matClasses
      }
    >
      {submitError && (
        <p className='search__error__message font__mont--regular red-text center-align'>
          Wait! You have to put a Initial or the first name of a hero so we can
          find it in the Marvel database.
        </p>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className='row search__bar__form valign-wrapper'
      >
        <input
          className=' col s10 l10 center-align font__size--big font__mont--regular browser-default search__bar__input'
          type='text'
          placeholder='Spider-Man'
          value={heroName}
          onChange={e => {
            setHeroName(e.target.value);
          }}
        ></input>
        <i className='search__bar__icon col s2 l2 fas fa-search font__size--big'></i>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getHeroesList: data => dispatch(getHeroesList(data))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
