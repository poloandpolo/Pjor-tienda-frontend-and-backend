import React from 'react'
import { Header } from './Header'
import './styles/Footer.scss'
import Facebook from '/facebook_icon.png'
import Instagram from '/instagram_icon.png'
import Youtube from '/youtube_icon.png'
import Tiktok from '/tiktok_icon.png'

export const Footer = () => {
    return (
        <div className='Footer'>
            <Header />
            <div className='Footer__content-wrapper'>
                <div className='Footer__icons-wrapper'>
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Tiktok} alt="" />
                </div>
                <div className='Footer__contact-wrapper'>
                    <h2>Contacto</h2>
                    <p>agustin.condado01@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
