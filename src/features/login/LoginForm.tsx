import { InputText } from 'primereact/inputtext'
import { DocumentField } from '../../shared/components/DocumentField'
import { CustomCheckBox } from '../../shared/components/CustomCheckBox'
import { Button } from 'primereact/button'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
  return (
    <form className={styles['login-form']}>
      <div className={styles['login-form__group']}>
        <DocumentField
          number='123123123'
          onNumberChange={() => {}}
          onTypeChange={() => {}}
          type='dni'
        />
        <InputText
          value='123123123'
          onChange={() => {}}
          placeholder='Teléfono'
          className={styles['login-form__input']}
        />
      </div>
      <div className={styles['login-form__checkboxes']}>
        <CustomCheckBox label='Acepto la Política de Privacidad' checked />
        <CustomCheckBox
          label='Acepto la Política Comunicaciones Comerciales'
          checked
        />

        <span className={styles['login-form__terms']}>
          Aplican Términos y Condiciones.
        </span>
      </div>
      <Button className={styles['login-form__button']}>Cotiza aquí</Button>
    </form>
  )
}
