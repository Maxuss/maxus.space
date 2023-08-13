import {Avatar, Modal} from "@react95/core";
import {useEffect, useState} from "react";
import {Unmute} from "@react95/icons";

import "../styles/LastFmPlaying.css"

// api key from https://github.com/vojislav/lastfm-now-playing/blob/main/main.js ty :3
const API_URL = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&api_key=d74f9fdb9c79a50ffac2ca0700892ca1&limit=1&user=maxusdev";

interface LastFmTrack {
    artist: { "#text": string },
    image: { "#text": string }[],
    album: { "#text": string },
    name: string,
    url: string,
    date: { "#text": string } | undefined
}

// You Might Think He Loves You for Your Money But I Know What He Really Loves You for It's Your Brand New Leopard Skin Pillbox Hat
function truncateStr(str: string): string {
    return str.length > 35 ? `${str.slice(0, 35)}...` : str
}

function fetchLastFmData(handler: (v: LastFmTrack) => void) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);
    xhr.send(null);
    xhr.onload = () => {
        if(xhr.status == 200) {
            handler(JSON.parse(xhr.responseText).recenttracks.track[0])
        }
    }
}

export const LastFmPlaying = () => {
    const [isClosed, close] = useState(false);
    // placeholder data for loading
    const [currentTrack, setCurrentTrack] = useState<LastFmTrack>({
        album: {"#text": "Loading..."}, artist: {"#text": "Loading..."}, date: {"#text": "Loading..."}, image: [{ "#text": "" }, {"#text": ""}, {"#text": ""}], name: "Loading...", url: ""
    });
    useEffect(() => {
        fetchLastFmData(setCurrentTrack)
        setInterval(() => {
            fetchLastFmData(setCurrentTrack)
        }, 60_000) // fetch API every minute
    }, [])

    return (<>
        { !isClosed && <Modal
            closeModal={() => close(true)}
            title="Last played music"
            width="300"
            height="120"
            defaultPosition={{x: 1000, y: 100}}
            icon={<Unmute variant="16x16_4" />}
        >
            <div className={"playing-track"}>
                <Avatar src={currentTrack.image[2]["#text"]} size={60} />
                <div className={"track-description"}>
                    <b><a href={currentTrack.url} target={"_blank"} style={{textDecoration: "none"}}>{truncateStr(currentTrack.name)}</a></b>
                    <span>by <b>{truncateStr(currentTrack.artist["#text"])}</b></span>
                    <span>on <b>{truncateStr(currentTrack.album["#text"])}</b></span>
                </div>
            </div>
            <div style={{paddingTop: "10px"}}>
                ({currentTrack.date === undefined ? "Playing now" : currentTrack.date["#text"]})
            </div>
        </Modal>}
        </>)
}