import { DigimonProps } from '@/Utils/Props'

export const garurumon: DigimonProps = {
  id: `garurumon`,
  name: `Garurumon`,
  description: `Garurumon is an Animal Digimon. It is covered in blue, white, and silver-colored fur as hard as "Mithril", which is called a legendary rare metal, and since the blades growing from the tips of its shoulders have sharp edges, anything that touches them is cut to pieces. As it possesses a furious combat instinct and sinews honed in freezing lands, as well as carnivore-like agility and the accuracy to reliably bring down its targets, it is a being feared by other Digimon. However, its intelligence is very high, and it faithfully obeys those who it recognizes as its master or leader.`,
  level: `champion`,
  attribute: `data`,
  families: [`nsp`, `me`, `vb`, `nso`],

  evolvesInto: [
    {
      id: `weregarurumon`,
      digimon: `weregarurumon`
    }
  ]
}
