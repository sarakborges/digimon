import { DigimonProps, DigimonsListProps } from '@/Utils/Props'

import { agumon } from './Rookie/agumon'
import { gabumon } from './Rookie/gabumon'

import { blackGarurumon } from './Champion/blackGarurumon'
import { garurumon } from './Champion/garurumon'
import { greymon } from './Champion/greymon'
import { blackGreymon } from './Champion/blackGreymon'

import { weregarurumon } from './Ultimate/weregarurumon'
import { blackMetalgreymon } from './Ultimate/blackMetalgreymon'

import { alphamon } from './Mega/alphamon'
import { metalgarurumon } from './Mega/metalgarurumon'

export const DIGIMONS_ROOKIES: Array<DigimonProps> = [
  { ...agumon },
  { ...gabumon }
]

export const DIGIMONS_CHAMPIONS: Array<DigimonProps> = [
  { ...blackGarurumon },
  { ...garurumon },
  { ...greymon },
  { ...blackGreymon }
]

export const DIGIMONS_ULTIMATE: Array<DigimonProps> = [{ ...weregarurumon }]

export const DIGIMONS_MEGA: Array<DigimonProps> = [
  { ...alphamon },
  { ...metalgarurumon },
  { ...blackMetalgreymon }
]

export const DIGIMONS_LIST: DigimonsListProps = [
  {
    id: 'rookie',
    digimons: [...DIGIMONS_ROOKIES]
  },

  {
    id: 'champion',
    digimons: [...DIGIMONS_CHAMPIONS]
  },

  {
    id: 'ultimate',
    digimons: [...DIGIMONS_ULTIMATE]
  },

  {
    id: 'mega',
    digimons: [...DIGIMONS_MEGA]
  }
]

export const DIGIMONS_ALL: Array<DigimonProps> = [
  ...DIGIMONS_ROOKIES,
  ...DIGIMONS_CHAMPIONS,
  ...DIGIMONS_ULTIMATE,
  ...DIGIMONS_MEGA
]
