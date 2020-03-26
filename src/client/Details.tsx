import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"
import { IChirp } from "./utils/types";

const Details : React.FC<DetailsProps> = props => {
    const { id } = useParams()
    const [chirp, setchirp] = useState<IChirp>(null)
    let history = useHistory()
const [author, setAuthor] = useState<string>();
const [message, setMessage] = useState<string>();
const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

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
            <div className="col-md-8">
                <form className="form-group p-3 shadow border rounded">
                        <label htmlFor="username" style = {{color: "white"}}>Username:</label>
                        <input id = "username" type = "text" className="form-control" value = {chirp?.author}></input>
                        <label htmlFor="message"style = {{color: "white"}}>Chirp:</label>
                        <textarea id = "message" className = "form-control" value = {chirp?.message}></textarea>
                        <button className="btn btn-primary mt-2" >Submit Changes</button>
                        <button className="btn btn-primary mt-2 ml-2" onClick = {() => history.goBack()}>Back</button>
                </form>
            </div>
        </section>
    </main>
    )
};

interface DetailsProps {

}

export default Details