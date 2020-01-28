import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getHeroesList } from '../../../redux/hero/heroActions';
import { withRouter } from 'react-router-dom';

const SearchBar = props => {
  const [heroName, setHeroName] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = () => {
    const re = /([a-zA-Z])/;
    console.log(props);
    if (heroName === '' || re.test(heroName) === false) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);
      props.getHeroesList(heroName);
      if (props.push) {
        setHeroName('');
        props.history.push('/heroes');
      }
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type='text'
        className={
          'validate search__input font__mont--regular ' +
          (submitError ? ' search__input--failed' : 'search__input--success')
        }
        placeholder='Hulk'
        onChange={e => {
          setHeroName(e.target.value);
        }}
        value={heroName}
        style={{ width: props.widthProp, padding: props.padProp }}
      ></input>
      <i className='fas fa-search search__input__icon'></i>
      {submitError ? (
        <p className='font__mont--light red-text search__input__warning'>
          Wait! You have to put a initial or a name of a hero. =/
        </p>
      ) : (
        ''
      )}
    </form>
  );
};

const mapDispatch = dispatch => {
  return {
    getHeroesList: data => dispatch(getHeroesList(data))
  };
};

export default withRouter(connect(null, mapDispatch)(SearchBar));
