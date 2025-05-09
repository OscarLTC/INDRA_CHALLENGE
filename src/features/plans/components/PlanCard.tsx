import type { Plan } from '../types/plan'
import plnaHouse from '../assets/plan-house.svg'
import { Button } from 'primereact/button'

interface Props {
  plan: Plan
}

export const PlanCard = ({ plan }: Props) => {
  return (
    <div className='px-8 py-10 h-full gap-6 bg-white rounded-3xl shadow-2xl/100 shadow-[#AEACF3] backdrop-blur-2xl flex flex-col'>
      <div className='flex flex-col gap-2 '>
        <div
          className={`bg-[#7DF0BA] w-fit rounded-md flex py-0.5 px-2 text-[#141938] ${
            plan.recommended ? 'visible' : 'invisible'
          }`}
        >
          <span className='text-xs font-black leading-4'>Plan recomendado</span>
        </div>
        <div className='flex gap-4 text-[#141938] pb-6 border-b border-[#D7DBF5]'>
          <div className='flex flex-col gap-6'>
            <h4 className='flex font-black text-2xl leading-8'>{plan.name}</h4>
            <div className='flex flex-col text-[#7981B2]'>
              <span className='text-xs font-black leading-4 uppercase'>
                Costo del plan
              </span>
              {plan.discount ? (
                <span className='text-sm leading-8 line-through'>
                  ${plan.discount} antes
                </span>
              ) : null}
              <span className='text-[#141938] text-xl font-black leading-7'>
                ${plan.price} al mes
              </span>
            </div>
          </div>
          <img src={plnaHouse} alt='Icono' className='w-14 h-14 flex' />
        </div>
      </div>
      <ul className='list-disc list-outside pl-5   flex flex-col gap-6 text-[#141938]'>
        {plan.description.map((item, i) => (
          <li key={i} className='leading-7'>
            {item}
          </li>
        ))}
      </ul>
      <Button
        unstyled
        className='bg-[#FF1C44] w-full px-8 py-4 text-white rounded-full mt-auto cursor-pointer'
      >
        <span className='text-lg font-bold leading-5'>Seleccionar Plan</span>
      </Button>
    </div>
  )
}
