import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import App from './App'

test('My app works as expected', async () => {
  const user = UserEvent.setup()
  const app = render(<App />)

  const textareaFrom = app.getByPlaceholderText('Introducir texto')

  await user.type(textareaFrom, 'Hola Mundo')
  const result = await app.findByDisplayValue(/Hello world/i, {}, { timeout: 2000 })

  expect(result).toBeTruthy()
})
