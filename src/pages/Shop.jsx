import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts } from '../services/fakeStoreService';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  color: #ED6D05;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`;

const ProductItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  .price {
    font-weight: bold;
    color: #ED6D05;
    font-size: 1.2rem;
  }
`;

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <Hero>E-commerce & Add-ons</Hero>
        <Section>
          <SectionTitle>Hotel Shop</SectionTitle>
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <div>Loading products...</div>
          </div>
        </Section>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Hero>E-commerce & Add-ons</Hero>
        <Section>
          <SectionTitle>Hotel Shop</SectionTitle>
          <div style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
            {error}
          </div>
        </Section>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Hero>E-commerce & Add-ons</Hero>
      <Section>
        <SectionTitle>Hotel Shop</SectionTitle>
        <ProductGrid>
          {products.map(product => (
            <ProductItem key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price">{product.price}</div>
            </ProductItem>
          ))}
        </ProductGrid>
      </Section>
    </PageContainer>
  );
}

export default Shop;
