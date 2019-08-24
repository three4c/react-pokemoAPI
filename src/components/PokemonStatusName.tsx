import React from 'react'

interface PokemonStatusNameInterface {
    statusName: string;
}

const PokemonStatusName: React.SFC<PokemonStatusNameInterface> = ({ statusName }) => {
    return (
        <span className="PokemonResult__statusName">{statusName}</span>
    )
}

export default PokemonStatusName;