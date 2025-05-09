import type { Plan } from '../types/plan'
import { PlanCard } from './PlanCard'
import styles from './PlanList.module.css'

interface Props {
  plans: Plan[]
}

export const PlanList = ({ plans }: Props) => {
  return (
    <div className={styles['plan-list']}>
      {plans.map((plan, i) => (
        <PlanCard key={i} plan={plan} />
      ))}
    </div>
  )
}
