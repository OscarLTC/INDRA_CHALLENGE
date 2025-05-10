import type { Plan } from '../../types/plan'
import { PlanCard } from '../PlanCard/PlanCard'
import styles from './PlanList.module.css'

interface Props {
  plans: Plan[]
  selectPlan: (plan: Plan) => void
}

export const PlanList = ({ plans, selectPlan }: Props) => {
  return (
    <div className={styles['plan-list']}>
      {plans.map((plan, i) => (
        <PlanCard key={i} plan={plan} onSelect={selectPlan} />
      ))}
    </div>
  )
}
