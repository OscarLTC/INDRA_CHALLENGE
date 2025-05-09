import { create } from 'zustand'
import type { LoginFormValues } from '../schemas/login.schema'
import { persist } from 'zustand/middleware'

interface LoginStore {
  summary:
    | (LoginFormValues & { name: string; lastName: string; birthDay: string })
    | null
  setSummary: (data: LoginStore['summary']) => void
}

export const useLoginStore = create<LoginStore>()(
  persist(
    (set) => ({
      summary: null,
      setSummary: (data) => set({ summary: data }),
    }),
    {
      name: 'login-summary',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name as string)
          return item ? JSON.parse(item) : null
        },
        setItem: (name, value) =>
          localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)
