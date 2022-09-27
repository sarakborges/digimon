import { DigimonProps } from '@/Utils/Props'

export const gabumon: DigimonProps = {
  id: `gabumon`,
  name: `Gabumon`,
  description: `Gabumon is a Reptile Digimon. Although it is covered by a fur pelt, it is still clearly a Reptile Digimon. Due to its extremely timid and shy personality, it always gathers up the data which Garurumon leaves behind, and shapes it into a fur pelt to wear. Because it is wearing the fur pelt of Garurumon, who is feared by other Digimon, it fills the role of safeguarding itself as a result of protecting its body. When it is wearing the fur pelt, its personality does a complete 180° shift. Gabumon is especially close to Bulucomon.`,
  level: `rookie`,
  attribute: `data`,
  families: [`nsp`, `me`, `vb`],

  evolvesInto: [
    {
      id: `garurumon`,
      digimon: `garurumon`,
      conditions: [
        {
          type: `data`,
          family: `nsp`,
          ammount: 25
        },

        {
          type: `data`,
          family: `nso`,
          ammount: 25
        },

        {
          type: `data`,
          family: `me`,
          ammount: 25
        },

        {
          type: `data`,
          family: `vb`,
          ammount: 25
        }
      ]
    },

    {
      id: `blackGarurumon`,
      digimon: `blackGarurumon`,
      conditions: [
        {
          type: `data`,
          family: `nsp`,
          ammount: 25
        },

        {
          type: `data`,
          family: `nso`,
          ammount: 25
        }
      ]
    }
  ]
}
