import { DigimonProps } from '@/Utils/Props'

export const agumon: DigimonProps = {
  id: `agumon`,
  name: `Agumon`,
  description: `Agumon is a Reptile Digimon. It has grown up and become able to walk on two legs, and has an appearance like a tiny dinosaur. Because it is still on the way to adulthood, its power is low, but as its personality is quite ferocious, it doesn't understand fear. It has grown hard, sharp claws on both its hands and feet, and demonstrates its power in battle. It is also a being that foretells Digivolution to a great and powerful Digimon.`,
  level: `rookie`,
  attribute: `vaccine`,
  families: [`nsp`, `me`, `vb`, `dr`, `uk`],

  evolvesInto: [
    {
      id: 'greymon',
      digimon: 'greymon',
      conditions: [
        {
          type: 'data',
          family: 'nsp',
          ammount: 25
        },

        {
          type: 'data',
          family: 'me',
          ammount: 25
        },

        {
          type: 'data',
          family: 'vb',
          ammount: 25
        },

        {
          type: 'data',
          family: 'dr',
          ammount: 25
        }
      ]
    },

    {
      id: 'blackGreymon',
      digimon: 'blackGreymon',
      conditions: [
        {
          type: 'data',
          family: 'nsp',
          ammount: 25
        },

        {
          type: 'data',
          family: 'dr',
          ammount: 25
        }
      ]
    }
  ]
}
