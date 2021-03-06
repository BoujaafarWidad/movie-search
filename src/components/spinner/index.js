import React, { Component } from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import "./css/index.css";

const override = css`
  margin: 0 auto;
  border-color: white;
`;

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
