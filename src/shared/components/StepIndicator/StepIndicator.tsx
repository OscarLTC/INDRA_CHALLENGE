import { Fragment, memo } from 'react'
import { RxBorderDotted } from 'react-icons/rx'
import styles from './StepIndicator.module.css'
import { ProgressBar } from 'primereact/progressbar'

interface Props {
  steps: string[]
  current: number
}

export const StepIndicator = memo(({ steps, current }: Props) => {
  const total = steps.length
  const progress = total > 1 ? ((current - 1) / (total - 1)) * 100 : 0

  return (
    <div className={styles['steps']}>
      <div className={styles['steps__mobile']}>
        <span className={styles['steps__mobile-label']}>
          PASO {current} DE {total}
        </span>
        <ProgressBar
          color='#4F4FFF'
          value={progress}
          showValue={false}
          className={styles['steps__mobile-bar']}
        />
      </div>
      {steps.map((label, idx) => {
        const isActive = idx + 1 === current
        const ItemTag = isActive ? styles['step--active'] : styles['step']

        return (
          <Fragment key={idx}>
            {idx > 0 && <RxBorderDotted className={styles['separator']} />}
            <div className={ItemTag}>
              <div className={styles['step__dot']}>
                <span className={styles['step__number']}>{idx + 1}</span>
              </div>
              <span className={styles['step__label']}>{label}</span>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
})
