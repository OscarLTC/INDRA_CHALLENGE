/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { fetchPlans } from '../../../api/plan'
import type { Plan } from '../types/plan'
import { useLoginStore } from '../../login/store/loginStore'
import { applyDiscount, computeUserAge } from '../utils'
import type { PlanType } from '../components'

interface PlansState {
  allPlans: Plan[]
  plans: Plan[]
  selectedType: PlanType | null
  selectedPlan: Plan | null
  loading: boolean
  error: string | null

  fetchAllPlans: () => Promise<void>
  setType: (type: PlanType) => void
  selectPlan: (plan: Plan) => void
}

export const usePlansStore = create<PlansState>((set, get) => ({
  allPlans: [],
  plans: [],
  selectedType: null,
  selectedPlan: null,
  loading: false,
  error: null,

  fetchAllPlans: async () => {
    const summary = useLoginStore.getState().summary
    if (!summary) return
    set({ loading: true, error: null })
    try {
      const data = await fetchPlans()
      set({ allPlans: data })
    } catch (e: any) {
      set({ error: e.message ?? 'Error fetching plans' })
    } finally {
      set({ loading: false })
    }
  },

  setType: (type) => {
    const summary = useLoginStore.getState().summary!
    const age = computeUserAge(summary.birthDay)
    let filtered = get().allPlans.filter((p) => age <= p.age)

    if (type === 'someone') {
      filtered = applyDiscount(filtered, 5)
    }
    set({ selectedType: type, plans: filtered })
  },

  selectPlan: (plan) => {
    set({ selectedPlan: plan })
  },
}))
