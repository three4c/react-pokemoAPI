import React, { Component } from "react";
import PokemonResultInterface from "../interfaces/PokemonResult.interface";
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

  render() {
    return (
      <div className="PokemonResult">
        <div className="PokemonResult__name">
          <small>キミが けんさくした ポケモンは…</small>
          <strong>{this.props.nameJp}</strong>
          <span>だ！</span>
        </div>
        <div className="PokemonResult__info">
          <div className="PokemonResult__image">
            <img
              src={`${process.env.PUBLIC_URL}/image/${this.props.imageNumber +
                this.props.nameEn}.png`}
              alt="検索したポケモンの画像"
            />
          </div>
          <div className="PokemonResult__flavorText">
            <p>{this.props.flavorText}</p>
          </div>
        </div>
        <ul className="PokemonResult__numberType">
          <li className="PokemonResult__id">
            ぜんこくずかん No. {this.props.id}
          </li>
          <li className="PokemonResult__type">{this.props.type01}</li>
          {this.props.type02 && (
            <li className="PokemonResult__type">{this.props.type02}</li>
          )}
        </ul>
        <div className="PokemonResult__status">
          <ul className="PokemonResult__list">
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">HP</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.hp, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">こうげき</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.attack, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">ぼうぎょ</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.defense, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
          </ul>
          <ul className="PokemonResult__list">
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">とくこう</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.spAttack, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">とくぼう</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.spDefense, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
            <li className="PokemonResult__item">
              <span className="PokemonResult__statusName">すばやさ</span>
              <div className="PokemonResult__barArea">
                <div
                  className="PokemonResult__bar"
                  style={{
                    width: this.map(this.props.speed, 0, 255, 0, 100) + "%"
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
