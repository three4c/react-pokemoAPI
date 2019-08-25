import React from 'react'

interface PokemonImageInterface {
    imageBgColor: any;
    imageNumber: string;
    nameEn: string;
}

const PokemonImage: React.SFC<PokemonImageInterface> = ({ imageBgColor, imageNumber, nameEn }) => {
    return (
        <div className="PokemonResult__image" style={imageBgColor}>
            <img
                src={`${process.env.PUBLIC_URL}/image/${imageNumber +
                    nameEn}.png`}
                alt="検索したポケモンの画像"
            />
        </div>
    )
}

export default PokemonImage;