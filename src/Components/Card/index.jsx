import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { ShoppingCartContext } from '../../Context';

const Card = ({ product }) => {
  const { title, price, images, category } = product
  const {
    productsCount,
    setProductsCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeProductDetail
  } = useContext(ShoppingCartContext);
  const addProductsToCart = (e) => {
    e.stopPropagation();
    setCartProducts([...cartProducts, product])
    setProductsCount(productsCount + 1)
    closeProductDetail()
    openCheckoutSideMenu()
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 rounded-lg'
      onClick={() => {
        openProductDetail()
        setProductToShow(product)
      }}
    >
      <figure className='relative mb-2 w-full'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category?.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={images?.[0]} alt="headphones" onError={(e) => e.target.src = 'https://via.placeholder.com/300'} />



        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={addProductsToCart}
        >
          <PlusIcon
            className='w-6 h-6 text-black'
            onClick={() => {
              setCartProducts([...cartProducts, product])
            }}
          />
        </button>

      </figure>
      <p className='flex justify-between'>
        <span className='text-sm w-3/4 font-light'>{title}</span>
        <span className='text-lg w-1/4 text-right font-medium'>$ {price}</span>
      </p>
    </div>
  );
}

export default Card
