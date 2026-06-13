// Cart logic tests - test business logic trực tiếp
import { describe, it, expect } from 'vitest'

// Simple cart logic helper (không dùng Zustand)
type CartItem = {
  productId: string
  price: number
  quantity: number
}

const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const calculateDiscount = (subtotal: number, couponCode: string): number => {
  if (couponCode.toUpperCase() === 'SAVE10') {
    return subtotal * 0.1
  }
  return 0
}

const calculateShipping = (subtotal: number, couponCode: string): number => {
  if (couponCode.toUpperCase() === 'FREESHIP' || subtotal >= 100) {
    return 0
  }
  return 10
}

const calculateTotal = (subtotal: number, discount: number, shipping: number): number => {
  return subtotal - discount + shipping
}

describe('Cart Business Logic', () => {
  it('should calculate subtotal correctly', () => {
    const items: CartItem[] = [
      { productId: '1', price: 100, quantity: 2 },
      { productId: '2', price: 50, quantity: 1 },
    ]
    expect(calculateSubtotal(items)).toBe(250)
  })

  it('should apply SAVE10 discount correctly', () => {
    const subtotal = 100
    const discount = calculateDiscount(subtotal, 'SAVE10')
    expect(discount).toBe(10)
  })

  it('should return 0 discount for invalid coupon', () => {
    const subtotal = 100
    const discount = calculateDiscount(subtotal, 'INVALID')
    expect(discount).toBe(0)
  })

  it('should calculate shipping correctly - free over $100', () => {
    const shipping1 = calculateShipping(150, '')
    const shipping2 = calculateShipping(50, '')
    expect(shipping1).toBe(0)
    expect(shipping2).toBe(10)
  })

  it('should apply FREESHIP coupon', () => {
    const shipping = calculateShipping(50, 'FREESHIP')
    expect(shipping).toBe(0)
  })

  it('should calculate total correctly', () => {
    const subtotal = 100
    const discount = calculateDiscount(subtotal, 'SAVE10')
    const shipping = calculateShipping(subtotal, '')
    const total = calculateTotal(subtotal, discount, shipping)
    // 100 - 10 + 0 = 90 (100 >= 100 so free shipping)
    expect(total).toBe(90)
  })

  it('should calculate total with free shipping over $100', () => {
    const subtotal = 150
    const discount = calculateDiscount(subtotal, 'SAVE10')
    const shipping = calculateShipping(subtotal, '')
    const total = calculateTotal(subtotal, discount, shipping)
    // 150 - 15 + 0 = 135
    expect(total).toBe(135)
  })

  it('should handle empty cart', () => {
    const items: CartItem[] = []
    expect(calculateSubtotal(items)).toBe(0)
  })
})