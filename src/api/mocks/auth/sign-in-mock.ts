import { http, HttpResponse } from 'msw'

import type { SignInBody } from '../auth/sign-in'

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()
    if (email === 'ana@email.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
