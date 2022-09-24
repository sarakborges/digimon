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

export type DigimonsListProps = Array<{
  id: DigimonLevels
  digimons: Array<{
    id: string
    name: string
  }>
}>

export type DigimonEvolutionProps = {
  id: string
  digimon: string | DigimonProps
  conditions?: Array<{
    type: 'data'
    family?: DigimonFamilies
    ammount: number
  }>
}
