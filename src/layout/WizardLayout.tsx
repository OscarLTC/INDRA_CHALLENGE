import { Button } from 'primereact/button'
import { Outlet, useNavigate } from 'react-router'
import { LuCircleChevronLeft } from 'react-icons/lu'
import styles from './WizardLayout.module.css'
import { StepIndicator } from '../shared/components'
import { usePlans } from '../features/plans/hooks/usePlans'

const STEPS = ['Planes y coberturas', 'Resumen']

export const WizardLayout = () => {
  const navigate = useNavigate()
  const { selectPlan } = usePlans()

  const currentStep = location.pathname.endsWith('/summary') ? 2 : 1

  const onGoBack = () => {
    navigate(-1)
    selectPlan(null)
  }

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <Button
          unstyled
          icon={<LuCircleChevronLeft />}
          onClick={onGoBack}
          className={styles['backButton']}
        />
        <StepIndicator steps={STEPS} current={currentStep} />
      </div>
      <Outlet />
    </div>
  )
}
