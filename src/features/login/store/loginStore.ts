import { create } from 'zustand'
import type { LoginFormValues } from '../schemas/login.schema'

interface LoginStore {
  summary:
    | (LoginFormValues & { name: string; lastName: string; birthDay: string })
    | null
  setSummary: (data: LoginStore['summary']) => void
}

export const useLoginStore = create<LoginStore>((set) => ({
  summary: null,
  setSummary: (data) => set({ summary: data }),
}))
