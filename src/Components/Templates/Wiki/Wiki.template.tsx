import { FC, useContext } from 'react'

import { WikiContext } from '@/Contexts'

import { WIKI_DIGIMON_NOT_FOUND, WIKI_NO_DIGIMON } from '@/Utils/Texts'

import { TextAtom } from '@/Components/Atoms'
import {
  WikiBreadcrumbsMolecule,
  WikiDigimonMainInfoMolecule
} from '@/Components/Molecules'
import {
  WikiSidebarOrganism,
  WikiDigimonEvolutionsListOrganism
} from '@/Components/Organisms'

import * as Styled from './Wiki.style'

export const WikiTemplate: FC = () => {
  const {
    wikiState: { digimonId, digimonInfo }
  } = useContext(WikiContext)

  return (
    <Styled.WikiTemplate>
      <WikiSidebarOrganism />

      <Styled.MainContent>
        <WikiBreadcrumbsMolecule />

        {digimonId && !digimonInfo && (
          <>
            <Styled.NoInfo>
              <TextAtom fs="20px" fw={300}>
                {WIKI_DIGIMON_NOT_FOUND}
              </TextAtom>
            </Styled.NoInfo>
          </>
        )}

        {!digimonId && (
          <>
            <Styled.NoInfo>
              <TextAtom fs="20px" fw={300}>
                {WIKI_NO_DIGIMON}
              </TextAtom>
            </Styled.NoInfo>
          </>
        )}

        {digimonId && digimonInfo && (
          <Styled.DigimonInfo>
            <WikiDigimonMainInfoMolecule />

            {digimonInfo.evolvesInto?.length && (
              <WikiDigimonEvolutionsListOrganism />
            )}
          </Styled.DigimonInfo>
        )}
      </Styled.MainContent>
    </Styled.WikiTemplate>
  )
}
