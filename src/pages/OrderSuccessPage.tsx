import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui'

export const OrderSuccessPage: React.FC = () => {
  const location = useLocation()
  const orderNumber = location.state?.orderNumber || 'N/A'

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
        <p className="text-gray-600">
          Your order number is: <span className="font-mono font-bold text-indigo-600">{orderNumber}</span>
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</span>
            <span>We'll send you a confirmation email with your order details.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</span>
            <span>Your order will be processed and prepared for shipping.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</span>
            <span>You'll receive tracking information once your order ships.</span>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 justify-center">
        <Link to="/products">
          <Button size="lg">Continue Shopping</Button>
        </Link>
        <Link to="/">
          <Button size="lg" variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}