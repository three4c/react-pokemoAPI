export default interface PokemonResultInterface {
  id: number;
  nameJp: string;
  nameEn: string;
  type: string[];
  flavorText: string;
  imageNumber: string;
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}
