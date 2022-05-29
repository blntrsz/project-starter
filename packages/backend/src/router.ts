import { createRouter } from './create-router'
import { nameRouter } from "./name"

export const appRouter = createRouter().merge('names.', nameRouter)

export type AppRouter = typeof appRouter
