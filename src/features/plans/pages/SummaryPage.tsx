import { Button } from 'primereact/button'
import { usePlans } from '../hooks/usePlans'
import { FaUserGroup } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

export const SummaryPage = () => {
  const { summary, selectedPlan, selectPlan } = usePlans()
  const navigate = useNavigate()

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className=' flex flex-col min-w-4xl justify-center'>
        <h1 className='text-4xl font-bold leading-12'>Resumen del seguro</h1>
        <div className='flex flex-col gap-4 px-8 py-6 bg-white shadow-md shadow-[#AEACF340] rounded-3xl mt-8'>
          <div className='flex flex-col gap-2 border-b border-[#D7DBF5] pb-4'>
            <p className='uppercase text-xs font-black'>
              Precios Calculados Para:
            </p>
            <div className='flex items-center gap-3'>
              <FaUserGroup className='w-6 h-6' />
              <span className='text-xl font-bold'>{`${summary?.name} ${summary?.lastName}`}</span>
            </div>
          </div>
          <div className='flex flex-col gap-1 text-[#141938]'>
            <p className=' font-bold text-[#4B4B4D]'>Responsable de pago</p>
            <div className='text-sm text-[#141938] leading-6 flex gap-1'>
              <span>DNI:</span>
              <span>{summary?.docNumber}</span>
            </div>
            <div className='text-sm text-[#141938] leading-6 flex gap-1'>
              <span>Celular:</span>
              <span>{summary?.phone}</span>
            </div>
            <div></div>
          </div>
          <div className='flex flex-col gap-1 text-[#141938]'>
            <p className=' font-bold text-[#4B4B4D]'>Plan elegido</p>
            <div className='text-sm text-[#141938] leading-6 flex gap-1'>
              <span>{selectedPlan?.name}</span>
            </div>
            <div className='text-sm text-[#141938] leading-6 flex gap-1'>
              <span>Costo del Plan:</span>
              <span>${selectedPlan?.price} al mes</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Button
        label='back'
        onClick={() => {
          selectPlan(null)
          navigate(-1)
        }}
      />
    </div>
  )
}
