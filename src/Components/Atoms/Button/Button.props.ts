import { ComponentPropsWithoutRef } from 'react'

export interface ButtonAtomProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean
  secondary?: boolean
  round?: boolean
}
