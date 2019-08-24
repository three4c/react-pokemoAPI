import React, { Component } from "react";
import ErrorMessageInterface from "../interfaces/ErorrMessage.interface";
import "../scss/ErorrMessage.scss";

export default class ErorrMessage extends Component<ErrorMessageInterface> {
  render() {
    const { notFound, errorMessage } = this.props;
    return (
      <div>
        {notFound && (
          <div className="ErrorMessage">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
}
