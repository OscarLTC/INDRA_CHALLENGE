import type { Plan } from '../../types/plan'
import { PlanCard } from '../PlanCard/PlanCard'
import styles from './PlanList.module.css'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { Button } from 'primereact/button'
import { useCarousel } from '../../hooks/useCarousel'

interface Props {
  plans: Plan[]
  selectPlan: (plan: Plan) => void
}

export const PlanList = ({ plans, selectPlan }: Props) => {
  const {
    ref: carouselRef,
    current,
    next,
    prev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useCarousel(plans)

  return (
    <>
      <div className={styles['plan-list']}>
        {plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} onSelect={selectPlan} />
        ))}
      </div>
      <div className={styles['plan-carousel']}>
        <div className={styles['plan-carousel__container']}>
          <div
            ref={carouselRef}
            className={styles['plan-carousel__slides']}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} onSelect={selectPlan} />
            ))}
          </div>
        </div>
        <div className={styles['plan-carousel__controls']}>
          <Button onClick={prev} className={styles['plan-carousel__button']}>
            <LuChevronLeft className={styles['plan-carousel__button--icon']} />
          </Button>
          <span className={styles['plan-carousel__pagination']}>
            {current + 1} / {plans.length}
          </span>
          <Button onClick={next} className={styles['plan-carousel__button']}>
            <LuChevronRight className={styles['plan-carousel__button--icon']} />
          </Button>
        </div>
      </div>
    </>
  )
}
