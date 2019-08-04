import React, { Component } from 'react';
import Pokedex from '../json/pokedex.json';
import Types from '../json/types.json';

console.log(Pokedex);
console.log(Types);

interface Pokemon {
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
    imageNumber: string
}

export default class PokemonSearch extends Component<{}, Pokemon> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 0,
            nameJp: "",
            nameEn: "",
            attack: 0,
            defense: 0,
            hp: 0,
            spAttack: 0,
            spDefense: 0,
            speed: 0,
            type01: "",
            type02: "",
            imageNumber: ""
        }
        this.pokemonRef = React.createRef();
    }

    onPokemonSearchButton = () => {
        const inputValue = this.pokemonRef.current.value;

        for (let i = 0; i < Pokedex.length; i++) {
            if (Pokedex[i].name.japanese === inputValue) {
                const imageNumber = ('000' + Pokedex[i].id).slice(-3);

                for (let j = 0; j < Types.length; j++) {
                    if (Types[j].english === Pokedex[i].type[0]) {
                        this.setState({
                            type01: Types[j].japanese
                        })
                    }
                    if (Types[j].english === Pokedex[i].type[1]) {
                        this.setState({
                            type02: Types[j].japanese
                        })
                    }
                }

                this.setState({
                    id: Pokedex[i].id,
                    nameJp: Pokedex[i].name.japanese,
                    nameEn: Pokedex[i].name.english,
                    attack: Pokedex[i].base.Attack,
                    defense: Pokedex[i].base.Defense,
                    hp: Pokedex[i].base.HP,
                    spAttack: Pokedex[i].base["Sp. Attack"],
                    spDefense: Pokedex[i].base["Sp. Defense"],
                    speed: Pokedex[i].base.Speed,
                    imageNumber: imageNumber
                })
            }
        }
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <input type="text" ref={this.pokemonRef} placeholder="しらべたいポケモンをいれましょう" />
                <button onClick={this.onPokemonSearchButton}>けんさく</button>
                <img src={`${process.env.PUBLIC_URL}/img/${this.state.imageNumber + this.state.nameEn}.png`} alt="" />
                <p>{this.state.id}</p>
                <p>{this.state.nameJp}</p>
                <p>{this.state.attack}</p>
                <p>{this.state.defense}</p>
                <p>{this.state.hp}</p>
                <p>{this.state.spAttack}</p>
                <p>{this.state.spDefense}</p>
                <p>{this.state.speed}</p>
                <p>{this.state.type01}</p>
                {this.state.type02 && <p>{this.state.type02}</p>}
            </div>
        )
    }
}