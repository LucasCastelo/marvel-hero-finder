import React from 'react';
import { Row } from 'react-materialize';
import './../../styles/cards.css';
import hero404 from './../../assets/images/hero-profile-404.png';

const HeroesCard = () => {
  return (
    <Row>
      <div className='card__holster col s12' style={{ padding: '0' }}>
        <img
          className='__image img-responsive col l3 s12'
          style={{ padding: '0' }}
          src={hero404}
          alt='Hero X'
        ></img>
        <div className='__details col l6 s12'>
          <p className='font__mont--bold font__size--big'>Hulk</p>
          <p className='font__mont-regular font__size--medium'>
            TEXTO texto texto
          </p>
        </div>
      </div>
    </Row>
  );
};

export default HeroesCard;
