import React from 'react'
import { Header } from '../components/Header'
import './styles/MenPage.scss';
import { NavigationBar } from '../components/NavigationBar';

export const MenPage = () => {
  return (
    <div className='men-page'>
        <Header/>
        <NavigationBar/>
    </div>
  )
}
