import React, { useState } from 'react';
import SearchBar from './layout/SearchBar';
import { Row, Container } from 'react-materialize';
import marvel from './../assets/images/marvel_logo.png';
import './../styles/index.css';

const Search = () => {
  const [animCon, setAnimCon] = useState('intro 400ms ease-in');

  return (
    <Container
      className='index__search'
      style={{
        animation: animCon,
        animationIterationCount: '1',
        animationFillMode: 'forwards',
        animationDirection: 'normal'
      }}
    >
      <div className='index__vertical__center'>
        <div>
          <Row style={{ marginBottom: '0' }}>
            <img
              className='col s12 m12 l6 offset-l3 img-responsive'
              src={marvel}
              alt='MARVEL'
            />
          </Row>
          <Row>
            <h1 className='index__app__title font__mont--bold col s12 m12 l6 offset-l3 center-align'>
              HERO FINDER
            </h1>
          </Row>
          <Row>
            <SearchBar
              setAnimCon={setAnimCon}
              matClasses='col s12 m12 l6 offset-l3'
            ></SearchBar>
          </Row>
          <div className='index__disclaimer'>
            <Row>
              <p className='index__disclaimer__elemens col s12 l6 offset-l3 center-align font__mont--light font__size--disclaimer'>
                This site contains copyrighted material whose use has not always
                been specifically authorized by the copyright owner.
              </p>
            </Row>
            <Row>
              <p className='index__disclaimer__elemens col s12 l6 offset-l3 center-align font__mont--light font__size--disclaimer'>
                Data provided by <a href='www.marvel.com'>Marvel</a> © 2020
                MARVEL
              </p>
            </Row>
            <Row>
              <p className='index__disclaimer__elemens col s12 l6 offset-l3 center-align font__mont--light font__size--disclaimer'>
                Design and Development by
                <a href='https://lucas-castelo.herokuapp.com/'>
                  {' '}
                  Lucas Castelo
                </a>
              </p>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
