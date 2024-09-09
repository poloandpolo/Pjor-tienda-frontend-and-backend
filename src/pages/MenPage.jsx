import React, { useState } from 'react';
import { Header } from '../components/Header';
import './styles/MenPage.scss';
import { NavigationBar } from '../components/NavigationBar';
import { ClothingMenuButton } from '../components/ClothingMenuButton';
import { ShoppingCartButton } from '../components/ShoppingCartButton';
import { ClothingBar } from '../components/ClothingBar';
import { ClothingGallery } from '../components/ClothingGallery';
import { useMenPageContext } from '../context/MenPageContext';
import { ShoppingCart } from '../components/ShoppingCart';

const dropdownMenus = [
  {
    title: "Gorras",
    emoji: "🧢",
    items: ["Beisbol", "Snapback", "5 Paneles"]
  },
  {
    title: "Prendas superiores",
    emoji: "👕",
    items: ["Playeras", "Polos", "Camisas", "Hoodies", "Chamarras"]
  },
  {
    title: "Prendas inferiores",
    emoji: "👖",
    items: ["Jogger", "Jeans", "Calcetas"]
  },
  {
    title: "Accesorios",
    emoji: "🧦",
    items: ["Cinturones", "Calcetas"]
  },
  {
    title: "Joyeria",
    emoji: "💍",
    items: ["Collares", "Pulseras", "Brazaletes", "Cadenas", "Dijes"]
  }
];

export const MenPage = () => {
  const [isClothingBarOpen, setIsClothingBarOpen] = useState(false);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false); // Inicializar como false

  const { clothingItems } = useMenPageContext();

  const toggleClothingBar = () => {
    setIsClothingBarOpen(prevState => !prevState);
  };

  const openShoppingCart = () => {
    setShoppingCartIsOpen(true);
  };

  const closeShoppingCart = () => {
    setShoppingCartIsOpen(false);
  };

  return (
    <div className='men-page'>
      <Header />
      <NavigationBar />
      <div className='men-page__clothing-section'>
        {!isClothingBarOpen && (
          <ClothingMenuButton
            toggleClothingBar={toggleClothingBar}
            isOpen={isClothingBarOpen}
          />
        )}
        <ShoppingCartButton
          onClick={openShoppingCart}
          isOpen={isClothingBarOpen}
        />
        <ShoppingCart
          isOpen={shoppingCartIsOpen}
          onClose={closeShoppingCart}
        />
        {isClothingBarOpen && (
          <ClothingBar
            dropdownMenus={dropdownMenus}
            isOpen={isClothingBarOpen}
            toggleClothingBar={toggleClothingBar}
          />
        )}
        <ClothingGallery
          items={clothingItems}
          isClothingBarOpen={isClothingBarOpen}
        />
      </div>
    </div>
  );
};
