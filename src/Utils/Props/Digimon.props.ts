export type DigimonLevels = 'rookie' | 'champion' | 'ultimate' | 'mega'
export type DigimonAttributes = 'vaccine' | 'data' | 'virus'
export type DigimonFamilies =
  | 'vb'
  | 'nso'
  | 'nsp'
  | 'wg'
  | 'ds'
  | 'dr'
  | 'me'
  | 'uk'

export type DigimonProps = {
  id: string
  name: string
  description: string
  level: DigimonLevels
  attribute: DigimonAttributes
  families: Array<DigimonFamilies>
  evolvesInto?: Array<DigimonEvolutionProps>
}

export type DigimonsListProps = {
  type: 'attribute' | 'level' | 'all'
  title?: string

  list: Array<{
    level?: DigimonLevels
    attribute?: DigimonAttributes
    subList: Array<DigimonProps>
  }>
}

export type DigimonEvolutionProps = {
  id: string
  digimon: string | DigimonProps
  conditions?: Array<{
    type: 'data'
    family?: DigimonFamilies
    ammount: number
  }>
}
