import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator component', () => {
  const steps = ['One', 'Two', 'Three']

  it('displays the mobile progress label correctly', () => {
    render(<StepIndicator steps={steps} current={2} />)
    expect(screen.getByText('PASO 2 DE 3')).toBeInTheDocument()
  })

  it('renders all step labels', () => {
    render(<StepIndicator steps={steps} current={2} />)
    steps.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
