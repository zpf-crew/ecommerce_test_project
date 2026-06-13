import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Price } from '../components/ui/Price'
import { Rating } from '../components/ui/Rating'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { EmptyState } from '../components/ui/EmptyState'

describe('Button Component', () => {
  it('should render with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('should handle click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when loading', () => {
    render(<Button loading>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should show different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-indigo-600')
    
    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-indigo-600')
  })
})

describe('Input Component', () => {
  it('should render with label', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('should show error message', () => {
    render(<Input label="Email" error="Invalid email" />)
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })

  it('should handle value changes', async () => {
    const user = userEvent.setup()
    render(<Input label="Search" />)
    
    const input = screen.getByLabelText(/search/i)
    await user.type(input, 'test')
    expect(input).toHaveValue('test')
  })
})

describe('Price Component', () => {
  it('should display price', () => {
    render(<Price price={99.99} />)
    expect(screen.getByText('$99.99')).toBeInTheDocument()
  })

  it('should show discount when compareAtPrice is higher', () => {
    render(<Price price={79.99} compareAtPrice={99.99} />)
    expect(screen.getByText('$79.99')).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByText(/-20%/)).toBeInTheDocument()
  })
})

describe('Rating Component', () => {
  it('should display rating stars', () => {
    render(<Rating rating={4} />)
    const stars = document.querySelectorAll('.text-yellow-400')
    expect(stars.length).toBe(4)
  })

  it('should display review count', () => {
    render(<Rating rating={4} reviewCount={100} />)
    expect(screen.getByText('(100)')).toBeInTheDocument()
  })
})

describe('QuantitySelector Component', () => {
  it('should display quantity', () => {
    render(<QuantitySelector quantity={5} onChange={() => {}} />)
    expect(screen.getByDisplayValue(5)).toBeInTheDocument()
  })

  it('should call onChange when incrementing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<QuantitySelector quantity={1} onChange={handleChange} />)
    
    const increaseButton = screen.getByRole('button', { name: /increase/i })
    await user.click(increaseButton)
    expect(handleChange).toHaveBeenCalledWith(2)
  })

  it('should call onChange when decrementing', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<QuantitySelector quantity={2} onChange={handleChange} />)
    
    const decreaseButton = screen.getByRole('button', { name: /decrease/i })
    await user.click(decreaseButton)
    expect(handleChange).toHaveBeenCalledWith(1)
  })
})

describe('EmptyState Component', () => {
  it('should display title and description', () => {
    render(<EmptyState title="No items" description="Your cart is empty" />)
    expect(screen.getByText(/no items/i)).toBeInTheDocument()
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })

  it('should display action button when provided', () => {
    const handleAction = vi.fn()
    render(<EmptyState title="No items" actionLabel="Add Items" onAction={handleAction} />)
    
    const button = screen.getByRole('button', { name: /add items/i })
    expect(button).toBeInTheDocument()
  })
})