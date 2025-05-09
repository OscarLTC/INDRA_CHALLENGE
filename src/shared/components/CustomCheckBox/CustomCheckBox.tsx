import { Checkbox, type CheckboxChangeEvent } from 'primereact/checkbox'
import { FaCheck } from 'react-icons/fa6'
import styles from './CustomCheckBox.module.css'
interface Props {
  label: string
  checked: boolean
  onChange: (e: CheckboxChangeEvent) => void
}

export const CustomCheckBox = ({ label, checked, onChange }: Props) => {
  return (
    <div className={styles['checkbox-field__wrapper']}>
      <Checkbox
        checked={checked}
        inputId={label}
        onChange={onChange}
        icon={<FaCheck className={styles['checkbox-field__icon']} />}
        className={styles['checkbox-field__checkbox']}
      />
      <label htmlFor={label} className={styles['checkbox-field__label']}>
        {label}
      </label>
    </div>
  )
}
