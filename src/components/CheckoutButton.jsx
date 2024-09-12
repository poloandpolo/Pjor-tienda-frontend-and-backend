import React from 'react';
import './styles/CheckOutButton.scss';
import { useMenPageContext } from '../context/MenPageContext'; // Importa el contexto

export const CheckOutButton = () => {
  const { cartItems } = useMenPageContext(); // Accede a los items del carrito desde el contexto

  // Calcula el total sumando el precio de cada item multiplicado por su cantidad
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className='checkout-button__container'>
      <label>Proceder al pago ${totalPrice.toFixed(2)}</label> {/* Muestra el total */}
    </div>
  );
};
 