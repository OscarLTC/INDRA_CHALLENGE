import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { fetchUser } from '../../../api/user'
import { loginSchema, type LoginFormValues } from '../schemas/login.schema'
import { useLoginStore } from '../store/loginStore'

export const useLogin = () => {
  const navigate = useNavigate()

  const [loadingUser, setLoadingUser] = useState<boolean>(false)
  const { setSummary } = useLoginStore()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      docType: 'dni',
      docNumber: '',
      phone: '',
      acceptPrivacy: false,
      acceptComm: false,
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = form

  const onSubmit = async (data: LoginFormValues) => {
    if (loadingUser) return

    setLoadingUser(true)

    try {
      const user = await fetchUser()

      if (!user.name || !user.lastName || !user.birthDay) {
        console.error('User data is incomplete')
        return
      }

      const summary = {
        ...data,
        name: user.name,
        lastName: user.lastName,
        birthDay: user.birthDay,
      }
      setSummary(summary)

      navigate('/summary')
    } catch (err) {
      console.error('Error fetching user:', err)
    } finally {
      setLoadingUser(false)
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    loadingUser,
    control,
    setValue,
  }
}
