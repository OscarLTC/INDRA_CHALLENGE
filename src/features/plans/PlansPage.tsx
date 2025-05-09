import { useLoginStore } from '../login/store/loginStore'
import { useState } from 'react'
import { LuCircleArrowLeft } from 'react-icons/lu'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router'
import { PlanOption, type PlanType } from './components/PlanOption'
import planMe from './assets/plan-me.svg'
import planSomeone from './assets/plan-someone.svg'
import { PlanList } from './components/PlanList'
import styles from './PlansPage.module.css'

type Option = {
  type: PlanType
  title: string
  description: string
  imgSrc: string
}

const OPTIONS: Option[] = [
  {
    type: 'me',
    title: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    imgSrc: planMe,
  },
  {
    type: 'someone',
    title: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    imgSrc: planSomeone,
  },
]

export const PlansPage = () => {
  const { summary } = useLoginStore()
  const navigate = useNavigate()
  const [planType, setPlanType] = useState<null | 'me' | 'someone'>(null)

  const onPlanSelection = (planType: null | 'me' | 'someone') => {
    setPlanType(planType)
  }

  const onGoBack = () => navigate(-1)

  return (
    <div className={styles['plans-page']}>
      <Button onClick={onGoBack} className={styles['plans-page__back-button']}>
        <LuCircleArrowLeft className={styles['plans-page__back-button-icon']} />
        <span className={styles['plans-page__back-button-text']}>Volver</span>
      </Button>

      <section className={styles['plans-page__intro']}>
        <h1 className={styles['plans-page__intro-title']}>
          {`${summary?.name} ¿Para quién deseas cotizar?`}
        </h1>
        <p className={styles['plans-page__intro-text']}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </section>
      <section className={styles['plans-page__options']}>
        {OPTIONS.map((option) => (
          <PlanOption
            key={option.type}
            option={option}
            selected={planType === option.type}
            onSelect={onPlanSelection}
          />
        ))}
      </section>
      {planType && (
        <PlanList
          plans={[
            {
              name: 'Plan en Casa',
              price: 39,
              description: [
                'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
                'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
                'Indemnización de S/300 en caso de hospitalización por más de un día.',
              ],
              age: 60,
              discount: 12,
            },
            {
              name: 'Plan en Casa y Clínica',
              price: 99,
              description: [
                'Consultas en clínica para cualquier especialidad.',
                'Medicinas y exámenes derivados cubiertos al 80%.',
                'Atención médica en más de 200 clínicas del país.',
              ],
              age: 70,
              recommended: true,
            },
            {
              name: 'Plan en Casa + Bienestar',
              price: 70,
              description: [
                'Videoconsulta con especialistas de psicología y nutrición.',
                'Acceso a videos y recursos sobre bienestar.',
                'Incluye todos los beneficios del Plan en Casa.',
              ],
              age: 25,
            },
          ]}
        />
      )}
    </div>
  )
}
