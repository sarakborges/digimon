import { FC } from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <>
      <Styled.HomeTemplate>
        <Link to="/wiki">Go to wiki</Link>
      </Styled.HomeTemplate>
    </>
  )
}
