import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';




const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);
  return isProductDetailOpen && (
    <aside className='w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 bg-white border border-black rounded-lg'>
      <div>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div onClick={() => closeProductDetail()}>
            <XMarkIcon className='w-6 h-6 cursor-pointer' />
          </div>
        </div>

        <figure className='px-6'>
          <img
            className='w-full h-full rounded-lg'
            src={productToShow.images?.[0]} alt="headphones"
            onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>
            ${productToShow.price}
          </span>
          <span className='font-medium text-sm'>
            {productToShow.title}
          </span>
          <span className='font-light text-md text-justify'>
            {productToShow.description}
          </span>
        </p>

      </div>
    </aside>
  );
}

export default ProductDetail;
