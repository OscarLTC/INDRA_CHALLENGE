import { useEffect } from 'react'
import { usePlansStore } from '../store/plansStore'
import { useNavigate } from 'react-router'
import { useLoginStore } from '../../login/store/loginStore'

export const usePlans = () => {
  const navigate = useNavigate()
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
    if (selectedPlan) {
      navigate('/plans/summary', { state: { plan: selectedPlan } })
    }
  }, [navigate, selectedPlan])

  return {
    plans,
    loading,
    error,
    selectedType,
    selectType: setType,
    selectPlan,
  }
}
