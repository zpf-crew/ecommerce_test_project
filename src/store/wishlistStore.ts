import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, WishlistItem } from '../types'

interface WishlistState {
  items: WishlistItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          if (state.items.some(item => item.product.id === product.id)) {
            return state
          }
          return {
            items: [...state.items, { product, addedAt: new Date().toISOString() }]
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }))
      },

      isInWishlist: (productId) => {
        return get().items.some(item => item.product.id === productId)
      },

      clearWishlist: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'ecommerce-wishlist',
    }
  )
)