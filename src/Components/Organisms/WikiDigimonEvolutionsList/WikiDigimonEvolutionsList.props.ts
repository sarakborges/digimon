import { DigimonFamilies, DigimonProps } from '@/Utils/Props'

export interface WikiDigimonEvolutionsListProps {
  id: string
  digimon?: DigimonProps
  conditions?: Array<{
    type: 'data'
    family?: DigimonFamilies
    ammount: number
  }>
}
