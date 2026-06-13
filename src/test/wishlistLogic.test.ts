// Wishlist logic tests
import { describe, it, expect } from 'vitest'

type WishlistItem = {
  productId: string
  addedAt: string
}

const addToWishlist = (items: WishlistItem[], productId: string): WishlistItem[] => {
  if (items.some(item => item.productId === productId)) {
    return items // No duplicate
  }
  return [...items, { productId, addedAt: new Date().toISOString() }]
}

const removeFromWishlist = (items: WishlistItem[], productId: string): WishlistItem[] => {
  return items.filter(item => item.productId !== productId)
}

const isInWishlist = (items: WishlistItem[], productId: string): boolean => {
  return items.some(item => item.productId === productId)
}

describe('Wishlist Business Logic', () => {
  it('should add item to wishlist', () => {
    const items: WishlistItem[] = []
    const result = addToWishlist(items, 'product-1')
    expect(result.length).toBe(1)
    expect(result[0].productId).toBe('product-1')
  })

  it('should not add duplicate item', () => {
    const items: WishlistItem[] = [{ productId: 'product-1', addedAt: '2024-01-01' }]
    const result = addToWishlist(items, 'product-1')
    expect(result.length).toBe(1)
  })

  it('should remove item from wishlist', () => {
    const items: WishlistItem[] = [
      { productId: 'product-1', addedAt: '2024-01-01' },
      { productId: 'product-2', addedAt: '2024-01-02' },
    ]
    const result = removeFromWishlist(items, 'product-1')
    expect(result.length).toBe(1)
    expect(result[0].productId).toBe('product-2')
  })

  it('should check if item is in wishlist', () => {
    const items: WishlistItem[] = [{ productId: 'product-1', addedAt: '2024-01-01' }]
    expect(isInWishlist(items, 'product-1')).toBe(true)
    expect(isInWishlist(items, 'product-999')).toBe(false)
  })

  it('should handle empty wishlist', () => {
    const items: WishlistItem[] = []
    expect(isInWishlist(items, 'product-1')).toBe(false)
    const result = removeFromWishlist(items, 'product-1')
    expect(result.length).toBe(0)
  })
})