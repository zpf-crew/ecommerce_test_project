import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from '../store/cartStore'
import { products } from '../data'

describe('Cart Store', () => {
  beforeEach(() => {
    localStorage.clear()
    useCartStore.setState({ items: [], appliedCoupon: null })
  })

  const mockProduct = products[0]

  it('should add item to cart', () => {
    const { addItem, items } = useCartStore.getState()
    addItem(mockProduct, 'Black', '40mm', 1)
    
    expect(useCartStore.getState().items).toHaveLength(1)
    expect(useCartStore.getState().items[0].product.id).toBe(mockProduct.id)
    expect(useCartStore.getState().items[0].quantity).toBe(1)
  })

  it('should increase quantity when adding existing item', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.addItem(mockProduct, 'Black', '40mm', 2)
    
    expect(useCartStore.getState().items).toHaveLength(1)
    expect(useCartStore.getState().items[0].quantity).toBe(3)
  })

  it('should remove item from cart', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.removeItem(mockProduct.id)
    
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('should update item quantity', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.updateQuantity(mockProduct.id, 5)
    
    expect(useCartStore.getState().items[0].quantity).toBe(5)
  })

  it('should remove item when quantity set to 0', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.updateQuantity(mockProduct.id, 0)
    
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('should clear cart', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.clearCart()
    
    expect(useCartStore.getState().items).toHaveLength(0)
    expect(useCartStore.getState().appliedCoupon).toBeNull()
  })

  it('should calculate subtotal correctly', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 2)
    
    expect(store.getSubtotal()).toBe(mockProduct.price * 2)
  })

  it('should apply SAVE10 coupon correctly', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    const result = store.applyCoupon('SAVE10')
    
    expect(result).toBe(true)
    expect(useCartStore.getState().appliedCoupon?.code).toBe('SAVE10')
  })

  it('should apply FREESHIP coupon correctly', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    const result = store.applyCoupon('FREESHIP')
    
    expect(result).toBe(true)
    expect(useCartStore.getState().appliedCoupon?.type).toBe('shipping')
  })

  it('should reject invalid coupon', () => {
    const store = useCartStore.getState()
    const result = store.applyCoupon('INVALID')
    
    expect(result).toBe(false)
    expect(useCartStore.getState().appliedCoupon).toBeNull()
  })

  it('should calculate discount for percentage coupon', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.applyCoupon('SAVE10')
    
    const expectedDiscount = mockProduct.price * 0.1
    expect(store.getDiscount()).toBeCloseTo(expectedDiscount, 2)
  })

  it('should calculate shipping correctly', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    
    const subtotal = store.getSubtotal()
    const shipping = subtotal >= 100 ? 0 : 10
    
    expect(store.getShipping()).toBe(shipping)
  })

  it('should calculate total correctly', () => {
    const store = useCartStore.getState()
    store.addItem(mockProduct, 'Black', '40mm', 1)
    store.applyCoupon('SAVE10')
    
    const subtotal = store.getSubtotal()
    const discount = store.getDiscount()
    const shipping = store.getShipping()
    const expectedTotal = subtotal - discount + shipping
    
    expect(store.getTotal()).toBeCloseTo(expectedTotal, 2)
  })
})