import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter, createContext } from 'backend'

export type AppRouter = typeof appRouter

export default createNextApiHandler({
  router: appRouter,
  createContext,
  batching: {
    enabled: true,
  },
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong', error)
    }
  },
})
