import { useState, useEffect } from 'react';

import Card from '../../Components/Card'
import Layout from "../../Components/Layout"
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [])

  return (
    <Layout >
      Home
      <section className='grid grid-cols-4 w-full gap-4 max-w-screen-lg'>
        {
          products?.map((product) => (
            <Card key={product.id} product={product} />
          ))
        }
      </section>
      <ProductDetail />
    </Layout>
  )
}

export default Home
