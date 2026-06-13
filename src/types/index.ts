// Types for Ecommerce Application

export interface Product {
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
  variants: {
    colors: string[]
    sizes: string[]
  }
  stock: number
  isFeatured: boolean
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor: string
  selectedSize: string
}

export interface WishlistItem {
  product: Product
  addedAt: string
}

export interface Coupon {
  code: string
  type: 'percentage' | 'shipping'
  value: number
  description: string
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  comment: string
  location: string
}

export interface CustomerInfo {
  fullName: string
  email: string
  phone: string
}

export interface ShippingAddress {
  country: string
  city: string
  address: string
}

export interface CheckoutData {
  customerInfo: CustomerInfo
  shippingAddress: ShippingAddress
  paymentMethod: 'credit_card' | 'paypal' | 'cod'
}

export interface Order {
  id: string
  items: CartItem[]
  customerInfo: CustomerInfo
  shippingAddress: ShippingAddress
  paymentMethod: string
  subtotal: number
  shipping: number
  discount: number
  total: number
  createdAt: string
}

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning'
  message: string
}

export interface FilterState {
  search: string
  category: string
  priceRange: [number, number]
  rating: number | null
  inStock: boolean
  sortBy: 'price_asc' | 'price_desc' | 'rating' | 'newest'
}