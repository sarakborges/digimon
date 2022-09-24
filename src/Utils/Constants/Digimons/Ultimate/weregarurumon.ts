import { DigimonProps } from '@/Utils/Props'

export const wereGarurumon: DigimonProps = {
  id: `wereGarurumon`,
  name: `Were Garurumon`,
  description: `Were Garurumon is an Animal Digimon. It digivolved from Garurumon and became able to walk on two legs. It lost its speed due to becoming bipedal, but became a Commando Type Digimon with stronger offensive and defensive power, as well as developing a tactical nature. Its kicking techniques, which it unleashes using the leg strength it inherited from Garurumon, are quite strong, so its jumping ability contends for first or second place among other Digimon. Also, it is rich with loyalty, and has a reliable nature, faithfully executing its mission if its master gives it an order.`,
  level: `champion`,
  attribute: `data`,
  families: [`nsp`, `me`, `vb`, `nso`],

  evolvesInto: [
    {
      id: `metalGarurumon`,
      digimon: `metalGarurumon`
    }
  ]
}
