import React from 'react'

interface PokemonStatusInterface {
    statusBarStyle: any;
}

const PokemonStatusStyle: React.SFC<PokemonStatusInterface> = ({ statusBarStyle }) => {
    return (
        <div className="PokemonResult__barArea">
            <div
                className="PokemonResult__bar"
                style={statusBarStyle}
            />
        </div>
    )
}

export default PokemonStatusStyle;