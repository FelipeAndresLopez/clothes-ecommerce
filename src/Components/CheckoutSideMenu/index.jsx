import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';




const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useContext(ShoppingCartContext);

  return isCheckoutSideMenuOpen && (
    <aside className='w-[360px] h-[calc(100vh-68px)] top-20 flex flex-col fixed right-0 bg-white border border-black rounded-lg'>
      <div>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div onClick={() => closeCheckoutSideMenu()}>
            <XMarkIcon className='w-6 h-6 cursor-pointer' />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
