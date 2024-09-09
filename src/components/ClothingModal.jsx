import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles/ClothingModal.scss'; // Asegúrate de actualizar el nombre del archivo si es necesario
import addToCartIcon from '/bolsa-de-la-compra.png';
import { SizeModal } from './SizeModal';
import { ColorModal } from './ColorModal';
import { useMenPageContext } from '../context/MenPageContext';

export const ClothingModal = ({ isOpen, onClose, data, onWarning, onConfirm }) => {
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useMenPageContext();

  if (!data) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      onWarning(); // Mostrar el modal de advertencia si no se selecciona talla o color
    } else {
      addToCart({
        images: data.images,
        text: data.text,
        id: data.id,
        size: selectedSize,
        color: selectedColor,
        price: data.price
      });
      onConfirm();
    }
  };

  const openSizeModal = () => {
    setIsSizeModalOpen(true);
  };

  const closeSizeModal = () => {
    setIsSizeModalOpen(false);
  };

  const openColorModal = () => {
    setIsColorModalOpen(true);
  };

  const closeColorModal = () => {
    setIsColorModalOpen(false);
  };

  return (
    <div
      className={`clothing-modal__overlay ${isOpen ? 'clothing-modal__overlay--show' : ''}`}
      onClick={onClose}
    >
      <div
        className="clothing-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='clothing-modal__close-wrapper'>
          <button className='clothing-modal__close-button' onClick={onClose}>X</button>
        </div>
        <div className='clothing-modal__slider-container'>
          <Slider {...settings}>
            {data.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`clothing-${index}`} className='clothing-modal__image' />
              </div>
            ))}
          </Slider>
          <div className='clothing-modal__details-label-container'>
            <label className='clothing-modal__details-label-color' onClick={openColorModal}>
              {selectedColor ? (
                <img src={selectedColor} alt="Selected Color" className='clothing-modal__selected-color-thumbnail' />
              ) : (
                'Color'
              )}
            </label>
            <label className='clothing-modal__details-label-size' onClick={openSizeModal}>
              {selectedSize ? selectedSize : 'Talla'}
            </label>
          </div>

          <img
            className='clothing-modal__add-to-cart-icon'
            src={addToCartIcon}
            alt="Add to cart"
            onClick={handleAddToCart}
          />
         

        </div>
        <SizeModal
          isOpen={isSizeModalOpen}
          onClose={closeSizeModal}
          sizes={data.sizes || []}
          onSelectSize={setSelectedSize}
        />
        <ColorModal
          isOpen={isColorModalOpen}
          onClose={closeColorModal}
          colors={data.colors || []}
          onSelectColor={setSelectedColor}
        />
      </div>
    </div>
  );
};
