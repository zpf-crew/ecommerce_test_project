# ShopMax - Ecommerce Landing Page Wiki

## Architecture Overview

This is a React-based ecommerce frontend application built with TypeScript, using Vite as the build tool and TailwindCSS for styling. The application uses Zustand for state management and React Router for navigation.

### Technology Stack
- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TailwindCSS 4** - Styling
- **React Router 7** - Routing
- **Zustand** - State Management
- **Vitest** - Testing
- **React Testing Library** - Component Testing

---

## Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   ├── Rating.tsx
│   │   ├── Price.tsx
│   │   ├── QuantitySelector.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Skeleton.tsx
│   │   ├── ProductCard.tsx
│   │   └── index.ts
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── index.ts
│   └── index.ts
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── ProductListingPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── WishlistPage.tsx
│   ├── CheckoutPage.tsx
│   ├── OrderSuccessPage.tsx
│   ├── NotFoundPage.tsx
│   └── index.ts
├── store/               # Zustand stores
│   ├── cartStore.ts
│   ├── wishlistStore.ts
│   ├── checkoutStore.ts
│   ├── toastStore.ts
│   └── index.ts
├── data/                # Mock data
│   └── index.ts
├── types/               # TypeScript types
│   └── index.ts
├── test/                # Test setup and files
│   ├── setup.ts
│   ├── cartStore.test.ts
│   ├── wishlistStore.test.ts
│   ├── productData.test.ts
│   └── components.test.tsx
├── App.tsx              # App component with routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

---

## Routing Structure

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page with hero, categories, featured products |
| `/products` | ProductListingPage | Product grid with filters and sorting |
| `/products/:slug` | ProductDetailPage | Single product detail view |
| `/cart` | CartPage | Shopping cart with coupon application |
| `/wishlist` | WishlistPage | User's saved items |
| `/checkout` | CheckoutPage | Checkout form with validation |
| `/order-success` | OrderSuccessPage | Order confirmation |
| `*` | NotFoundPage | 404 page |

---

## State Flow

### Cart Flow

```
User clicks "Add to Cart"
    ↓
CartStore.addItem(product, color, size, quantity)
    ↓
Check if item exists (same product, color, size)
    ↓
If exists: increment quantity
If not: add new item
    ↓
Persist to localStorage
    ↓
Update UI via Zustand subscription
```

### Wishlist Flow

```
User clicks heart icon on product
    ↓
WishlistStore.addItem(product) / removeItem(productId)
    ↓
Check for duplicates
    ↓
Add or remove item
    ↓
Persist to localStorage
    ↓
Update UI
```

### Checkout Flow

```
User navigates to /checkout
    ↓
CheckoutStore loads persisted draft data
    ↓
User fills form fields
    ↓
Validation runs on blur and submit
    ↓
User clicks "Place Order"
    ↓
Simulate API call (1.5s delay)
    ↓
Generate order number
    ↓
Clear cart and checkout data
    ↓
Navigate to /order-success
```

### Coupon Flow

```
User enters coupon code
    ↓
CartStore.applyCoupon(code)
    ↓
Search for coupon in coupons array
    ↓
If found: set appliedCoupon, calculate discount
    ↓
If not found: return false, show error
    ↓
Recalculate totals with discount
    ↓
Update UI
```

---

## Local Storage Strategy

### Storage Keys

| Key | Store | Data |
|-----|-------|------|
| `ecommerce-cart` | CartStore | { items, appliedCoupon } |
| `ecommerce-wishlist` | WishlistStore | { items } |
| `ecommerce-checkout` | CheckoutStore | { checkoutData } |

### Persistence Middleware

Zustand's `persist` middleware is used:
```typescript
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({ ... }),
    { name: 'ecommerce-cart' }
  )
)
```

### Hydration

Data automatically hydrates on page refresh. No manual initialization required.

---

## How to Add a Product

### 1. Add to Mock Data

Edit `src/data/index.ts`:

```typescript
export const products: Product[] = [
  // ... existing products
  {
    id: '31',
    slug: 'new-product-slug',
    name: 'New Product Name',
    category: 'Electronics',
    price: 99.99,
    compareAtPrice: 129.99,
    rating: 4.5,
    reviewCount: 100,
    images: ['https://example.com/image.jpg'],
    description: 'Product description',
    variants: {
      colors: ['Black', 'White'],
      sizes: ['S', 'M', 'L']
    },
    stock: 50,
    isFeatured: false,
    createdAt: '2024-06-15'
  }
]
```

### 2. Add Reviews (Optional)

```typescript
export const reviews: Record<string, Review[]> = {
  '31': [
    { id: 'r100', productId: '31', userName: 'John', rating: 5, comment: 'Great!', createdAt: '2024-06-15' }
  ]
}
```

---

## How to Run the Project

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at http://localhost:5173

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Running Tests

```bash
# Run tests once
npm run test

# Run tests with coverage
npm run test:coverage
```

---

## Known Limitations

1. **No Authentication** - No user login/registration
2. **No Real Payments** - Mock payment processing only
3. **No Database** - All data is mock/static
4. **No Email** - Newsletter is mock only
5. **Limited Products** - 30 products only
6. **No Pagination** - All products load at once
7. **No Search History** - Not persisted
8. **Single Currency** - USD only

---

## Future Improvements

### Phase 1 - Enhanced Features
- [ ] Product pagination
- [ ] Advanced search with filters
- [ ] Product comparisons
- [ ] Recently viewed products
- [ ] Order history

### Phase 2 - User Features
- [ ] User registration/login (mock)
- [ ] User profiles
- [ ] Address book
- [ ] Order tracking

### Phase 3 - Enhanced Testing
- [ ] Integration tests
- [ ] E2E tests with Playwright
- [ ] Visual regression tests
- [ ] Performance tests

### Phase 4 - Advanced UI
- [ ] Dark mode
- [ ] Product quick view
- [ ] Infinite scroll
- [ ] Advanced animations

---

## Testing Guidelines

### Unit Tests Scope (~10%)

**Currently Tested:**
- Cart store logic (add, remove, update, coupons)
- Wishlist store logic
- Product data functions
- Basic component rendering

**Not Tested (for AI Agent exercises):**
- Full page integration
- Complex user flows
- Edge cases in UI components

### Running Specific Tests

```bash
# Run cart tests only
npm run test -- cartStore

# Run with watch mode
npm run test -- --watch

# Run coverage report
npm run test:coverage
```

---

## Troubleshooting

### Common Issues

**Issue:** `localStorage is not defined`
- **Solution:** Tests use jsdom which mocks localStorage

**Issue:** React Router not working
- **Solution:** Ensure BrowserRouter wraps the app

**Issue:** Tailwind styles not applying
- **Solution:** Check `index.css` imports tailwind correctly

**Issue:** Tests failing
- **Solution:** Run `npm install` to ensure dependencies are installed

---

## Contributing

This is a test project for AI agent evaluation. To extend:

1. Add new products to `src/data/index.ts`
2. Create new pages in `src/pages/`
3. Add new components to `src/components/`
4. Extend stores in `src/store/`
5. Add tests in `src/test/`

---

## License

MIT License - Use freely for testing and learning.