import React from "react";
import { RouteComponentProps } from "react-router";

class Chirps extends React.Component<IChirpsProps, IChirpsState> {
  constructor(props: IChirpsProps) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  componentDidMount() {
    this.fetchChirps();
  }

  fetchChirps = () => {
    $.get("/api/chirps", chirps => {
      let listChirps = chirps.json();
      this.setState(listChirps);
    });
  };

  render() {
    return this.state.chirps.map(chirp => {
      return (
        <>
          <div>{chirp}</div>
        </>
      );
    });
  }
}

interface IChirpsProps {}

interface IChirpsState {
  chirps: Array<{ author: string; chirp: string }>;
}

export default Chirps;
