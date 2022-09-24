import { FC } from 'react'

import { AuthedLayoutProps } from './Authed.props'

import { BreadcrumbsMolecule } from '@/Components/Molecules'
import { WikiSidebarOrganism } from '@/Components/Organisms'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<AuthedLayoutProps> = ({
  children,
  breadcrumb
}) => {
  return (
    <Styled.AuthedLayout>
      <Styled.AuthedContent>
        <WikiSidebarOrganism />

        <Styled.MainContent>
          <BreadcrumbsMolecule breadcrumbItems={breadcrumb} />

          <>{children}</>
        </Styled.MainContent>
      </Styled.AuthedContent>
    </Styled.AuthedLayout>
  )
}
