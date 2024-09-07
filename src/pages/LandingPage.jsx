import React from 'react';
import men from '../images/men.jpg';
import women from '../images/women.jpg';
import { LandingPageHeader } from '../components/LandingPageHeader';
import './styles/LandingPage.scss';
import { LandingPageGenderImage } from '../components/LandingPageGenderImage';
import { LandingPageButton } from '../components/LandingPageButton';

export const LandingPage = () => {

  return (
    <div className='landing-page'>
      <LandingPageHeader />
      <div className='landing-page__cards-container'>
        <LandingPageGenderImage imagen={men} />
        <LandingPageGenderImage imagen={women} />
      </div>
      <div className='landing-page__buttons-container'>
        <LandingPageButton text={"Hombre"} />
        <LandingPageButton text={"Mujer"} />
        <LandingPageButton text={"Media"}/>
        <LandingPageButton text={"Crew "}/>
        <LandingPageButton text={"Vision"}/>
      </div>
    </div>
  );
};
