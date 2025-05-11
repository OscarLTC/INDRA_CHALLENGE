import { describe, expect, it } from 'vitest'
import { applyDiscount } from './applyDiscount'

describe('applyDiscount util', () => {
  const plans = [
    { name: 'Plan A', price: 100, description: [], age: 30 },
    { name: 'Plan B', price: 200, description: [], age: 50 },
  ]

  it('correctly applies a percentage discount', () => {
    const discounted = applyDiscount(plans, 10)
    expect(discounted[0].discount).toBe(100)
    expect(discounted[0].price).toBeCloseTo(90)
    expect(discounted[1].discount).toBe(200)
    expect(discounted[1].price).toBeCloseTo(180)
  })

  it('does not mutate the original array', () => {
    const original = JSON.parse(JSON.stringify(plans))
    applyDiscount(plans, 20)
    expect(plans).toEqual(original)
  })
})
