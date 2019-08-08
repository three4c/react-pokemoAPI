import React, { Component } from "react";
import ErrorMessageInterface from "../interfaces/ErorrMessage.interface";
import "../scss/ErorrMessage.scss";

export default class ErorrMessage extends Component<ErrorMessageInterface> {
  render() {
    return (
      <div>
        {this.props.notFound && (
          <div className="ErrorMessage">
            <p>{this.props.errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
}
