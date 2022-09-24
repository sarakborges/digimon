import { DigimonProps, DigimonsListProps } from '@/Utils/Props'

import { agumon } from './Rookie/agumon'
import { gabumon } from './Rookie/gabumon'

import { blackGarurumon } from './Champion/blackGarurumon'
import { garurumon } from './Champion/garurumon'
import { greymon } from './Champion/greymon'
import { blackGreymon } from './Champion/blackGreymon'

import { wereGarurumon } from './Ultimate/wereGarurumon'
import { blackMetalGreymon } from './Ultimate/blackMetalGreymon'

import { alphamon } from './Mega/alphamon'
import { metalGarurumon } from './Mega/metalGarurumon'

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

export const DIGIMONS_ULTIMATE: Array<DigimonProps> = [
  { ...wereGarurumon },
  { ...blackMetalGreymon }
]

export const DIGIMONS_MEGA: Array<DigimonProps> = [
  { ...alphamon },
  { ...metalGarurumon }
]

export const DIGIMONS_BY_LEVELS: DigimonsListProps = {
  type: 'level',
  title: 'Digimons by level',

  list: [
    {
      level: 'rookie',
      subList: [...DIGIMONS_ROOKIES]
    },

    {
      level: 'champion',
      subList: [...DIGIMONS_CHAMPIONS]
    },

    {
      level: 'ultimate',
      subList: [...DIGIMONS_ULTIMATE]
    },

    {
      level: 'mega',
      subList: [...DIGIMONS_MEGA]
    }
  ]
}

export const DIGIMONS_BY_ATTRIBUTE: DigimonsListProps = {
  type: 'attribute',
  title: 'Digimons by attribute',

  list: [
    {
      attribute: 'vaccine',
      subList: [{ ...agumon }, { ...greymon }, { ...alphamon }]
    },

    {
      attribute: 'data',
      subList: [
        { ...gabumon },
        { ...garurumon },
        { ...wereGarurumon },
        { ...metalGarurumon }
      ]
    },

    {
      attribute: 'virus',
      subList: [
        { ...blackGarurumon },
        { ...blackGreymon },
        { ...blackMetalGreymon }
      ]
    }
  ]
}

export const DIGIMONS_ALL: DigimonsListProps = {
  type: 'all',
  title: 'All digimons',

  list: [
    {
      subList: [
        ...DIGIMONS_ROOKIES,
        ...DIGIMONS_CHAMPIONS,
        ...DIGIMONS_ULTIMATE,
        ...DIGIMONS_MEGA
      ]
    }
  ]
}
