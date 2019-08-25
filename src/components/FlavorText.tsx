import React from 'react'

interface FlavorTextInterface {
    flavorText: string;
}

const FlavorText: React.SFC<FlavorTextInterface> = ({ flavorText }) => {
    return (
        <div className="PokemonResult__flavorText">
            <p>{flavorText}</p>
        </div>
    )
}

export default FlavorText;