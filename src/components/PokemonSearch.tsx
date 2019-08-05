import React, { Component } from 'react';
import Pokemon from '../interfaces/Pokemon.interface';
import Pokedex from '../json/pokedex.json';
import Types from '../json/types.json';
import '../scss/PokemonSearch.scss';

console.log(Pokedex);
console.log(Types);

export default class PokemonSearch extends Component<{}, Pokemon> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: {}) {
        super(props);
        this.state = {
            id: null,
            nameJp: "",
            nameEn: "",
            attack: null,
            defense: null,
            hp: null,
            spAttack: null,
            spDefense: null,
            speed: null,
            type01: "",
            type02: "",
            imageNumber: "",
            existence: false
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
                    imageNumber: imageNumber,
                    existence: true
                })
            }
        }
    }

    render() {
        console.log(this.state);

        return (
            <div className="PokemonSearch">
                <div className="PokemonSearch__area">
                    <input className="PokemonSearch__input" type="text" ref={this.pokemonRef} placeholder="検索したいポケモンの名前を入力しよう" />
                    <button className="PokemonSearch__button" onClick={this.onPokemonSearchButton}>検索</button>
                </div>
                {this.state.existence &&
                    <div className="PokemonSearch__result">
                        <div className="PokemonSearch__name">
                            <small>キミが検索したポケモンは...</small>
                            <strong>{this.state.nameJp}</strong>
                            <span>だ！</span>
                        </div>
                        <div className="PokemonSearch__image">
                            <img src={`${process.env.PUBLIC_URL}/img/${this.state.imageNumber + this.state.nameEn}.png`} alt="検索したポケモンの画像" />
                        </div>
                        <ul className="PokemonSearch__list">
                            <li className="PokemonSearch__item">{this.state.id}</li>
                            <li className="PokemonSearch__item">{this.state.attack}</li>
                            <li className="PokemonSearch__item">{this.state.defense}</li>
                            <li className="PokemonSearch__item">{this.state.hp}</li>
                            <li className="PokemonSearch__item">{this.state.spAttack}</li>
                            <li className="PokemonSearch__item">{this.state.spDefense}</li>
                            <li className="PokemonSearch__item">{this.state.speed}</li>
                            <li className="PokemonSearch__item">{this.state.type01}</li>
                            {this.state.type02 && <li className="PokemonSearch__item">{this.state.type02}</li>
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}