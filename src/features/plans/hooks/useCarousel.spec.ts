import { describe, it, expect } from 'vitest'
import { useCarousel } from './useCarousel'
import { renderHook } from '@testing-library/react'
import { act } from 'react'

describe('useCarousel hook', () => {
  const items = [1, 2, 3]

  it('initializes at index 0 and cycles next/prev correctly', () => {
    const { result } = renderHook(() => useCarousel(items))
    expect(result.current.current).toBe(0)

    act(() => result.current.next())
    expect(result.current.current).toBe(1)

    act(() => result.current.prev())
    expect(result.current.current).toBe(0)

    act(() => result.current.prev())
    expect(result.current.current).toBe(items.length - 1)
  })
})
