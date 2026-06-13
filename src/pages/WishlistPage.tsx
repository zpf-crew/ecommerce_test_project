import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, EmptyState } from '../components/ui'
import { useWishlistStore, useCartStore, useToastStore } from '../store'

export const WishlistPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, removeItem } = useWishlistStore()
  const { addItem: addToCart } = useCartStore()
  const { addToast } = useToastStore()

  const handleMoveToCart = (product: any) => {
    addToCart(product, product.variants.colors[0] || '', product.variants.sizes[0] || '', 1)
    removeItem(product.id)
    addToast('success', 'Moved to cart!')
  }

  const handleRemove = (productId: string) => {
    removeItem(productId)
    addToast('success', 'Removed from wishlist')
  }

  if (items.length === 0) {
    return (
      <EmptyState
        icon="wishlist"
        title="Your wishlist is empty"
        description="Save items you love by clicking the heart icon."
        actionLabel="Browse Products"
        onAction={() => navigate('/products')}
      />
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist ({items.length})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Link to={`/products/${item.product.slug}`}>
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{item.product.category}</p>
              <Link to={`/products/${item.product.slug}`} className="font-medium text-gray-900 hover:text-indigo-600 line-clamp-2">
                {item.product.name}
              </Link>
              <p className="text-lg font-bold text-indigo-600 mt-2">${item.product.price.toFixed(2)}</p>
              
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() => handleMoveToCart(item.product)}
                  className="flex-1"
                  size="sm"
                  disabled={item.product.stock === 0}
                >
                  {item.product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button
                  onClick={() => handleRemove(item.product.id)}
                  variant="outline"
                  size="sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}