import type { Plan } from '../types/plan'
import { PlanCard } from './PlanCard'

interface Props {
  plans: Plan[]
}

export const PlanList = ({ plans }: Props) => {
  return (
    <div className='grid sm:grid-cols-3 max-w-4xl pb-10 justify-center mx-auto gap-8 mt-10 bg-[#F8F9FF]'>
      {plans.map((plan, i) => (
        <PlanCard key={i} plan={plan} />
      ))}
    </div>
  )
}
