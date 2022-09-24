import { FC } from 'react'

import { AuthedLayout } from '@/Components/Layouts'

import { HomeTemplate } from '@/Components/Templates'

export const HomePage: FC = () => {
  return (
    <AuthedLayout>
      <HomeTemplate />
    </AuthedLayout>
  )
}
