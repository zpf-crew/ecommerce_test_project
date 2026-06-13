# ShopMax - Ecommerce Landing Page

A frontend-only ecommerce website built with React, TypeScript, Vite, and TailwindCSS. Designed as a comprehensive testbed for AI Coding Agent and AI Testing Agent evaluation.

## Features

- **8 Pages**: Home, Products, Product Detail, Cart, Wishlist, Checkout, Order Success, 404
- **State Management**: Zustand with localStorage persistence
- **Product Filtering**: Search, category, price range, rating, stock
- **Cart System**: Add/remove items, quantity adjustment, coupon codes
- **Wishlist**: Save products for later
- **Checkout**: Form validation, multiple payment methods
- **Responsive Design**: Mobile-first with TailwindCSS
- **Testing**: Unit tests with Vitest (~10% coverage)

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS 4
- React Router 7
- Zustand (State Management)
- Vitest (Testing)
- React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing

### Run Tests

```bash
npm run test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Test Coverage Report

The project includes unit tests for:
- Cart store logic (add, remove, update, coupons)
- Wishlist store logic
- Product data functions
- Basic component rendering

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # Button, Input, Modal, etc.
│   └── layout/      # Header, Footer, Layout
├── pages/           # Page components
├── store/           # Zustand state stores
├── data/            # Mock products, categories, coupons
├── types/           # TypeScript type definitions
├── test/            # Test files
└── App.tsx          # Main app with routing
```

## Coupon Codes

- **SAVE10**: 10% off your order
- **FREESHIP**: Free shipping

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, categories, featured products |
| `/products` | Product listing with filters and sorting |
| `/products/:slug` | Product detail page |
| `/cart` | Shopping cart with coupon application |
| `/wishlist` | Saved products |
| `/checkout` | Checkout with validation |
| `/order-success` | Order confirmation |
| `*` | 404 Not Found |

## Testing Coverage

### Tested Modules (~10%)
- Cart store logic
- Wishlist store logic
- Product data functions
- Basic UI components

### Not Tested (for AI Agent exercises)
- Complex UI interactions
- Full page flows
- Edge cases in visual components

## License

MIT License - Use freely for testing and learning.