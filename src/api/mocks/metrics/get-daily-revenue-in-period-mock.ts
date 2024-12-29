import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/metrics/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '22/12/2024', receipt: 2000 },
    { date: '23/12/2024', receipt: 800 },
    { date: '24/12/2024', receipt: 8000 },
    { date: '25/12/2024', receipt: 540 },
    { date: '26/12/2024', receipt: 400 },
    { date: '27/12/2024', receipt: 700 },
    { date: '28/12/2024', receipt: 1000 },
  ])
})
