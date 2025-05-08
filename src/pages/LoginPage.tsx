import { Button } from 'primereact/button'
import { CustomCheckBox } from '../components/CustomCheckBox'
import { DocumentField } from '../components/DocumentField'
import { InputText } from 'primereact/inputtext'
import { Footer } from '../layout/Footer'

export const LoginPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen relative'>
      <div className='flex  w-full justify-center max-w-[90rem] m-auto'>
        <div className='max-w-[480px] '>
          <img
            src='/src/assets/img/portada-login.png'
            alt='background'
            className='object-cover rounded-3xl z-20'
          />
        </div>
        <div className='flex flex-col gap-6 max-w-[352px] ml-[128px]'>
          <div className='flex flex-col gap-4'>
            <div className='w-fit bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] rounded-sm px-2 py-1 '>
              <span className='font-bold text-sm leading-4 tracking-[0.4px]'>
                Seguro Salud Flexible
              </span>
            </div>
            <h1 className='font-bold text-[32px] '>
              Creado para ti y tu familia
            </h1>
            <p className='font-semibold text-[14px] text-sm'>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
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
              className='p-inputtext-sm border border-[#5E6488] rounded-lg p-4 ring-0 outline-none'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <CustomCheckBox
              label='Acepto la Política de Tratamiento de Datos Personales'
              checked
            />
            <CustomCheckBox
              label='Acepto la Política Comunicaciones Comerciales'
              checked
            />

            <span className='font-semibold text-xs leading-5 tracking-[0.1px] underline'>
              Aplican Términos y Condiciones.
            </span>
          </div>
          <Button className='bg-[#03050F] text-white w-fit font-bold text-xl leading-6 tracking-[0.4px] px-10 py-5 rounded-4xl ring-0 outline-none'>
            Cotiza aquí
          </Button>
        </div>
      </div>
      <Footer />
      <div className='absolute -top-20 h-full left-0 z-10'>
        <img
          src='/src/assets/img/login/blur-purple.png'
          alt='background'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='absolute -top-20 right-0  z-10'>
        <img
          src='/src/assets/img/login/blur-cyan.png'
          alt='background'
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  )
}
