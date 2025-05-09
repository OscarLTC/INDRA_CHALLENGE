import { Button } from 'primereact/button'
import { LuCheck } from 'react-icons/lu'
import styles from './PlanOption.module.css'

export type PlanType = 'me' | 'someone' | null

type Option = {
  type: PlanType
  title: string
  description: string
  imgSrc: string
}

interface Props {
  option: Option
  selected: boolean
  onSelect: (type: PlanType) => void
}

export const PlanOption = ({ onSelect, selected, option }: Props) => {
  return (
    <Button
      unstyled
      onClick={() => onSelect(option.type)}
      className={
        `${styles['plan-option__button']} ` +
        (selected
          ? styles['plan-option__button--selected']
          : styles['plan-option__button--unselected'])
      }
    >
      <div
        className={
          `${styles['plan-option__indicator']} ` +
          (selected
            ? styles['plan-option__indicator--selected']
            : styles['plan-option__indicator--unselected'])
        }
      >
        <LuCheck className={styles['plan-option__icon']} />
      </div>

      <div className={styles['plan-option__content']}>
        <div className={styles['plan-option__header']}>
          <img
            src={option.imgSrc}
            alt={option.title}
            className={styles['plan-option__image']}
          />
          <h2 className={styles['plan-option__title']}>{option.title}</h2>
        </div>
        <p className={styles['plan-option__description']}>
          {option.description}
        </p>
      </div>
    </Button>
  )
}
