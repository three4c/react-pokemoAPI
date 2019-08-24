import React from 'react';

const style = require('./PokemonStatusName.scss').default;

interface PokemonStatusNameInterface {
    statusName: string;
}

const PokemonStatusName: React.SFC<PokemonStatusNameInterface> = ({ statusName }) => {
    return (
        <React.Fragment>
            <span className="PokemonResult__statusName">{statusName}</span>
            {/* <style jsx>{style}</style> */}
        </React.Fragment>
    )
}

export default PokemonStatusName;