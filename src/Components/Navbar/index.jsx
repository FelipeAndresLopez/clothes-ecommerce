import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { productsCount } = useContext(ShoppingCartContext);
  const activeStyle = ({ isActive }) => {
    return isActive ? 'underline underline-offset-4' : undefined
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex flex-items-center gap-3'>
        <li className='font-bold text-lg'>
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/all' className={activeStyle}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={activeStyle}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={activeStyle}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furniture' className={activeStyle}>
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={activeStyle}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={activeStyle}>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex flex-items-center gap-3'>
        <li className='text-black/60'>
          feli@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='w-6 h-6' />
          <p>{productsCount}</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
