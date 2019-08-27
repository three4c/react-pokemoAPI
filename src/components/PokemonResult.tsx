import React, { Component } from "react";
import PokemonResultInterface from "../interfaces/PokemonResult.interface";
import PokemonStatusName from '../components/PokemonStatusName';
import PokemonStatusStyle from '../components/PokemonStatusStyle';
import PokemonType from '../components/PokemonType';
import PokemonImage from '../components/PokemonImage';
import FlavorText from '../components/FlavorText';
import PokemonId from '../components/PokemonId';
import PokemonName from '../components/PokemonName'
import "../scss/PokemonResult.scss";

export default class PokemonResult extends Component<PokemonResultInterface> {
  private map = (
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
  ): number => {
    let result: number = 0;

    result =
      value <= fromMin
        ? toMin
        : value >= fromMax
          ? toMax
          : (() => {
            let ratio: number = (toMax - toMin) / (fromMax - fromMin);
            return (value - fromMin) * ratio + toMin;
          })();

    return result;
  };

  private typeBgColor = (type: string): any => {
    switch (type) {
      case "ノーマル":
        return {
          backgroundColor: "#AEAEAE"
        };
      case "ほのお":
        return {
          backgroundColor: "#FFA765"
        }
      case "みず":
        return {
          backgroundColor: "#63C5F7"
        }
      case "でんき":
        return {
          backgroundColor: "#E6D400"
        }
      case "くさ":
        return {
          backgroundColor: "#9AC310"
        }
      case "こおり":
        return {
          backgroundColor: "#5FE9F6"
        }
      case "かくとう":
        return {
          backgroundColor: "#EE6968"
        }
      case "どく":
        return {
          backgroundColor: "#AB7ACA"
        }
      case "じめん":
        return {
          backgroundColor: "#C8A841"
        }
      case "ひこう":
        return {
          backgroundColor: "#64A7F1"
        }
      case "エスパー":
        return {
          backgroundColor: "#EC7FF4"
        }
      case "むし":
        return {
          backgroundColor: "#51CB5A"
        }
      case "いわ":
        return {
          backgroundColor: "#FAC728"
        }
      case "ゴースト":
        return {
          backgroundColor: "#746EB4"
        }
      case "ドラゴン":
        return {
          backgroundColor: "#FF8758"
        }
      case "あく":
        return {
          backgroundColor: "#6880D4"
        }
      case "はがね":
        return {
          backgroundColor: "#8089A4"
        }
      case "フェアリー":
        return {
          backgroundColor: "#FC7799"
        }
    }
  }

  render() {


    const { nameJp, nameEn, type, imageNumber, flavorText, id, hp, attack, defense, spAttack, spDefense, speed } = this.props;

    const statusBarStyleItems = [
      { name: 'HP', value: { width: this.map(hp, 0, 255, 0, 100) + "%" } },
      { name: 'こうげき', value: { width: this.map(attack, 0, 255, 0, 100) + "%" } },
      { name: 'ぼうぎょ', value: { width: this.map(defense, 0, 255, 0, 100) + "%" } },
      { name: 'とくしゅ', value: { width: this.map(spAttack, 0, 255, 0, 100) + "%" } },
      { name: 'とくぼう', value: { width: this.map(spDefense, 0, 255, 0, 100) + "%" } },
      { name: 'すばやさ', value: { width: this.map(speed, 0, 255, 0, 100) + "%" } }
    ];

    const pokemonTypeItems = type.map((item, i) => (
      <PokemonType key={i} typeBgColor={{ backgroundColor: this.typeBgColor(item).backgroundColor }} type={item} />
    ));

    const pokemonStatusItems = statusBarStyleItems.map((item, i) => (
      <li key={i} className="PokemonResult__item">
        <PokemonStatusName statusName={item.name} />
        <PokemonStatusStyle statusBarStyle={item.value} />
      </li>
    ))

    return (
      <div className="PokemonResult">
        <PokemonName small={"キミが けんさくした ポケモンは…"} nameJp={nameJp} span={"だ！"} />
        <div className="PokemonResult__info">
          <PokemonImage imageBgColor={{ backgroundColor: this.typeBgColor(type[0]).backgroundColor }} imageNumber={imageNumber} nameEn={nameEn} />
          <FlavorText flavorText={flavorText} />
        </div>
        <div className="PokemonResult__numberType">
          <PokemonId id={id} />
          <div className="PokemonResult__right">
            {pokemonTypeItems}
          </div>
        </div>
        <ul className="PokemonResult__list">
          {pokemonStatusItems}
        </ul>
      </div>
    );
  }
}
