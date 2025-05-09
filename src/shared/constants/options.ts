import type { PlanOption } from '../../features/plans/types/plan'
import planMe from '../../features/plans/assets/plan-me.svg'
import planSomeone from '../../features/plans/assets/plan-someone.svg'

export const OPTIONS: PlanOption[] = [
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
