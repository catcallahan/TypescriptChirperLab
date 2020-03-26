import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import chirpstore from "../server/chirpstore";
import { IChirp } from "../client/utils/types"
import Chirps from "./Chirps";

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  value: string
  state: IHomePageState
  constructor(props: IHomePageProps, value: string) {
    super(props);
    this.value = value
    this.state = {
      chirps: [],
      newUsername: "",
      newMessage: ""
    };
  }
  componentDidMount() {
   this.fetchChirps()
  }

  
  async submitChirp(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let json = {
      author: this.state.newUsername,
      message: this.state.newMessage
    }
    const rawResponse = await fetch('api/chirps/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });
    this.fetchChirps()
  }

fetchChirps() {
    fetch("/api/chirps")
      .then(res => res.json())
      .then(chirps => this.setState({ chirps }))
    
}

  handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ newUsername: e.target.value });
  handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ newMessage: e.target.value });
  render() {
    return (
      <Fragment>
        <div
          className="container-lg d-flex justify-content-center align-items-center shadow-sm p-2 mt-5 rounded"
          style={{
            backgroundColor: "#A4D555",
            color: "white"
          }}>
          <h1 className="text-content-center" style={{ fontSize: "60px" }}>Welcome to Chirpr!</h1>
        </div>
        <div className=" container-md pt-3">
          <form className="form-group p-3 shadow border rounded">
            <label htmlFor="username" style={{ color: "white" }}>Username:</label>
            <input id="username" type="text" className="form-control" onChange={(e) => this.handleUsernameChange(e)} ></input>
            <label htmlFor="message" style={{ color: "white" }}>Chirp:</label>
            <textarea id="message" className="form-control" onChange={(e) => this.handleMessageChange(e)}></textarea>
            <button className="btn btn-primary mt-2" onClick={(e) => this.submitChirp(e)}>Chirp it!</button>
          </form>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center m-auto">
          {this.state.chirps.map(chirp => (
            <Chirps key={chirp.id} chirp={chirp} />
          ))}
        </div>
      </Fragment>
    );
  }
}
interface IHomePageProps {
  chirp: IChirp
}
interface IHomePageState {
  chirps: Array<{ id: string; author: string; message: string }>;
  newUsername: string;
  newMessage: string;
}
export default HomePage;
