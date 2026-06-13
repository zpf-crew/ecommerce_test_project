import { Category, Product, Coupon, Review, Testimonial } from '../types'

export const categories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400' },
  { id: '2', name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400' },
  { id: '3', name: 'Home', slug: 'home', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400' },
  { id: '4', name: 'Sports', slug: 'sports', image: 'https://images.unsplash.com/photo-1461896836934- voices-of-nature?w=400' },
  { id: '5', name: 'Beauty', slug: 'beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400' },
]

export const coupons: Coupon[] = [
  { code: 'SAVE10', type: 'percentage', value: 10, description: 'Save 10% on your order' },
  { code: 'FREESHIP', type: 'shipping', value: 100, description: 'Free shipping on your order' },
]

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, comment: 'Great products and fast shipping! Will definitely shop here again.', location: 'New York, USA' },
  { id: '2', name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=2', rating: 5, comment: 'Excellent customer service and quality products. Highly recommended!', location: 'San Francisco, USA' },
  { id: '3', name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4, comment: 'Good shopping experience. Products matched the description.', location: 'London, UK' },
  { id: '4', name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=4', rating: 5, comment: 'Amazing deals and variety. Found exactly what I was looking for!', location: 'Seoul, Korea' },
  { id: '5', name: 'Lisa Anderson', avatar: 'https://i.pravatar.cc/150?img=5', rating: 5, comment: 'Best online shopping experience. Quick delivery and packaged well.', location: 'Sydney, Australia' },
]

const productImages = {
  electronics: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
  ],
  fashion: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
  ],
  home: [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400',
  ],
  sports: [
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
  ],
  beauty: [
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400',
  ],
}

