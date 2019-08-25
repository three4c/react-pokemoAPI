import React from 'react'

interface PokemonTypeInterface {
    type: string;
    typeBgColor: any;
}

const PokemonType: React.SFC<PokemonTypeInterface> = ({ typeBgColor, type }) => {
    return (
        <span className="PokemonResult__type" style={typeBgColor}>{type}</span>
    )
}

export default PokemonType;