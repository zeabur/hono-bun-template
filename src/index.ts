import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

console.log('Hono server is running on http://localhost:' + (process.env.PORT || 3000))

export default app
