import React, { Fragment } from "react";
import { useHistory } from "react-router-dom"
import { IChirp } from "./utils/types";

const Chirps : React.FC<IChirpsProps> = props => {
    const history = useHistory()
    return (
      <Fragment>
        <div className="container d-flex flex-column justify-content-center align-items-center m-auto">
            <div className="col-md-6 mx-1">
              <div className="card my-2 shadow">
                <div className="card-body text-center">
                  <h4 className="card-title"> Chirper: {props.chirp.author}</h4>
                  <p className="card-text">{props.chirp.message}</p>
                  <button className="btn btn-primary" onClick = {() => {history.push(`/details/${props.chirp.id}`)}}> Edit </button>
                  <button className="btn btn-primary ml-2"> Delete </button>
                </div>
              </div>
            </div>
          
        </div>
      </Fragment>
    );
  }



interface IChirpsProps {
    chirp: IChirp
}


export default Chirps;
