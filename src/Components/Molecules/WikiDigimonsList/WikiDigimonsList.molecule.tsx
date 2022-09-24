import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { DIGIMON_INFO, DIGIMON_LEVELS } from '@/Utils/Texts'
import { DIGIMONS_LIST } from '@/Utils/Constants/Digimons'

import { TextAtom } from '@/Components/Atoms'

import * as Styled from './WikiDigimonsList.style'

export const WikiDigimonsListMolecule: FC = () => {
  return (
    <>
      {DIGIMONS_LIST.map((digimonLevel) => (
        <Fragment key={digimonLevel.id}>
          <Styled.DigimonLevel>
            <TextAtom fs="20px" fw={300}>
              {DIGIMON_LEVELS[digimonLevel.id]} {DIGIMON_INFO.LEVEL}
            </TextAtom>
          </Styled.DigimonLevel>

          {digimonLevel.digimons.length &&
            digimonLevel.digimons.map((digimonItem) => (
              <Styled.DigimonItem key={digimonItem.id}>
                <TextAtom fw={300}>
                  -{' '}
                  <Link to={`/wiki/${digimonItem.id}`}>{digimonItem.name}</Link>
                </TextAtom>
              </Styled.DigimonItem>
            ))}
        </Fragment>
      ))}
    </>
  )
}
