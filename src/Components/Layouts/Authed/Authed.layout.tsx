import { FC } from 'react'

import { AuthedLayoutProps } from './Authed.props'

import * as Styled from './Authed.style'

export const AuthedLayout: FC<AuthedLayoutProps> = ({ children }) => {
  return <Styled.AuthedLayout>{children}</Styled.AuthedLayout>
}
