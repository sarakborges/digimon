import { DigimonProps } from '@/Utils/Props'

export const blackGreymon: DigimonProps = {
  id: `blackGreymon`,
  name: `Black Greymon`,
  description: `Black Greymon is a Dinosaur Digimon. Its ferociousness has increased, to the point where it can be called a completely wild Greymon. Even so, it isn't a lone wolf, and is clever enough to engage in team tactics with its comrades.`,
  level: `champion`,
  attribute: `virus`,
  families: [`nsp`, `dr`],

  evolvesInto: [
    {
      id: 'blackMetalgreymon',
      digimon: 'blackMetalgreymon',
      conditions: [
        {
          type: 'data',
          family: 'me',
          ammount: 25
        }
      ]
    }
  ]
}
