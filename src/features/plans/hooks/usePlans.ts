import { useEffect } from 'react'
import { usePlansStore } from '../store/plansStore'
import { useLoginStore } from '../../login/store/loginStore'

export const usePlans = () => {
  const summary = useLoginStore((s) => s.summary)

  const {
    plans,
    selectedType,
    selectedPlan,
    loading,
    error,
    fetchAllPlans,
    setType,
    selectPlan,
  } = usePlansStore()

  useEffect(() => {
    if (summary) fetchAllPlans()
  }, [fetchAllPlans, summary])

  useEffect(() => {
    return () => {
      setType(null)
    }
  }, [setType])

  return {
    plans,
    loading,
    error,
    selectedType,
    summary,
    selectType: setType,
    selectPlan,
    selectedPlan,
  }
}
