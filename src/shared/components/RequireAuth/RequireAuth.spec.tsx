import { describe, it, expect, vi, afterEach } from 'vitest'
import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('../../../features/login/store/loginStore', () => ({
  useLoginStore: vi.fn(),
}))
import { useLoginStore } from '../../../features/login/store/loginStore'
import { RequireAuth } from './RequireAuth'
import { MemoryRouter, Route, Routes } from 'react-router'

describe('RequireAuth component', () => {
  const TestComponent = () => <div>Protected</div>

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('redirects to login when no summary', () => {
    ;(useLoginStore as unknown as Mock).mockReturnValue({ summary: null })

    render(
      <MemoryRouter initialEntries={['/plans']}>
        <Routes>
          <Route path='/' element={<div>Login Page</div>} />
          <Route
            path='/plans'
            element={
              <RequireAuth>
                <TestComponent />
              </RequireAuth>
            }
          />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Login Page')).toBeInTheDocument()
  })

  it('renders children when summary exists', () => {
    ;(useLoginStore as unknown as Mock).mockReturnValue({
      summary: { name: 'Test' },
    })

    render(
      <MemoryRouter initialEntries={['/plans']}>
        <Routes>
          <Route
            path='/plans'
            element={
              <RequireAuth>
                <TestComponent />
              </RequireAuth>
            }
          />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Protected')).toBeInTheDocument()
  })
})
