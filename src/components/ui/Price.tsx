import React from 'react'

interface PriceProps {
  price: number
  compareAtPrice?: number
  size?: 'sm' | 'md' | 'lg'
}

export const Price: React.FC<PriceProps> = ({ price, compareAtPrice, size = 'md' }) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  const hasDiscount = compareAtPrice && compareAtPrice > price
  const discountPercent = hasDiscount 
    ? Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)
    : 0

  return (
    <div className="flex items-center gap-2">
      <span className={`${sizes[size]} font-bold text-indigo-600`}>
        ${price.toFixed(2)}
      </span>
      {hasDiscount && (
        <>
          <span className={`${sizes[size]} text-gray-400 line-through`}>
            ${compareAtPrice!.toFixed(2)}
          </span>
          <span className="text-xs font-medium text-white bg-red-500 px-2 py-0.5 rounded">
            -{discountPercent}%
          </span>
        </>
      )}
    </div>
  )
}