import type { Plan } from '../types/plan'

export const applyDiscount = (plans: Plan[], percent: number): Plan[] => {
  return plans.map((p) => ({
    ...p,
    discount: p.price,
    price: parseFloat((p.price * (1 - percent / 100)).toFixed(2)),
  }))
}
