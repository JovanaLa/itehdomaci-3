import React from 'react';
import '../App.css';
import './HomeSection.css';
import Cards from './Cards';

function HomeSection() {
  return (
    <>
    <div className='home-container'>
      <image src='../assets/bioskop.png'/>
      <h1>Bioskop</h1>
      <p>Rezerviši svoja mesta</p>
    </div>
    <div className='main-text'>
    <h1>O nama</h1>
    <h3>Pored redovnog filmskog repertoara, u Cineplexx-u se organizuju svečane premijere domaćih filmova, kao i festivali FEST, Cinema City, Cinemania i Kids Fest. Važan segment naše ponude čine i mogućnost kupovine koncesija (kokice, naćosi i razna bezalkoholna pića) koje publika može da konzumira tokom trajanja projekcije.</h3>
  
      <p>
      Pronađite najbliži bioskop.
      </p>
    </div>
    <div className='movies'>
      <Cards></Cards>
    </div>
    </>
  );
}

export default HomeSection;