export const products: Product[] = [
  // Electronics - 6 products
  { id: '1', slug: 'wireless-headphones-pro', name: 'Wireless Headphones Pro', category: 'Electronics', price: 149.99, compareAtPrice: 199.99, rating: 4.8, reviewCount: 1240, images: productImages.electronics, description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.', variants: { colors: ['Black', 'White', 'Silver'], sizes: [] }, stock: 50, isFeatured: true, createdAt: '2024-01-15' },
  { id: '2', slug: 'smart-watch-series-x', name: 'Smart Watch Series X', category: 'Electronics', price: 299.99, compareAtPrice: 399.99, rating: 4.6, reviewCount: 890, images: productImages.electronics, description: 'Advanced smartwatch with health monitoring, GPS tracking, and water resistance. Stay connected and fit!', variants: { colors: ['Black', 'Gold', 'Silver'], sizes: ['40mm', '44mm'] }, stock: 35, isFeatured: true, createdAt: '2024-02-20' },
  { id: '3', slug: 'portable-speaker-bluetooth', name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 79.99, compareAtPrice: 99.99, rating: 4.5, reviewCount: 2100, images: productImages.electronics, description: 'Compact and powerful Bluetooth speaker with 20-hour battery life. Perfect for outdoor adventures.', variants: { colors: ['Black', 'Blue', 'Red'], sizes: [] }, stock: 100, isFeatured: false, createdAt: '2024-03-10' },
  { id: '4', slug: 'tablet-pro-12-inch', name: 'Tablet Pro 12 inch', category: 'Electronics', price: 599.99, compareAtPrice: 749.99, rating: 4.7, reviewCount: 560, images: productImages.electronics, description: 'Powerful tablet with stunning display, perfect for work and entertainment. Includes stylus support.', variants: { colors: ['Space Gray', 'Silver'], sizes: ['128GB', '256GB', '512GB'] }, stock: 25, isFeatured: true, createdAt: '2024-04-05' },
  { id: '5', slug: 'wireless-earbuds-true', name: 'True Wireless Earbuds', category: 'Electronics', price: 129.99, compareAtPrice: 179.99, rating: 4.4, reviewCount: 3200, images: productImages.electronics, description: 'Premium true wireless earbuds with active noise cancellation and premium sound quality.', variants: { colors: ['Black', 'White'], sizes: [] }, stock: 80, isFeatured: false, createdAt: '2024-05-12' },
  { id: '6', slug: 'gaming-mouse-rgb', name: 'Gaming Mouse RGB', category: 'Electronics', price: 59.99, compareAtPrice: 79.99, rating: 4.3, reviewCount: 1800, images: productImages.electronics, description: 'Professional gaming mouse with customizable RGB lighting and programmable buttons.', variants: { colors: ['Black'], sizes: [] }, stock: 150, isFeatured: false, createdAt: '2024-06-01' },

  // Fashion - 6 products
  { id: '7', slug: 'classic-leather-jacket', name: 'Classic Leather Jacket', category: 'Fashion', price: 249.99, compareAtPrice: 349.99, rating: 4.9, reviewCount: 320, images: productImages.fashion, description: 'Premium genuine leather jacket with modern fit. Timeless style that never goes out of fashion.', variants: { colors: ['Black', 'Brown'], sizes: ['S', 'M', 'L', 'XL'] }, stock: 20, isFeatured: true, createdAt: '2024-01-20' },
  { id: '8', slug: 'designer-sunglasses', name: 'Designer Sunglasses', category: 'Fashion', price: 159.99, compareAtPrice: 199.99, rating: 4.6, reviewCount: 890, images: productImages.fashion, description: 'Stylish designer sunglasses with UV400 protection. Perfect for sunny days.', variants: { colors: ['Black', 'Gold', 'Silver'], sizes: [] }, stock: 60, isFeatured: false, createdAt: '2024-02-15' },
  { id: '9', slug: 'canvas-sneakers-premium', name: 'Premium Canvas Sneakers', category: 'Fashion', price: 89.99, compareAtPrice: 119.99, rating: 4.4, reviewCount: 1500, images: productImages.fashion, description: 'Comfortable canvas sneakers with cushioned insole. Perfect for everyday wear.', variants: { colors: ['White', 'Black', 'Navy'], sizes: ['7', '8', '9', '10', '11'] }, stock: 90, isFeatured: false, createdAt: '2024-03-25' },
  { id: '10', slug: 'wool-winter-coat', name: 'Wool Winter Coat', category: 'Fashion', price: 199.99, compareAtPrice: 279.99, rating: 4.7, reviewCount: 450, images: productImages.fashion, description: 'Warm and stylish wool blend coat. Perfect for cold weather.', variants: { colors: ['Camel', 'Black', 'Gray'], sizes: ['S', 'M', 'L', 'XL'] }, stock: 30, isFeatured: true, createdAt: '2024-04-10' },
  { id: '11', slug: 'leather-belt-premium', name: 'Premium Leather Belt', category: 'Fashion', price: 49.99, compareAtPrice: 69.99, rating: 4.5, reviewCount: 2200, images: productImages.fashion, description: 'Genuine leather belt with classic buckle. Durable and stylish.', variants: { colors: ['Black', 'Brown'], sizes: ['S', 'M', 'L', 'XL'] }, stock: 200, isFeatured: false, createdAt: '2024-05-01' },
  { id: '12', slug: 'silk-scarf-luxury', name: 'Luxury Silk Scarf', category: 'Fashion', price: 79.99, compareAtPrice: 99.99, rating: 4.8, reviewCount: 680, images: productImages.fashion, description: '100% pure silk scarf with elegant patterns. Perfect for any outfit.', variants: { colors: ['Red', 'Blue', 'Pink'], sizes: [] }, stock: 45, isFeatured: false, createdAt: '2024-06-05' },

  // Home - 6 products
  { id: '13', slug: 'modern-sofa-set', name: 'Modern Sofa Set', category: 'Home', price: 899.99, compareAtPrice: 1199.99, rating: 4.6, reviewCount: 280, images: productImages.home, description: 'Elegant modern 3-seater sofa with premium fabric. Adds sophistication to any living room.', variants: { colors: ['Gray', 'Beige', 'Navy'], sizes: [] }, stock: 15, isFeatured: true, createdAt: '2024-01-25' },
  { id: '14', slug: 'wooden-dining-table', name: 'Wooden Dining Table', category: 'Home', price: 449.99, compareAtPrice: 599.99, rating: 4.7, reviewCount: 420, images: productImages.home, description: 'Solid oak dining table seats 6. Perfect for family gatherings.', variants: { colors: ['Oak', 'Walnut'], sizes: [] }, stock: 10, isFeatured: false, createdAt: '2024-02-28' },
  { id: '15', slug: 'desk-lamp-led', name: 'LED Desk Lamp', category: 'Home', price: 39.99, compareAtPrice: 59.99, rating: 4.3, reviewCount: 1100, images: productImages.home, description: 'Adjustable LED desk lamp with touch control. Perfect for work and study.', variants: { colors: ['Black', 'White', 'Silver'], sizes: [] }, stock: 120, isFeatured: false, createdAt: '2024-03-15' },
  { id: '16', slug: 'area-rug-modern', name: 'Modern Area Rug', category: 'Home', price: 179.99, compareAtPrice: 229.99, rating: 4.5, reviewCount: 780, images: productImages.home, description: 'Stylish modern area rug with soft fibers. Adds warmth to any room.', variants: { colors: ['Gray', 'Blue', 'Beige'], sizes: ['5x7', '8x10', '9x12'] }, stock: 25, isFeatured: true, createdAt: '2024-04-20' },
  { id: '17', slug: 'wall-clock-silent', name: 'Silent Wall Clock', category: 'Home', price: 34.99, compareAtPrice: 49.99, rating: 4.4, reviewCount: 950, images: productImages.home, description: 'Modern silent wall clock with quartz movement. No ticking sound.', variants: { colors: ['Black', 'White', 'Wood'], sizes: ['10 inch', '12 inch'] }, stock: 80, isFeatured: false, createdAt: '2024-05-10' },
  { id: '18', slug: 'throw-pillow-set', name: 'Throw Pillow Set', category: 'Home', price: 44.99, compareAtPrice: 59.99, rating: 4.2, reviewCount: 1350, images: productImages.home, description: 'Set of 4 decorative throw pillows. Soft and comfortable.', variants: { colors: ['Gray', 'Blue', 'Red'], sizes: [] }, stock: 100, isFeatured: false, createdAt: '2024-06-08' },

  // Sports - 6 products
  { id: '19', slug: 'yoga-mat-premium', name: 'Premium Yoga Mat', category: 'Sports', price: 49.99, compareAtPrice: 69.99, rating: 4.7, reviewCount: 1680, images: productImages.sports, description: 'Non-slip yoga mat with alignment lines. Eco-friendly material.', variants: { colors: ['Purple', 'Blue', 'Pink', 'Green'], sizes: ['3mm', '5mm', '6mm'] }, stock: 150, isFeatured: false, createdAt: '2024-01-30' },
  { id: '20', slug: 'fitness-tracker-band', name: 'Fitness Tracker Band', category: 'Sports', price: 79.99, compareAtPrice: 99.99, rating: 4.5, reviewCount: 2400, images: productImages.sports, description: 'Water-resistant fitness tracker with heart rate monitor and sleep tracking.', variants: { colors: ['Black', 'Blue', 'Pink'], sizes: [] }, stock: 200, isFeatured: true, createdAt: '2024-02-25' },
  { id: '21', slug: 'adjustable-dumbbells', name: 'Adjustable Dumbbells Set', category: 'Sports', price: 299.99, compareAtPrice: 399.99, rating: 4.8, reviewCount: 520, images: productImages.sports, description: 'Space-saving adjustable dumbbells. 5-50 lbs range.', variants: { colors: ['Black'], sizes: [] }, stock: 20, isFeatured: true, createdAt: '2024-03-20' },
  { id: '22', slug: 'running-shoes-air', name: 'Air Running Shoes', category: 'Sports', price: 129.99, compareAtPrice: 169.99, rating: 4.6, reviewCount: 3100, images: productImages.sports, description: 'Lightweight running shoes with air cushioning. Perfect for marathons.', variants: { colors: ['Black/White', 'Blue/Orange', 'Gray/Pink'], sizes: ['7', '8', '9', '10', '11', '12'] }, stock: 75, isFeatured: true, createdAt: '2024-04-15' },
  { id: '23', slug: 'sports-water-bottle', name: 'Insulated Water Bottle', category: 'Sports', price: 24.99, compareAtPrice: 34.99, rating: 4.4, reviewCount: 4200, images: productImages.sports, description: 'Double-walled insulated bottle. Keeps drinks cold for 24 hours.', variants: { colors: ['Black', 'Blue', 'Green', 'Pink'], sizes: ['500ml', '750ml'] }, stock: 300, isFeatured: false, createdAt: '2024-05-15' },
  { id: '24', slug: 'gym-bag-duffle', name: 'Duffle Gym Bag', category: 'Sports', price: 54.99, compareAtPrice: 74.99, rating: 4.3, reviewCount: 1850, images: productImages.sports, description: 'Spacious duffle bag with shoe compartment. Water-resistant material.', variants: { colors: ['Black', 'Navy', 'Gray'], sizes: [] }, stock: 90, isFeatured: false, createdAt: '2024-06-10' },

  // Beauty - 6 products
  { id: '25', slug: 'skincare-set-complete', name: 'Complete Skincare Set', category: 'Beauty', price: 89.99, compareAtPrice: 129.99, rating: 4.7, reviewCount: 920, images: productImages.beauty, description: 'Complete skincare routine with cleanser, toner, serum, and moisturizer.', variants: { colors: [], sizes: [] }, stock: 50, isFeatured: true, createdAt: '2024-01-10' },
  { id: '26', slug: 'hair-dryer-professional', name: 'Professional Hair Dryer', category: 'Beauty', price: 149.99, compareAtPrice: 199.99, rating: 4.6, reviewCount: 1350, images: productImages.beauty, description: 'Ion technology hair dryer with multiple heat settings. Professional results.', variants: { colors: ['Black', 'Pink', 'Gold'], sizes: [] }, stock: 40, isFeatured: true, createdAt: '2024-02-18' },
  { id: '27', slug: 'makeup-brush-set', name: 'Professional Makeup Brush Set', category: 'Beauty', price: 39.99, compareAtPrice: 59.99, rating: 4.5, reviewCount: 2800, images: productImages.beauty, description: '15-piece brush set with premium bristles. Perfect for any look.', variants: { colors: ['Black', 'Pink'], sizes: [] }, stock: 100, isFeatured: false, createdAt: '2024-03-28' },
  { id: '28', slug: 'perfume-elegant', name: 'Elegant Perfume 50ml', category: 'Beauty', price: 79.99, compareAtPrice: 99.99, rating: 4.8, reviewCount: 1850, images: productImages.beauty, description: 'Long-lasting elegant fragrance. Notes of jasmine, rose, and sandalwood.', variants: { colors: [], sizes: ['30ml', '50ml', '100ml'] }, stock: 60, isFeatured: true, createdAt: '2024-04-25' },
  { id: '29', slug: 'face-mask-set', name: 'Face Mask Set', category: 'Beauty', price: 29.99, compareAtPrice: 39.99, rating: 4.3, reviewCount: 2100, images: productImages.beauty, description: 'Variety pack of 10 sheet masks. Different formulas for different needs.', variants: { colors: [], sizes: [] }, stock: 180, isFeatured: false, createdAt: '2024-05-20' },
  { id: '30', slug: 'nail-polish-collection', name: 'Nail Polish Collection', category: 'Beauty', price: 34.99, compareAtPrice: 49.99, rating: 4.4, reviewCount: 1650, images: productImages.beauty, description: 'Set of 6 premium nail polishes. Long-lasting and chip-resistant.', variants: { colors: ['Nude', 'Red', 'Pink', 'Purple', 'Blue', 'Gold'], sizes: [] }, stock: 85, isFeatured: false, createdAt: '2024-06-12' },
]

export const reviews: Record<string, Review[]> = {
  '1': [
    { id: 'r1', productId: '1', userName: 'John D.', rating: 5, comment: 'Amazing sound quality! Best headphones I have ever owned.', createdAt: '2024-02-15' },
    { id: 'r2', productId: '1', userName: 'Sarah M.', rating: 5, comment: 'Very comfortable for long listening sessions.', createdAt: '2024-02-20' },
  ],
  '2': [
    { id: 'r3', productId: '2', userName: 'Mike T.', rating: 4, comment: 'Great features but battery could be better.', createdAt: '2024-03-10' },
  ],
}

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug)
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured)
}

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  )
}