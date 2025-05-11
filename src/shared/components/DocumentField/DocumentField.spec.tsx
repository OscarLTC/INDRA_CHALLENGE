/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

vi.mock('primereact/dropdown', () => ({
  Dropdown: ({ value, options, onChange, placeholder }: any) => (
    <select
      data-testid='mock-dropdown'
      value={value}
      aria-placeholder={placeholder}
      onChange={(e) => onChange({ value: e.target.value })}
    >
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
}))

import { DocumentField } from './DocumentField'

describe('DocumentField component', () => {
  const onTypeChange = vi.fn()
  const onNumberChange = vi.fn()

  beforeEach(() => {
    onTypeChange.mockClear()
    onNumberChange.mockClear()
  })

  it('renders select with initial value and input field', () => {
    render(
      <DocumentField
        type='dni'
        number='12345678'
        onTypeChange={onTypeChange}
        onNumberChange={onNumberChange}
      />
    )
    const dropdown = screen.getByTestId('mock-dropdown')
    expect(dropdown).toHaveValue('dni')

    const input = screen.getByPlaceholderText('N° de documento')
    expect(input).toHaveValue('12345678')
  })

  it('calls onTypeChange when dropdown value changes', () => {
    render(
      <DocumentField
        type='dni'
        number=''
        onTypeChange={onTypeChange}
        onNumberChange={onNumberChange}
      />
    )
    const dropdown = screen.getByTestId('mock-dropdown')
    fireEvent.change(dropdown, { target: { value: 'carne' } })
    expect(onTypeChange).toHaveBeenCalledWith('carne')
  })

  it('calls onNumberChange when input value changes', () => {
    render(
      <DocumentField
        type='dni'
        number=''
        onTypeChange={onTypeChange}
        onNumberChange={onNumberChange}
      />
    )
    const input = screen.getByPlaceholderText('N° de documento')
    fireEvent.change(input, { target: { value: '87654321' } })
    expect(onNumberChange).toHaveBeenCalledWith('87654321')
  })
})
