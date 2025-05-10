import { useLoginStore } from '../../login/store/loginStore'
import { LuCircleArrowLeft } from 'react-icons/lu'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router'
import styles from './PlansPage.module.css'
import { PlanList, PlanOption, type PlanType } from '../components'
import { OPTIONS } from '../../../shared/constants/options'
import { usePlans } from '../hooks/usePlans'

export const PlansPage = () => {
  const { summary } = useLoginStore()
  const navigate = useNavigate()

  const { plans, selectedType, selectType, selectPlan } = usePlans()

  const onPlanSelection = (planType: PlanType) => {
    selectType(planType)
  }

  const onGoBack = () => {
    selectPlan(null)
    navigate(-1)
  }

  return (
    <div className={styles['plans-page']}>
      <Button onClick={onGoBack} className={styles['plans-page__back-button']}>
        <LuCircleArrowLeft className={styles['plans-page__back-button-icon']} />
        <span className={styles['plans-page__back-button-text']}>Volver</span>
      </Button>

      <section className={styles['plans-page__intro']}>
        <h1 className={styles['plans-page__intro-title']}>
          {`${summary?.name} ¿Para quién deseas cotizar?`}
        </h1>
        <p className={styles['plans-page__intro-text']}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </section>
      <section className={styles['plans-page__options']}>
        {OPTIONS.map((option) => (
          <PlanOption
            key={option.type}
            option={option}
            selected={selectedType === option.type}
            onSelect={onPlanSelection}
          />
        ))}
      </section>
      {selectedType && <PlanList plans={plans} selectPlan={selectPlan} />}
    </div>
  )
}
