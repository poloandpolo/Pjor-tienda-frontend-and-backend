import { React, useState } from 'react'
import { Header } from '../components/Header'
import './styles/MenPage.scss';
import { NavigationBar } from '../components/NavigationBar';
import { ClothingMenuButton } from '../components/ClothingMenuButton';
import { ClothingBar } from '../components/ClothingBar';

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


  const toggleClothingBar = () => {
    setIsClothingBarOpen(prevState => !prevState);
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
        {isClothingBarOpen && (
          <ClothingBar
            dropdownMenus={dropdownMenus}
            isOpen={isClothingBarOpen}
            toggleClothingBar={toggleClothingBar}
          />
        )}


      </div>
    </div>
  )
}
