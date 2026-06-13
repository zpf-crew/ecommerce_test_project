# Ecommerce Landing Page - Specification Document

## 1. Project Overview

### Project Name
ShopMax - Ecommerce Landing Page

### Project Type
Frontend-only Ecommerce Website (Mock/Template Project)

### Core Functionality
A complete ecommerce frontend with product listing, filtering, cart management, wishlist, checkout flow, and persistent local storage - designed as a testbed for AI Coding Agent and AI Testing Agent evaluation.

### Target Users
- AI Development Agents (for code generation, refactoring, bug fixing)
- AI Testing Agents (for unit test generation, regression testing, exploratory testing)
- Developers learning modern React patterns

---

## 2. Scope

### In Scope
- 8 unique pages (Home, Products, Product Detail, Cart, Wishlist, Checkout, Order Success, 404)
- Full state management with Zustand
- Local storage persistence for cart, wishlist, and checkout data
- Coupon system (SAVE10, FREESHIP)
- Form validation for checkout
- Product filtering and sorting
- Responsive design
- Unit tests (~10% coverage target)

### Out of Scope
- Real backend/API
- Authentication system
- Payment gateway integration
- Real database
- Production deployment

---

## 3. User Personas

### Primary User: AI Coding Agent
- Needs clean, well-structured code to navigate
- Requires TypeScript strict typing
- Benefits from clear component boundaries

### Secondary User: AI Testing Agent
- Needs predictable state management
- Requires clear test boundaries
- Benefits from mock data availability

### Tertiary User: Human Developer
- Needs clear documentation
- Requires easy setup process
- Benefits from example patterns

---

## 4. Functional Requirements

### 4.1 Homepage
- Hero section with CTA buttons
- Promotion banner with coupon codes
- Category grid (5 categories)
- Featured products section (8 products)
- Testimonials section (5 testimonials)
- Newsletter signup (mock)
- Footer with links

### 4.2 Product Listing Page
- Product grid display
- Search functionality
- Category filter (dropdown)
- Price range filter (slider)
- Rating filter (4+, 3+ stars)
- In-stock filter (checkbox)
- Sort options:
  - Newest (default)
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
- Loading skeleton states
- Empty results state

### 4.3 Product Detail Page
- Image gallery with thumbnail selection
- Product name, category, description
- Price display with discount calculation
- Rating and review count
- Color selector (if variants exist)
- Size selector (if variants exist)
- Quantity selector
- Add to Cart button
- Add to Wishlist button
- Stock status indicator
- Reviews section
- Related products (same category)

### 4.4 Cart Page
- Cart items list with images
- Quantity adjustment
- Item removal
- Clear cart functionality
- Coupon application (SAVE10, FREESHIP)
- Order summary (subtotal, discount, shipping, total)
- Proceed to checkout button
- Empty cart state

### 4.5 Wishlist Page
- Wishlist items grid
- Move to cart functionality
- Remove from wishlist
- Empty wishlist state

### 4.6 Checkout Page
- Customer information form:
  - Full name (required)
  - Email (required, valid format)
  - Phone (required, valid format)
- Shipping address form:
  - Country (required)
  - City (required)
  - Address (required)
- Payment method selection:
  - Credit Card
  - PayPal
  - Cash on Delivery
- Order summary
- Form validation
- Place order button (mock processing)

### 4.7 Order Success Page
- Success message
- Order number display
- Next steps information
- Continue shopping button

### 4.8 404 Page
- Error message
- Navigation links

---

## 5. Non-Functional Requirements

### Performance
- Fast initial load (< 3 seconds)
- Smooth transitions
- Responsive at all breakpoints

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Form accessibility
- Button states

### Code Quality
- TypeScript strict mode
- No `any` types (unless necessary)
- Clean component architecture
- Proper error handling
- Meaningful variable names

---

## 6. Routing Structure

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Landing page |
| `/products` | ProductListingPage | Product grid with filters |
| `/products/:slug` | ProductDetailPage | Single product view |
| `/cart` | CartPage | Shopping cart |
| `/wishlist` | WishlistPage | Saved items |
| `/checkout` | CheckoutPage | Checkout form |
| `/order-success` | OrderSuccessPage | Order confirmation |
| `*` | NotFoundPage | 404 fallback |

---

## 7. State Management

### Zustand Stores

