import { FC, useContext } from 'react'

import { WikiContext } from '@/Contexts'

import { WIKI_BREADCRUMBS, WIKI_DIGIMON_NOT_FOUND } from '@/Utils/Texts'
import {
  DIGIMONS_BY_LEVELS_LIST,
  DIGIMONS_BY_ATTRIBUTE_LIST
} from '@/Utils/Constants/Digimons'

import { AuthedLayout } from '@/Components/Layouts'
import { TextAtom } from '@/Components/Atoms'
import {
  WikiDigimonMainInfoMolecule,
  WikiDigimonsListMolecule
} from '@/Components/Molecules'
import { WikiDigimonEvolutionsListOrganism } from '@/Components/Organisms'

import * as Styled from './Wiki.style'

export const WikiTemplate: FC = () => {
  const {
    wikiState: { digimonId, digimonInfo }
  } = useContext(WikiContext)

  return (
    <AuthedLayout
      breadcrumb={[
        {
          link: WIKI_BREADCRUMBS.WIKI.LINK,
          text: WIKI_BREADCRUMBS.WIKI.TEXT
        }
      ]}
    >
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
        <Styled.NoInfo>
          {[
            { ...DIGIMONS_BY_LEVELS_LIST },
            { ...DIGIMONS_BY_ATTRIBUTE_LIST }
          ].map((listItem) => (
            <details open>
              <summary>
                <TextAtom fs="20px" fw={500}>
                  {listItem.title}
                </TextAtom>
              </summary>

              <WikiDigimonsListMolecule digimonsList={{ ...listItem }} />
            </details>
          ))}
        </Styled.NoInfo>
      )}

      {digimonId && digimonInfo && (
        <Styled.DigimonInfo>
          <WikiDigimonMainInfoMolecule />

          {!!digimonInfo.evolvesInto?.length && (
            <WikiDigimonEvolutionsListOrganism />
          )}
        </Styled.DigimonInfo>
      )}
    </AuthedLayout>
  )
}
