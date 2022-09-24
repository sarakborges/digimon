import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'

import {
  DIGIMONS_ATTRIBUTES,
  DIGIMONS_FAMILIES,
  DIGIMON_INFO,
  DIGIMON_LEVELS
} from '@/Utils/Texts'
import { DigimonFamilies } from '@/Utils/Props'

import { TextAtom } from '@/Components/Atoms'

import { EvolutionItemMoleculeProps } from './EvolutionItem.props'

import * as Styled from './EvolutionItem.style'

export const EvolutionItemMolecule: FC<{
  evolutionItem: EvolutionItemMoleculeProps
}> = ({ evolutionItem }) => {
  if (!evolutionItem.digimon) {
    return <></>
  }

  return (
    <Styled.EvolutionDigimon>
      <Link to={`/wiki/${evolutionItem.digimon.id}`}>
        <Styled.DigimonPortrait>
          <img
            src={`/Images/Digimon/${evolutionItem.digimon.id}.webp`}
            alt={evolutionItem.digimon.name}
          />
        </Styled.DigimonPortrait>

        <Styled.EvolutionInfo>
          <Styled.DigimonInfo>
            <TextAtom fw={500}>{evolutionItem.digimon.name}</TextAtom>

            <TextAtom fw={300} fs="12px" lh={1.4}>
              <span>{DIGIMON_INFO.LEVEL}:</span>
              {DIGIMON_LEVELS[evolutionItem.digimon.level]}
            </TextAtom>

            <TextAtom fw={300} fs="12px" lh={1.4}>
              <span>{DIGIMON_INFO.ATTRIBUTE}:</span>

              <Styled.DigimonAttributes>
                <img
                  src={`/Images/Attributes/${evolutionItem.digimon.attribute}.png`}
                  alt={DIGIMONS_ATTRIBUTES[evolutionItem.digimon.attribute]}
                />
              </Styled.DigimonAttributes>
            </TextAtom>

            <TextAtom fw={300} fs="12px" lh={1.4}>
              <span>{DIGIMON_INFO.FAMILIES}:</span>

              <Styled.DigimonFamilies>
                {evolutionItem.digimon.families.map((family) => (
                  <img
                    src={`/Images/Families/${family}.webp`}
                    alt={DIGIMONS_FAMILIES[family]}
                  />
                ))}
              </Styled.DigimonFamilies>
            </TextAtom>
          </Styled.DigimonInfo>

          {!!evolutionItem.conditions?.length && (
            <Styled.EvolutionConditions>
              <TextAtom fw={500}>Requires</TextAtom>

              {evolutionItem.conditions.map((condition) => (
                <Fragment
                  key={`${evolutionItem.digimon?.id}-${condition.type}-${
                    condition.family || ''
                  }`}
                >
                  {condition.type === 'data' && (
                    <div>
                      <img
                        src={`/Images/Families/${condition.family}.webp`}
                        alt={DIGIMONS_FAMILIES[condition.family!]}
                      />

                      <Styled.ProgressBar
                        currentValue={6}
                        maxValue={condition.ammount}
                      >
                        <TextAtom
                          fs="12px"
                          fc="progressBarText"
                        >{`6 / ${condition.ammount}`}</TextAtom>
                      </Styled.ProgressBar>
                    </div>
                  )}
                </Fragment>
              ))}
            </Styled.EvolutionConditions>
          )}
        </Styled.EvolutionInfo>
      </Link>
    </Styled.EvolutionDigimon>
  )
}
