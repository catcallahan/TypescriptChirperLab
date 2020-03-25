import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import chirpstore from "../server/chirpstore";
import { IChirp }  from "../client/utils/types"

import Chirps from "./Chirps";

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  componentDidMount() {
    fetch("/api/chirps")
      .then(res => res.json())
      .then(chirps => this.setState({ chirps }));
  }

  render() {
    return (
      <Fragment>
        <div
          className="container-lg d-flex justify-content-center align-items-center shadow-sm p-2 mt-5"
          style={{
            backgroundColor: "#A4D555",
            color: "white"
          }}>
          <h1 className="text-content-center">Welcome to Chirpr!</h1>
        </div>
        <div className=" container-md pt-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="What's Chirpin?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >Chirp!</button>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center m-auto">
          {this.state.chirps.map(chirp => (
            <Chirps key = {chirp.id} chirp = {chirp} />
          ))}
        </div>
      </Fragment>
    );
  }
}

interface IHomePageProps {
    chirp : IChirp
}

interface IHomePageState {
  chirps: Array<{ id: string; author: string; message: string }>;
}

export default HomePage;
