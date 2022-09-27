import { DigimonProps, DigimonsListProps } from '@/Utils/Props'

import { agumon } from './agumon'
import { gabumon } from './gabumon'
import { blackGarurumon } from './blackGarurumon'
import { garurumon } from './garurumon'
import { greymon } from './greymon'
import { blackGreymon } from './blackGreymon'
import { wereGarurumon } from './wereGarurumon'
import { blackMetalGreymon } from './blackMetalGreymon'
import { alphamon } from './alphamon'
import { metalGarurumon } from './metalGarurumon'

export const DIGIMONS_ALL: Array<DigimonProps> = [
  { ...agumon },
  { ...gabumon },
  { ...blackGarurumon },
  { ...garurumon },
  { ...greymon },
  { ...blackGreymon },
  { ...wereGarurumon },
  { ...blackMetalGreymon },
  { ...alphamon },
  { ...metalGarurumon }
]

export const DIGIMONS_ALL_LIST: DigimonsListProps = {
  type: 'all',
  title: 'All digimons',

  list: [
    {
      subList: [...DIGIMONS_ALL]
    }
  ]
}

export const DIGIMONS_BY_LEVELS_LIST: DigimonsListProps = {
  type: 'level',
  title: 'Digimons by level',

  list: [
    {
      level: 'rookie',
      subList: [...DIGIMONS_ALL.filter((item) => item.level === 'rookie')]
    },

    {
      level: 'champion',
      subList: [...DIGIMONS_ALL.filter((item) => item.level === 'champion')]
    },

    {
      level: 'ultimate',
      subList: [...DIGIMONS_ALL.filter((item) => item.level === 'ultimate')]
    },

    {
      level: 'mega',
      subList: [...DIGIMONS_ALL.filter((item) => item.level === 'mega')]
    }
  ]
}

export const DIGIMONS_BY_ATTRIBUTE_LIST: DigimonsListProps = {
  type: 'attribute',
  title: 'Digimons by attribute',

  list: [
    {
      attribute: 'vaccine',
      subList: [...DIGIMONS_ALL.filter((item) => item.attribute === 'vaccine')]
    },

    {
      attribute: 'data',
      subList: [...DIGIMONS_ALL.filter((item) => item.attribute === 'data')]
    },

    {
      attribute: 'virus',
      subList: [...DIGIMONS_ALL.filter((item) => item.attribute === 'virus')]
    }
  ]
}
