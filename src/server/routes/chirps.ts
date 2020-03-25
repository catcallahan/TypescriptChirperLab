import * as express from "express";
import chirpStore from "../chirpstore";

let router = express.Router();

router.get("/", (req, res) => {
const data = chirpStore.GetChirps();
const chirps = Object.keys(data).map(key => {
    return {
        id: key,
        author: data[key].author,
        message: data[key].message
    }
});
chirps.pop()
res.json(chirps)
});

router.get("/:chirpid", (req, res) => {
    const chirpid = req.params.chirpid
    const chirp = chirpStore.GetChirp(chirpid)
    res.json({ id: chirpid, ...chirp })
})

router.post("/", (req, res) => {
    const chirp = req.body
    chirpStore.CreateChirp(chirp);
    res.sendStatus(200);
});

router.put("/:chirpid", (req, res) => {
  let chirpid = req.params.chirpid;
  chirpStore.UpdateChirp(chirpid, req.body);
  res.sendStatus(200);
});

router.delete("/:chirpid", (req, res) => {
  let chirpid = req.params.chirpid;
  chirpStore.DeleteChirp(chirpid);
  res.sendStatus(200);
});

export default router;
