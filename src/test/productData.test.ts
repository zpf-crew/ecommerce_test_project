import { describe, it, expect } from 'vitest'
import { products, searchProducts, getProductsByCategory, getFeaturedProducts, coupons } from '../data'

describe('Product Data', () => {
  it('should have at least 30 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(30)
  })

  it('should have products in all categories', () => {
    const categories = ['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty']
    categories.forEach(category => {
      const productsInCategory = products.filter(p => p.category === category)
      expect(productsInCategory.length).toBeGreaterThan(0)
    })
  })

  it('should have required fields for each product', () => {
    products.forEach(product => {
      expect(product.id).toBeDefined()
      expect(product.slug).toBeDefined()
      expect(product.name).toBeDefined()
      expect(product.category).toBeDefined()
      expect(product.price).toBeGreaterThan(0)
      expect(product.images).toBeDefined()
      expect(product.images.length).toBeGreaterThan(0)
    })
  })

  it('should search products by name', () => {
    const results = searchProducts('headphones')
    expect(results.length).toBeGreaterThan(0)
    expect(results.some(p => p.name.toLowerCase().includes('headphones'))).toBe(true)
  })

  it('should search products by description', () => {
    const results = searchProducts('noise cancellation')
    expect(results.length).toBeGreaterThan(0)
  })

  it('should filter products by category', () => {
    const electronics = getProductsByCategory('electronics')
    expect(electronics.length).toBeGreaterThan(0)
    expect(electronics.every(p => p.category.toLowerCase() === 'electronics')).toBe(true)
  })

  it('should get featured products', () => {
    const featured = getFeaturedProducts()
    expect(featured.length).toBeGreaterThan(0)
    expect(featured.every(p => p.isFeatured)).toBe(true)
  })
})

describe('Coupons', () => {
  it('should have SAVE10 coupon', () => {
    const coupon = coupons.find(c => c.code === 'SAVE10')
    expect(coupon).toBeDefined()
    expect(coupon?.type).toBe('percentage')
    expect(coupon?.value).toBe(10)
  })

  it('should have FREESHIP coupon', () => {
    const coupon = coupons.find(c => c.code === 'FREESHIP')
    expect(coupon).toBeDefined()
    expect(coupon?.type).toBe('shipping')
    expect(coupon?.value).toBe(100)
  })
})