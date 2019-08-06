export default interface Pokemon {
    id: number,
    nameJp: string,
    nameEn: string,
    attack: number,
    defense: number,
    hp: number,
    spAttack: number,
    spDefense: number,
    speed: number,
    type01: string,
    type02: string,
    flavorText: string,
    imageNumber: string,
    existence: boolean,
    error: boolean,
    notFound: boolean,
    errorMessage: string
}