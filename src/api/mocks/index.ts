import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signInMock } from './auth/sign-in-mock'
import { getDailyRevenueInPeriodMock } from './metrics/get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './metrics/get-day-orders-amount'
import { getManagedRestaurantMock } from './metrics/get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './metrics/get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './metrics/get-month-orders-amount'
import { getMonthRevenueMock } from './metrics/get-month-revenue'
import { getPopularProductsMock } from './metrics/get-popular-products-mock'
import { approveOrderMock } from './order/approve-order-mock'
import { cancelOrderMock } from './order/cancel-order-mock'
import { deliverOrderMock } from './order/deliver-order-mock'
import { dispatchOrderMock } from './order/dispatch-order-mock'
import { getOrderDetailsMock } from './order/get-order-details-mock'
import { getOrdersMock } from './order/get-orders-mock'
import { getProfileMock } from './profile/get-profile-mock'
import { registerRestaurantMock } from './profile/register-restaurant-mock'
import { updateProfileMock } from './profile/update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
