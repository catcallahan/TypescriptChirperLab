import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IChirp } from "./utils/types";

const Details : React.FC<DetailsProps> = props => {
    const { id } = useParams()
    const [chirp, setchirp] = useState<IChirp>(null)
    let history = useHistory()

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setchirp(chirp)
        })() 
    }, [id])
    return (
    <main className="container">
        <section className="row my-2 justify-content-center">
            <div className="col-md-12">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{chirp?.author}</h4>
                         <p className="card-text">{chirp?.message}</p>
                         <button className="btn btn-primary" onClick = {() => history.goBack()}>Back</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
};

interface DetailsProps {

}

export default Details