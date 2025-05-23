import { InputMask } from 'primereact/inputmask'
import { Button } from 'primereact/button'
import styles from './LoginForm.module.css'
import { useLogin } from '../../hooks/useLogin'
import { Controller } from 'react-hook-form'
import { LuLoaderCircle } from 'react-icons/lu'
import { CustomCheckBox, DocumentField } from '../../../../shared/components'

export const LoginForm = () => {
  const { control, register, handleSubmit, errors, isSubmitting, loadingUser } =
    useLogin()

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']} noValidate>
      <div className={styles['login-form__group']}>
        <Controller
          control={control}
          name='docType'
          render={({ field: { value: docType, onChange: onTypeChange } }) => (
            <Controller
              control={control}
              name='docNumber'
              render={({
                field: { value: docNumber, onChange: onNumberChange },
              }) => (
                <div className={styles['login-controller']}>
                  <DocumentField
                    type={docType}
                    number={docNumber}
                    onTypeChange={onTypeChange}
                    onNumberChange={onNumberChange}
                  />
                  {errors.docNumber && (
                    <small className={styles['login-form__input-error']}>
                      {errors.docNumber.message}
                    </small>
                  )}
                </div>
              )}
            />
          )}
        />

        <Controller
          control={control}
          name='phone'
          render={({ field: { value: phone, onChange } }) => (
            <div className={styles['login-controller']}>
              <InputMask
                {...register('phone')}
                mask='999999999'
                value={phone}
                onChange={(e) => onChange(e.target.value)}
                placeholder='Celular'
                className={styles['login-form__input']}
              />
              {errors.phone && (
                <small className={styles['login-form__input-error']}>
                  {errors.phone.message}
                </small>
              )}
            </div>
          )}
        />
      </div>
      <div className={styles['login-form__checkboxes']}>
        <Controller
          control={control}
          name='acceptPrivacy'
          render={({ field }) => (
            <CustomCheckBox
              checked={field.value}
              onChange={(e) => field.onChange(e.checked)}
              label='Acepto la Política de Privacidad'
            />
          )}
        />
        <Controller
          control={control}
          name='acceptComm'
          render={({ field }) => (
            <CustomCheckBox
              checked={field.value}
              onChange={(e) => field.onChange(e.checked)}
              label='Acepto la Política Comunicaciones Comerciales'
            />
          )}
        />
        {(errors.acceptPrivacy || errors.acceptComm) && (
          <small className={styles['login-form__input-error']}>
            {errors.acceptPrivacy?.message || errors.acceptComm?.message}
          </small>
        )}

        <span className={styles['login-form__terms']}>
          Aplican Términos y Condiciones.
        </span>
      </div>
      <Button
        type='submit'
        disabled={isSubmitting || loadingUser}
        className={styles['login-form__button']}
        loadingIcon={<LuLoaderCircle />}
      >
        Cotiza aquí
      </Button>
    </form>
  )
}
