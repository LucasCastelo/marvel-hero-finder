import React, { useState } from 'react';
import { Container, Row } from 'react-materialize';
import SearchBar from './SearchBar';
import marvel from '../../assets/images/marvel_logo.png';
import './../../styles/top__search.css';
import { withRouter } from 'react-router';

const TopSearch = props => {
  const [outro, setOutro] = useState(false);

  const outroCss = 'outro_search 200ms ease-in';
  const introCss = 'intro_search 600ms ease-in';
  const handleOutro = () => {
    setOutro(true);
    setTimeout(() => {
      props.history.push('/');
    }, 400);
  };

  return (
    <Container
      className='top__search'
      style={{
        animation: outro ? outroCss : introCss,
        animationFillMode: 'forwards',
        animationIterationCounter: '1'
      }}
    >
      <Row className='valign-wrapper' style={{ paddingTop: '10px' }}>
        <img
          className='img-responsive col l2 hide-on-med-and-down top__search__image'
          alt='Marvel'
          src={marvel}
          onClick={handleOutro}
        ></img>
        <SearchBar
          matClasses={' col offset-l4 l6 offset-m1 m10 s12'}
        ></SearchBar>
      </Row>
    </Container>
  );
};

export default withRouter(TopSearch);
