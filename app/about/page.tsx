// app/page.tsx
import Header from '../components/Header';
import  ProductCard from '../components/ProductCard';

export default function page() {
  return (
    <div style={styles.pageWrapper}>
      {/* 1. Server-Side Rendered Header */}
      <Header />

      <main style={styles.mainContent}>
        <div style={styles.intro}>
          <h2>SSR + CSR Hybrid Page</h2>
          <p>
            The <strong>Header</strong> above was rendered entirely on the server. 
            The <strong>ProductCard</strong> below hydrates and runs client-side interactivity.
          </p>
        </div>

        <section style={styles.grid}>
          {/* 2. Client-Side Rendered Interactive Product Cards */}
          <ProductCard
            id="prod-101"
            title="Wireless Noise-Canceling Headphones"
            price={199.99}
            rating={4.8}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
          />

          <ProductCard
            id="prod-102"
            title="Smart Fitness Watch"
            price={249.50}
            rating={4.6}
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
          />
        </section>
      </main>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'sans-serif',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  intro: {
    marginBottom: '2rem',
    color: '#334155',
  },
  grid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap' as const,
  },
};