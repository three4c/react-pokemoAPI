import React from 'react'

interface PokemonIdInterface {
    id: number;
}

const PokemonId: React.SFC<PokemonIdInterface> = ({ id }) => {
    return (
        <div className="PokemonResult__id">
            <p>ぜんこくずかん No. {id}</p>
        </div>
    )
}

export default PokemonId;