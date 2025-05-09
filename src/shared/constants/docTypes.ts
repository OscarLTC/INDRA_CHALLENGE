export type DocTypeValue = 'dni' | 'carne'

export interface DocType {
  label: string
  value: DocTypeValue
}

export const docTypes: DocType[] = [
  { label: 'DNI', value: 'dni' },
  { label: 'CE', value: 'carne' },
]
