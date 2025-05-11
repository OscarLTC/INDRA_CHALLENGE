import { describe, expect, it } from 'vitest'
import { computeUserAge } from './computeUserAge'

describe('computeUserAge util', () => {
  it('correctly calculates age given a date of birth', () => {
    const dob = '2003-12-30'
    const age = computeUserAge(dob)
    const now = new Date()
    const birth = new Date(dob)
    let expected = now.getFullYear() - birth.getFullYear()
    const hasHadBirthdayThisYear =
      now.getMonth() > birth.getMonth() ||
      (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
    if (!hasHadBirthdayThisYear) expected -= 1

    console.log(expected)
    expect(age).toBe(expected)
  })
})
