import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Modal, QuantitySelector, EmptyState } from '../components/ui'
import { useCartStore, useToastStore } from '../store'

export const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState('')
  const [couponError, setCouponError] = useState('')
  const [showClearModal, setShowClearModal] = useState(false)

  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscount,
    getShipping,
    getTotal,
  } = useCartStore()
  const { addToast } = useToastStore()

  const handleApplyCoupon = () => {
    setCouponError('')
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code')
      return
    }
    const success = applyCoupon(couponCode)
    if (success) {
      addToast('success', 'Coupon applied successfully!')
      setCouponCode('')
    } else {
      setCouponError('Invalid coupon code')
    }
  }

  const handleRemoveItem = (productId: string) => {
    removeItem(productId)
    addToast('success', 'Item removed from cart')
  }

  const handleClearCart = () => {
    clearCart()
    setShowClearModal(false)
    addToast('success', 'Cart cleared')
  }

  if (items.length === 0) {
    return (
      <EmptyState
        icon="cart"
        title="Your cart is empty"
        description="Looks like you haven't added anything to your cart yet."
        actionLabel="Start Shopping"
        onAction={() => navigate('/products')}
      />
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-700">
              <div className="col-span-5">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-3">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-t border-gray-200 items-center"
              >
                <div className="md:col-span-5 flex gap-4">
                  <Link to={`/products/${item.product.slug}`}>
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </Link>
                  <div>
                    <Link to={`/products/${item.product.slug}`} className="font-medium text-gray-900 hover:text-indigo-600">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {item.selectedColor && `${item.selectedColor}`}
                      {item.selectedColor && item.selectedSize && ' / '}
                      {item.selectedSize && `${item.selectedSize}`}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-sm text-red-600 hover:text-red-700 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <span className="md:hidden text-gray-500 mr-2">Price:</span>
                  <span className="font-medium">${item.product.price.toFixed(2)}</span>
                </div>

                <div className="md:col-span-3">
                  <span className="md:hidden text-gray-500 mr-2">Quantity:</span>
                  <QuantitySelector
                    quantity={item.quantity}
                    onChange={(qty) => updateQuantity(item.product.id, qty)}
                    max={item.product.stock}
                  />
                </div>

                <div className="md:col-span-2 text-right">
                  <span className="md:hidden text-gray-500 mr-2">Total:</span>
                  <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={() => setShowClearModal(true)}>
              Clear Cart
            </Button>
            <Link to="/products">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getSubtotal().toFixed(2)}</span>
              </div>
              
              {appliedCoupon && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({appliedCoupon.code})</span>
                  <span>-${getDiscount().toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}</span>
              </div>

              {getShipping() > 0 && (
                <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
              )}

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  error={couponError}
                />
                <Button onClick={handleApplyCoupon} variant="outline">Apply</Button>
              </div>
              {appliedCoupon && (
                <div className="mt-2 flex justify-between items-center text-sm">
                  <span className="text-green-600">{appliedCoupon.code} applied</span>
                  <button onClick={removeCoupon} className="text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">Try: SAVE10 or FREESHIP</p>
            </div>

            <Link to="/checkout">
              <Button className="w-full" size="lg">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>

      <Modal isOpen={showClearModal} onClose={() => setShowClearModal(false)} title="Clear Cart">
        <p className="text-gray-600 mb-6">Are you sure you want to clear all items from your cart?</p>
        <div className="flex gap-4 justify-end">
          <Button variant="outline" onClick={() => setShowClearModal(false)}>Cancel</Button>
          <Button onClick={handleClearCart} className="!bg-red-600 hover:!bg-red-700">Clear Cart</Button>
        </div>
      </Modal>
    </div>
  )
}