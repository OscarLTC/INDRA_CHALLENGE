import type { PlanType } from '../components'

export interface Plan {
  name: string
  price: number
  description: string[]
  age: number
  recommended?: boolean
  discount?: number
  imgSrc?: string
}

export interface PlanOption {
  type: PlanType
  title: string
  description: string
  imgSrc: string
}
