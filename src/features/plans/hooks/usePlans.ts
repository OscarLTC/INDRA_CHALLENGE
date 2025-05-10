import { useEffect } from 'react'
import { usePlansStore } from '../store/plansStore'
import { useLocation, useNavigate } from 'react-router'
import { useLoginStore } from '../../login/store/loginStore'

export const usePlans = () => {
  const navigate = useNavigate()
  const location = useLocation()
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
    if (selectedPlan && location.pathname !== '/plans/summary') {
      navigate('/plans/summary')
    }

    return () => {
      setType(null)
    }
  }, [location.pathname, navigate, selectedPlan, setType])

  return {
    plans,
    loading,
    location,
    navigate,
    error,
    selectedType,
    summary,
    selectType: setType,
    selectPlan,
    selectedPlan,
  }
}