#### CartStore
- `items: CartItem[]`
- `appliedCoupon: Coupon | null`
- `addItem(product, color, size, quantity)`
- `removeItem(productId)`
- `updateQuantity(productId, quantity)`
- `clearCart()`
- `applyCoupon(code)`: boolean
- `removeCoupon()`
- `getSubtotal()`: number
- `getDiscount()`: number
- `getShipping()`: number
- `getTotal()`: number

#### WishlistStore
- `items: WishlistItem[]`
- `addItem(product)`
- `removeItem(productId)`
- `isInWishlist(productId)`: boolean
- `clearWishlist()`

#### CheckoutStore
- `checkoutData: CheckoutData`
- `updateCustomerInfo(info)`
- `updateShippingAddress(address)`
- `updatePaymentMethod(method)`
- `clearCheckout()`

#### ToastStore
- `toasts: Toast[]`
- `addToast(type, message)`
- `removeToast(id)`

---

## 8. Mock Data Structure

### Products (30 products)
```typescript
{
  id: string
  slug: string
  name: string
  category: string
  price: number
  compareAtPrice: number
  rating: number
  reviewCount: number
  images: string[]
  description: string
  variants: { colors: string[], sizes: string[] }
  stock: number
  isFeatured: boolean
  createdAt: string
}
```

### Categories (5)
- Electronics
- Fashion
- Home
- Sports
- Beauty

### Coupons (2)
- `SAVE10`: 10% off
- `FREESHIP`: Free shipping

### Testimonials (5)
- 5 customer reviews with ratings

---

## 9. Validation Rules

### Checkout Form
| Field | Rules |
|-------|-------|
| Full Name | Required, min 2 characters |
| Email | Required, valid email format |
| Phone | Required, min 10 digits |
| Country | Required |
| City | Required |
| Address | Required |

### Coupon Application
- Case-insensitive code matching
- Only one coupon at a time
- Percentage coupon applies to subtotal
- Free shipping applies when no other shipping discount

---

## 10. UI States

### Loading States
- Product list skeleton (6 items)
- Product detail skeleton

### Empty States
- Empty cart
- Empty wishlist
- No search results

### Error States
- Product loading failed (mock)
- Checkout failed (mock)

### Interactive States
- Button hover/active/disabled
- Input focus/error/success
- Link hover effects

---

## 11. Local Storage Keys

| Key | Data | Description |
|-----|------|-------------|
| `ecommerce-cart` | CartStore | Persistent cart data |
| `ecommerce-wishlist` | WishlistStore | Persistent wishlist |
| `ecommerce-checkout` | CheckoutStore | Draft checkout data |

---

## 12. Acceptance Criteria

### Homepage
- [ ] Hero section displays with CTA buttons
- [ ] Categories grid shows 5 categories
- [ ] Featured products show 8 items
- [ ] Testimonials display 5 reviews
- [ ] Footer contains newsletter form

### Product Listing
- [ ] Products display in grid
- [ ] Search filters results
- [ ] Category dropdown filters
- [ ] Price range slider works
- [ ] Rating filter works
- [ ] In-stock checkbox filters
- [ ] Sort options change order
- [ ] Loading skeletons display
- [ ] Empty state shows when no results

### Product Detail
- [ ] Images display correctly
- [ ] Thumbnail selection works
- [ ] Variant selectors work
- [ ] Quantity selector works
- [ ] Add to cart works
- [ ] Add to wishlist works
- [ ] Reviews display
- [ ] Related products show

### Cart
- [ ] Items display with details
- [ ] Quantity updates work
- [ ] Remove item works
- [ ] Clear cart works
- [ ] Coupon SAVE10 works
- [ ] Coupon FREESHIP works
- [ ] Totals calculate correctly

### Wishlist
- [ ] Items display correctly
- [ ] Move to cart works
- [ ] Remove works

### Checkout
- [ ] Form validation works
- [ ] Error messages display
- [ ] Payment method selection works
- [ ] Order processes successfully

### General
- [ ] Navigation works
- [ ] Responsive on mobile
- [ ] Local storage persists
- [ ] No console errors

---

## 13. Future Improvements

- Add more products (50+)
- Add product categories filter (multi-select)
- Add pagination
- Add more coupons
- Add user accounts (mock)
- Add order history
- Add product comparisons
- Add advanced search filters
- Add more unit tests
- Add integration tests
- Add E2E tests