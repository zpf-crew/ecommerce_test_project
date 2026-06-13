import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <Link to="/">
          <Button size="lg">Go to Home</Button>
        </Link>
        <Link to="/products">
          <Button size="lg" variant="outline">Browse Products</Button>
        </Link>
      </div>
    </div>
  )
}