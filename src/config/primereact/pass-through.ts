import type { PrimeReactPTOptions } from 'primereact/api'
import type { CheckboxPassThroughOptions } from 'primereact/checkbox'
import type { DropdownPassThroughOptions } from 'primereact/dropdown'

const dropdownConfig: DropdownPassThroughOptions = {
  itemLabel: {
    className: 'p-2',
  },
}

const checkboxConfig: CheckboxPassThroughOptions = {
  box(options) {
    const checked = options?.context.checked
    return {
      className: `w-5 h-5 rounded border border-black ${checked ? 'bg-black ' : ''}`,
    }
  },
}

export const PassThrough: PrimeReactPTOptions = {
  checkbox: checkboxConfig,
  dropdown: dropdownConfig,
}
