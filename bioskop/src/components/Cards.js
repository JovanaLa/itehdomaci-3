import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import avatar from '../assets/avatar.png';
import oluja from '../assets/oluja.jpg';
import oto from '../assets/oto.jpg';

function Cards() {

    const movies = [
        {
            name: 'Avatar',
            text: 'Avantura, Akcija',
            src: avatar
        },
        {
            name: 'Oluja',
            text: 'Ratni',
            src: oluja
        },
        {
            name: 'Čovek po imenu Oto',
            text: 'Drama',
            src: oto
        }
    ];  

  return (
    <div className='cards'>
      <h1>Repertoar</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem obj={movies[0]}/>
            <CardItem obj={movies[1]}/>
            <CardItem obj={movies[2]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;