import { FC } from 'react'

import { WIKI_TITLE } from '@/Utils/Texts'

import { TextAtom } from '@/Components/Atoms'
import { WikiDigimonsListMolecule } from '@/Components/Molecules'

import * as Styled from './WikiSidebar.style'

export const WikiSidebarOrganism: FC = () => {
  return (
    <Styled.Sidebar>
      <Styled.SidebarContent>
        <li>
          <TextAtom fs="24px" fw={700}>
            {WIKI_TITLE}
          </TextAtom>
        </li>

        <WikiDigimonsListMolecule />
      </Styled.SidebarContent>
    </Styled.Sidebar>
  )
}
