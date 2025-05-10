import { Button } from 'primereact/button'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { LuCircleChevronLeft } from 'react-icons/lu'
import styles from './WizardLayout.module.css'
import { StepIndicator } from '../../shared/components'

const STEPS = ['Planes y coberturas', 'Resumen']

export const WizardLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const currentStep = pathname.endsWith('/summary') ? 2 : 1

  const onGoBack = () => {
    navigate(-1)
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
