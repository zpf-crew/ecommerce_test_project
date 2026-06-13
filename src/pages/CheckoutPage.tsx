import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input } from '../components/ui'
import { useCartStore, useCheckoutStore, useToastStore } from '../store'

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  country?: string
  city?: string
  address?: string
}

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, getSubtotal, getDiscount, getShipping, getTotal, clearCart, appliedCoupon } = useCartStore()
  const { checkoutData, updateCustomerInfo, updateShippingAddress, updatePaymentMethod, clearCheckout } = useCheckoutStore()
  const { addToast } = useToastStore()
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isProcessing, setIsProcessing] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const { customerInfo, shippingAddress } = checkoutData

    if (!customerInfo.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(customerInfo.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!shippingAddress.country.trim()) {
      newErrors.country = 'Country is required'
    }

    if (!shippingAddress.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!shippingAddress.address.trim()) {
      newErrors.address = 'Address is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      addToast('error', 'Please fix the errors in the form')
      return
    }

    if (items.length === 0) {
      addToast('error', 'Your cart is empty')
      return
    }

    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const orderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`
    localStorage.setItem('lastOrder', JSON.stringify({
      orderNumber,
      items,
      customerInfo: checkoutData.customerInfo,
      total: getTotal(),
      createdAt: new Date().toISOString()
    }))
    
    clearCart()
    clearCheckout()
    setIsProcessing(false)
    navigate('/order-success', { state: { orderNumber } })
  }

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  value={checkoutData.customerInfo.fullName}
                  onChange={(e) => updateCustomerInfo({ ...checkoutData.customerInfo, fullName: e.target.value })}
                  error={errors.fullName}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={checkoutData.customerInfo.email}
                  onChange={(e) => updateCustomerInfo({ ...checkoutData.customerInfo, email: e.target.value })}
                  error={errors.email}
                  required
                />
                <Input
                  label="Phone"
                  type="tel"
                  value={checkoutData.customerInfo.phone}
                  onChange={(e) => updateCustomerInfo({ ...checkoutData.customerInfo, phone: e.target.value })}
                  error={errors.phone}
                  required
                  className="md:col-span-2"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Country"
                  value={checkoutData.shippingAddress.country}
                  onChange={(e) => updateShippingAddress({ ...checkoutData.shippingAddress, country: e.target.value })}
                  error={errors.country}
                  required
                />
                <Input
                  label="City"
                  value={checkoutData.shippingAddress.city}
                  onChange={(e) => updateShippingAddress({ ...checkoutData.shippingAddress, city: e.target.value })}
                  error={errors.city}
                  required
                />
                <Input
                  label="Address"
                  value={checkoutData.shippingAddress.address}
                  onChange={(e) => updateShippingAddress({ ...checkoutData.shippingAddress, address: e.target.value })}
                  error={errors.address}
                  required
                  className="md:col-span-2"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: 'credit_card', label: 'Credit Card', icon: '💳' },
                  { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      checkoutData.paymentMethod === method.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={checkoutData.paymentMethod === method.id}
                      onChange={(e) => updatePaymentMethod(e.target.value as any)}
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-medium">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getSubtotal().toFixed(2)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${getDiscount().toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6"
                size="lg"
                loading={isProcessing}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}