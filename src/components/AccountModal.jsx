import React from 'react';
import './styles/AccountModal.scss';

export const AccountModal = ({ isVisible, onClose}) => {
    return (
        <div className={`account-modal__overlay ${isVisible ? 'show' : ''}`}>
            <div className='account-modal__content'>
                <div className='account-modal__close-wrapper'>
                    <button className='account-modal__close-button' onClick={onClose}>X</button>
                </div>
                <div className='account-modal__title'>
                    <h2>Entra a tu cuenta</h2>
                </div>
                <div className='account-modal__input-wrapper'>
                    <input placeholder='Email' type='email'></input>
                    <input placeholder='Contraseña' type='password'></input>
                    <button>Entrar</button>
                    <label>¿Olvidaste contraseña?</label>
                    <label>Aún no tengo cuenta</label>
                </div>
            </div>
        </div>
    );
};
