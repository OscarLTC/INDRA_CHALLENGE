import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import styles from './DocumentField.module.css'
import { docTypes } from '../../constants'

interface Props {
  type: string
  number: string
  onTypeChange: (value: string) => void
  onNumberChange: (value: string) => void
}

export const DocumentField = ({
  type,
  number,
  onTypeChange,
  onNumberChange,
}: Props) => {
  return (
    <div className={'p-inputgroup ' + styles['document-field']}>
      <Dropdown
        value={type}
        options={docTypes}
        onChange={(e) => onTypeChange(e.value)}
        className={styles['document-field__dropdown']}
        placeholder='Tipo'
      />
      <InputText
        value={number}
        onChange={(e) => onNumberChange(e.target.value)}
        placeholder='N° de documento'
        className={styles['document-field__input']}
      />
    </div>
  )
}
