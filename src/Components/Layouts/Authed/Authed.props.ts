import { ReactNode } from 'react'

export interface AuthedLayoutProps {
  children?: ReactNode
  breadcrumb?: Array<{
    link: string
    text: string
  }>
}
