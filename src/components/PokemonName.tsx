import React from 'react'

interface PokemonNameInterface {
    small: string;
    nameJp: string;
    span: string;
}

const PokemonName: React.SFC<PokemonNameInterface> = ({ small, nameJp, span }) => {
    return (
        <div className="PokemonResult__name">
            <small>{small}</small>
            <strong>{nameJp}</strong>
            <span>{span}</span>
        </div>
    )
}

export default PokemonName;