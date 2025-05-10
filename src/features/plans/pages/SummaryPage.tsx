import { Button } from 'primereact/button'
import { usePlans } from '../hooks/usePlans'
import { FaUserGroup } from 'react-icons/fa6'
import { useNavigate } from 'react-router'
import { LuCircleArrowLeft } from 'react-icons/lu'
import styles from './SummaryPage.module.css'

export const SummaryPage = () => {
  const navigate = useNavigate()
  const { summary, selectedPlan, selectPlan } = usePlans()

  const onGoBack = () => {
    navigate(-1)
    selectPlan(null)
  }

  return (
    <article className={styles['summary-page']}>
      <Button
        onClick={onGoBack}
        className={styles['summary-page__back-button']}
      >
        <LuCircleArrowLeft
          className={styles['summary-page__back-button-icon']}
        />
        <span className={styles['summary-page__back-button-text']}>Volver</span>
      </Button>
      <div className={styles['summary-page__content']}>
        <h1 className={styles['summary-page__title']}>Resumen del seguro</h1>

        <div className={styles['summary-page__card']}>
          {/* Header de la tarjeta */}
          <div className={styles['summary-page__card-header']}>
            <p className={styles['summary-page__card-header-label']}>
              Precios Calculados Para:
            </p>
            <div className={styles['summary-page__user-info']}>
              <FaUserGroup className='w-6 h-6' />
              <span className={styles['summary-page__user-name']}>
                {summary?.name} {summary?.lastName}
              </span>
            </div>
          </div>

          {/* Sección: Responsable de pago */}
          <div className={styles['summary-page__section']}>
            <p className={styles['summary-page__section-title']}>
              Responsable de pago
            </p>
            <div className={styles['summary-page__info']}>
              <dt>DNI:</dt>
              <dd>{summary?.docNumber}</dd>
            </div>
            <div className={styles['summary-page__info']}>
              <dt>Celular:</dt>
              <dd>{summary?.phone}</dd>
            </div>
          </div>

          {/* Sección: Plan elegido */}
          <div className={styles['summary-page__section']}>
            <p className={styles['summary-page__section-title']}>
              Plan elegido
            </p>
            <div className={styles['summary-page__info']}>
              <dd>{selectedPlan?.name}</dd>
            </div>
            <div className={styles['summary-page__info']}>
              <dt>Costo del plan:</dt>
              <dd>${selectedPlan?.price} al mes</dd>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
