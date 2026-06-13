import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CheckoutData, CustomerInfo, ShippingAddress } from '../types'

interface CheckoutState {
  checkoutData: CheckoutData
  updateCustomerInfo: (info: CustomerInfo) => void
  updateShippingAddress: (address: ShippingAddress) => void
  updatePaymentMethod: (method: CheckoutData['paymentMethod']) => void
  clearCheckout: () => void
}

const initialCheckoutData: CheckoutData = {
  customerInfo: { fullName: '', email: '', phone: '' },
  shippingAddress: { country: '', city: '', address: '' },
  paymentMethod: 'credit_card',
}

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      checkoutData: initialCheckoutData,

      updateCustomerInfo: (info) => {
        set((state) => ({
          checkoutData: { ...state.checkoutData, customerInfo: info }
        }))
      },

      updateShippingAddress: (address) => {
        set((state) => ({
          checkoutData: { ...state.checkoutData, shippingAddress: address }
        }))
      },

      updatePaymentMethod: (method) => {
        set((state) => ({
          checkoutData: { ...state.checkoutData, paymentMethod: method }
        }))
      },

      clearCheckout: () => {
        set({ checkoutData: initialCheckoutData })
      },
    }),
    {
      name: 'ecommerce-checkout',
    }
  )
)