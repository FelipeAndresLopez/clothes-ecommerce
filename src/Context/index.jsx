import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [productsCount, setProductsCount] = useState(0);

  // Product Detail - Open and Close
  const [isProductDetailOpen, setIsOpenProductDetail] = useState(false);
  const openProductDetail = () => setIsOpenProductDetail(true);
  const closeProductDetail = () => setIsOpenProductDetail(false);


  // CheckoutSideMenu - Open and Close
  const [isCheckoutSideMenuOpen, setIsOpenCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(false);

  // Product Detail  . Show selected product
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);


  return (
    <ShoppingCartContext.Provider value={{
      productsCount,
      setProductsCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setProductToShow,
      productToShow,
      cartProducts,
      setCartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutSideMenuOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}