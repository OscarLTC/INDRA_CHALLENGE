import type { Plan } from '../types/plan'
import plnaHouse from '../assets/plan-house.svg'
import { Button } from 'primereact/button'
import styles from './PlanCard.module.css'

interface Props {
  plan: Plan
}

export const PlanCard = ({ plan }: Props) => {
  return (
    <div className={styles['plan-card']}>
      <div className={styles['plan-card__header']}>
        <div
          className={`${styles['plan-card__badge']} ${
            plan.recommended ? '' : styles['plan-card__badge--hidden']
          }`}
        >
          <span className={styles['plan-card__badge--label']}>
            Plan recomendado
          </span>
        </div>
        <div className={styles['plan-card__info']}>
          <div className={styles['plan-card__details']}>
            <h4 className={styles['plan-card__name']}>{plan.name}</h4>
            <div className={styles['plan-card__pricing']}>
              <span className={styles['plan-card__pricing-label']}>
                Costo del plan
              </span>
              {plan.discount ? (
                <span className={styles['plan-card__old-price']}>
                  ${plan.discount} antes
                </span>
              ) : null}
              <span className={styles['plan-card__current-price']}>
                ${plan.price} al mes
              </span>
            </div>
          </div>
          <img
            src={plnaHouse}
            alt='Icono'
            className={styles['plan-card__icon']}
          />
        </div>
      </div>
      <ul className={styles['plan-card__features']}>
        {plan.description.map((item, i) => (
          <li key={i} className={styles['plan-card__feature-item']}>
            {item}
          </li>
        ))}
      </ul>
      <Button unstyled className={styles['plan-card__button']}>
        <span className={styles['plan-card__button-text']}>
          Seleccionar Plan
        </span>
      </Button>
    </div>
  )
}
