'use client';

import { useState, useEffect, CSSProperties } from 'react';

export interface ProductCardProps {
  id?: string;
  title?: string;
  price?: number;
  rating?: number;
  image?: string;
}

export default function ProductCard({
  id = 'prod-101',
  title = 'Wireless Noise-Canceling Headphones',
  price = 199.99,
  rating = 4.8,
  image = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedTime, setAddedTime] = useState<string>('');
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    const savedWishlist = localStorage.getItem(`wishlist_${id}`);
    if (savedWishlist) {
      try {
        setIsLiked(JSON.parse(savedWishlist));
      } catch {
        // Fallback for unexpected storage values
      }
    }
  }, [id]);

  const toggleWishlist = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    localStorage.setItem(`wishlist_${id}`, JSON.stringify(nextState));
  };

  const handleAddToCart = () => {
    const currentTime = new Date().toLocaleTimeString();
    setAddedTime(currentTime);
  };

  return (
    <div style={styles.card}>
      {/* Visual badge showing client mount status */}
      <div style={styles.badge}>
        {isClient ? '🟢 Client Rendered' : '🔴 Server Rendered'}
      </div>

      <div style={styles.imageContainer}>
        {/* standard <img> requires alt and un-optimized flag when using remote URLs without next.config configuration */}
        <img src={image} alt={title} style={styles.image} />
        <button
          type="button"
          onClick={toggleWishlist}
          style={{
            ...styles.heartButton,
            color: isLiked ? '#ef4444' : '#9ca3af',
          }}
          aria-label="Add to wishlist"
        >
          {isLiked ? '♥' : '♡'}
        </button>
      </div>

      <div style={styles.details}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.rating}>★ {rating} / 5.0</p>
        <p style={styles.price}>${price.toFixed(2)}</p>

        <div style={styles.quantityControls}>
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            style={styles.qtyBtn}
          >
            -
          </button>
          <span style={styles.qtyText}>{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            style={styles.qtyBtn}
          >
            +
          </button>
        </div>

        <button type="button" onClick={handleAddToCart} style={styles.cartButton}>
          Add to Cart (${(price * quantity).toFixed(2)})
        </button>

        {addedTime && (
          <p style={styles.timestamp}>Added to cart at {addedTime}</p>
        )}
      </div>
    </div>
  );
}

// Strictly typed styles object for TypeScript
const styles: Record<string, CSSProperties> = {
  card: {
    width: '320px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif',
    position: 'relative',
    backgroundColor: '#fff',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    fontSize: '11px',
    padding: '4px 8px',
    borderRadius: '12px',
    zIndex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: '#f3f4f6',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  details: {
    padding: '16px',
  },
  title: {
    fontSize: '18px',
    margin: '0 0 8px 0',
    color: '#111827',
  },
  rating: {
    fontSize: '14px',
    color: '#f59e0b',
    margin: '0 0 8px 0',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#059669',
    margin: '0 0 16px 0',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  qtyBtn: {
    width: '28px',
    height: '28px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    fontSize: '16px',
  },
  qtyText: {
    fontSize: '16px',
    fontWeight: '600',
  },
  cartButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  timestamp: {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '0',
  },
};