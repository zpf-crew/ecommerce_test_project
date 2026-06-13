import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product, Coupon } from '../types'
import { coupons } from '../data'

interface CartState {
  items: CartItem[]
  appliedCoupon: Coupon | null
  addItem: (product: Product, color: string, size: string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  applyCoupon: (code: string) => boolean
  removeCoupon: () => void
  getSubtotal: () => number
  getDiscount: () => number
  getShipping: () => number
  getTotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      appliedCoupon: null,

      addItem: (product, color, size, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            item => item.product.id === product.id && 
                    item.selectedColor === color && 
                    item.selectedSize === size
          )

          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += quantity
            return { items: newItems }
          }

          return {
            items: [...state.items, { product, quantity, selectedColor: color, selectedSize: size }]
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }))
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        }))
      },

      clearCart: () => {
        set({ items: [], appliedCoupon: null })
      },

      applyCoupon: (code) => {
        const coupon = coupons.find(c => c.code.toUpperCase() === code.toUpperCase())
        if (coupon) {
          set({ appliedCoupon: coupon })
          return true
        }
        return false
      },

      removeCoupon: () => {
        set({ appliedCoupon: null })
      },

      getSubtotal: () => {
        const { items } = get()
        return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      },

      getDiscount: () => {
        const { appliedCoupon, getSubtotal } = get()
        if (!appliedCoupon) return 0
        
        if (appliedCoupon.type === 'percentage') {
          return getSubtotal() * (appliedCoupon.value / 100)
        }
        return 0
      },

      getShipping: () => {
        const { appliedCoupon, getSubtotal } = get()
        if (appliedCoupon?.type === 'shipping') return 0
        if (getSubtotal() >= 100) return 0
        return 10
      },

      getTotal: () => {
        const { getSubtotal, getDiscount, getShipping } = get()
        return getSubtotal() - getDiscount() + getShipping()
      },
    }),
    {
      name: 'ecommerce-cart',
    }
  )
)