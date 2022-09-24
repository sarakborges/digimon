import { FC, useContext } from 'react'

import { WikiContext } from '@/Contexts'

import { DIGIMON_INFO } from '@/Utils/Texts'
import { DIGIMONS_ALL } from '@/Utils/Constants/Digimons'

import { TextAtom } from '@/Components/Atoms'
import { EvolutionItemMolecule } from '@/Components/Molecules'

import { WikiDigimonEvolutionsListProps } from './WikiDigimonEvolutionsList.props'

import * as Styled from './WikiDigimonEvolutionsList.style'
import { DigimonProps } from '@/Utils/Props'

export const WikiDigimonEvolutionsListOrganism: FC = () => {
  const {
    wikiState: { digimonId, digimonInfo }
  } = useContext(WikiContext)

  const evolutions: undefined | Array<WikiDigimonEvolutionsListProps> =
    digimonInfo?.evolvesInto?.length
      ? digimonInfo.evolvesInto.map((evolutionItem) => {
          const digimonInfo: DigimonProps | undefined = DIGIMONS_ALL.find(
            (digimonItem) => digimonItem.id === evolutionItem.digimon
          )

          return {
            ...evolutionItem,
            digimon: digimonInfo
          }
        })
      : undefined

  return (
    <>
      {digimonId && digimonInfo && (
        <>
          {evolutions?.length && (
            <Styled.EvolvesInto>
              <TextAtom fw={500}>{DIGIMON_INFO.EVOLVES_INTO}:</TextAtom>

              <Styled.Evolutions>
                {evolutions.map((evolutionItem) => (
                  <EvolutionItemMolecule
                    key={evolutionItem.id}
                    evolutionItem={evolutionItem}
                  />
                ))}
              </Styled.Evolutions>
            </Styled.EvolvesInto>
          )}
        </>
      )}
    </>
  )
}
