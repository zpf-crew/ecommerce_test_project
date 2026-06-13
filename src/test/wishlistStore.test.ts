import { describe, it, expect, beforeEach } from 'vitest'
import { useWishlistStore } from '../store/wishlistStore'
import { products } from '../data'

describe('Wishlist Store', () => {
  beforeEach(() => {
    localStorage.clear()
    useWishlistStore.setState({ items: [] })
  })

  const mockProduct = products[0]

  it('should add item to wishlist', () => {
    const { addItem, items } = useWishlistStore.getState()
    addItem(mockProduct)
    
    expect(useWishlistStore.getState().items).toHaveLength(1)
    expect(useWishlistStore.getState().items[0].product.id).toBe(mockProduct.id)
  })

  it('should not add duplicate item to wishlist', () => {
    const store = useWishlistStore.getState()
    store.addItem(mockProduct)
    store.addItem(mockProduct)
    
    expect(useWishlistStore.getState().items).toHaveLength(1)
  })

  it('should remove item from wishlist', () => {
    const store = useWishlistStore.getState()
    store.addItem(mockProduct)
    store.removeItem(mockProduct.id)
    
    expect(useWishlistStore.getState().items).toHaveLength(0)
  })

  it('should check if item is in wishlist', () => {
    const store = useWishlistStore.getState()
    store.addItem(mockProduct)
    
    expect(store.isInWishlist(mockProduct.id)).toBe(true)
    expect(store.isInWishlist('non-existent')).toBe(false)
  })

  it('should clear wishlist', () => {
    const store = useWishlistStore.getState()
    store.addItem(mockProduct)
    store.clearWishlist()
    
    expect(useWishlistStore.getState().items).toHaveLength(0)
  })
})