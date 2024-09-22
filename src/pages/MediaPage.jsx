import React from 'react'
import './styles/MediaPage.scss'
import { Header } from '../components/Header'
import { NavigationBar } from '../components/NavigationBar'
import { MediaMainSlider } from '../components/MediaMainSlider'


export const MediaPage = () => {
  return (
    <div className='media-page'>
        <Header/>
        <NavigationBar/>
        <MediaMainSlider/>
    </div>
  )
}
