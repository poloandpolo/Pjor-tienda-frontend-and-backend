import React from 'react';
import './styles/NavigationBar.scss';
import { useNavigate } from 'react-router-dom';

export const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClickMen = () => {
    navigate('/hombre');
  };

  const handleClickWomen = () => {
    navigate('/mujer');
  };

  const handleClickMedia = () => {
    navigate('/media');
  };


  return (

    <nav className='navigation-bar'>
      <ul className='navigation-bar__list'>
        <li className='navigation-bar__item'><a className='navigation-bar__link' onClick={handleClickMen}>Hombre</a></li>
        <li className='navigation-bar__item'><a className='navigation-bar__link'>Mujer</a></li>
        <li className='navigation-bar__item'><a className='navigation-bar__link'onClick={handleClickMedia}>Media</a></li>
        <li className='navigation-bar__item'><a className='navigation-bar__link'>Crew</a></li>
        <li className='navigation-bar__item'><a className='navigation-bar__link'>Vision</a></li>
      </ul>
    </nav>
  );
}
