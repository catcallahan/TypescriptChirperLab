import React from "react";
import { RouteComponentProps } from "react-router";
import chirpstore from "../server/chirpstore";

class Chirps extends React.Component<IChirpsProps, IChirpsState> {
  constructor(props: IChirpsProps) {
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
      <div className = "container d-flex flex-column justify-content-center align-items-center m-auto">
        {this.state.chirps.map(chirp => (
          <div className="col-md-6 mx-1" key={chirp.id}>
            <div className="card my-2 shadow" >
              <div className="card-body text-center">
                <h4 className="card-title"> Chirper: {chirp.author}</h4>
                <p className="card-text">{chirp.message}</p>
                <button className = "btn"> Edit </button>
                <button className = "btn"> Delete </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

interface IChirpsProps {}

interface IChirpsState {
  chirps: Array<{ id: string; author: string; message: string }>;
}

export default Chirps;
