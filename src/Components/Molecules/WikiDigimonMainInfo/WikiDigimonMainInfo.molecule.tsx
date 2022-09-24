import { FC, useContext, useEffect, useState } from 'react'

import { WikiContext } from '@/Contexts'

import {
  DIGIMONS_ATTRIBUTES,
  DIGIMONS_FAMILIES,
  DIGIMON_INFO,
  DIGIMON_LEVELS
} from '@/Utils/Texts'
import { DigimonFamilies } from '@/Utils/Props'

import { TextAtom } from '@/Components/Atoms'

import * as Styled from './WikiDigimonMainInfo.style'

export const WikiDigimonMainInfoMolecule: FC = () => {
  const {
    wikiState: { digimonId, digimonInfo }
  } = useContext(WikiContext)

  return (
    <>
      {digimonId && digimonInfo && (
        <>
          <img
            src={`/Images/Digimon/${digimonInfo.id}.webp`}
            alt={digimonInfo.name}
          />

          <Styled.DigimonName>
            <TextAtom fs="20px" fw={500}>
              {digimonInfo.name}
            </TextAtom>

            <TextAtom fw={300} lh={1.6}>
              {digimonInfo.description}
            </TextAtom>
          </Styled.DigimonName>

          <TextAtom fw={300} lh={1.4}>
            <span>{DIGIMON_INFO.LEVEL}:</span>
            {DIGIMON_LEVELS[digimonInfo.level]}
          </TextAtom>

          <TextAtom fw={300} lh={1.4}>
            <span>{DIGIMON_INFO.ATTRIBUTE}:</span>

            <Styled.DigimonAttributes>
              <img
                src={`/Images/Attributes/${digimonInfo.attribute}.png`}
                alt={DIGIMONS_ATTRIBUTES[digimonInfo.attribute]}
              />
            </Styled.DigimonAttributes>
          </TextAtom>

          <TextAtom fw={300} lh={1.4}>
            <span>{DIGIMON_INFO.FAMILIES}:</span>

            <Styled.DigimonFamilies>
              {digimonInfo.families.map((family) => (
                <img
                  src={`/Images/Families/${family}.webp`}
                  alt={DIGIMONS_FAMILIES[family]}
                />
              ))}
            </Styled.DigimonFamilies>
          </TextAtom>
        </>
      )}
    </>
  )
}
