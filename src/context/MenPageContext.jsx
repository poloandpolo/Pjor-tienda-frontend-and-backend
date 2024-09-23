import React, { createContext, useContext, useState } from 'react';
import playera_logo_clasica_hombre from '../images/playera_logo_clasica_hombre.jpg';
import playera_logo_clasica_hombre_2 from '../images/playera_logo_clasica_hombre.jpg';
import playera_logo_clasica_mujer from '../images/playera_logo_clasica_mujer.jpg';
import playera_logo_clasica_mujer_2 from '../images/playera_logo_clasica_mujer.jpg';
import black from '../images/Clothing_Colors/Black.jpg';
import white from '../images/Clothing_Colors/white.jpg';

// Crear el contexto
const MenPageContext = createContext();

// Hook para utilizar el contexto
export const useMenPageContext = () => {
    return useContext(MenPageContext);
};

// Proveedor del contexto
export const MenPageContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    // Artículos de ropa para hombres
    const menClothingItems = [
        { id: 1, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 2, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre 2", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 3, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre 3", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 4, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre 4", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 5, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre 5", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 6, images: [playera_logo_clasica_hombre, playera_logo_clasica_hombre_2], text: "Playera logo clásica hombre 6", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 }
    ];

    // Artículos de ropa para mujeres
    const womenClothingItems = [
        { id: 7, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 8, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer 2", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 9, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer 3", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 10, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer 4", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 11, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer 5", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 },
        { id: 12, images: [playera_logo_clasica_mujer, playera_logo_clasica_mujer_2], text: "Playera logo clásica mujer 6", sizes: ['s', 'm', 'l', 'xl', 'xxl'], colors: [black, white], price: 100 }
    ];


    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(cartItem =>
                cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color
            );

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateItemQuantity = (id, size, color, amount) => {
        setCartItems(prevItems => {
            return prevItems.map(item =>
                item.id === id && item.size === size && item.color === color
                    ? { ...item, quantity: item.quantity + amount }
                    : item
            ).filter(item => item.quantity > 0);
        });
    };

    return (
        <MenPageContext.Provider value={{ cartItems, menClothingItems, womenClothingItems, addToCart, updateItemQuantity }}>
            {children}
        </MenPageContext.Provider>
    );
};
