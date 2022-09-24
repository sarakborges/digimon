import { FC } from 'react'
import { Link } from 'react-router-dom'

import { DigimonsListProps } from '@/Utils/Props'
import {
  DIGIMONS_ATTRIBUTES,
  DIGIMON_INFO,
  DIGIMON_LEVELS
} from '@/Utils/Texts'

import { TextAtom } from '@/Components/Atoms'

import * as Styled from './WikiDigimonsList.style'

export const WikiDigimonsListMolecule: FC<{
  digimonsList: DigimonsListProps
}> = ({ digimonsList }) => {
  return (
    <Styled.Lists>
      {digimonsList.list.map((list) => (
        <div key={list.level || list.attribute || 'all'}>
          {digimonsList.type === 'level' && (
            <TextAtom fs="20px" fw={300}>
              {DIGIMON_LEVELS[list.level!]} {DIGIMON_INFO.LEVEL}
            </TextAtom>
          )}

          {digimonsList.type === 'attribute' && (
            <TextAtom fs="20px" fw={300}>
              {DIGIMONS_ATTRIBUTES[list.attribute!]} {DIGIMON_INFO.ATTRIBUTE}
            </TextAtom>
          )}

          {!!list.subList.length && (
            <Styled.DigimonsList>
              {[...list.subList]
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((digimonItem) => (
                  <Styled.DigimonItem key={digimonItem.id}>
                    <TextAtom fw={300}>
                      <Link to={`/wiki/${digimonItem.id}`}>
                        <img
                          src={`/Images/Digimon/${digimonItem.id}.webp`}
                          alt={digimonItem.name}
                        />

                        <TextAtom fs="12px" fw={300} lh={1.4} ta="center">
                          {digimonItem.name}
                        </TextAtom>
                      </Link>
                    </TextAtom>
                  </Styled.DigimonItem>
                ))}
            </Styled.DigimonsList>
          )}
        </div>
      ))}
    </Styled.Lists>
  )
}
