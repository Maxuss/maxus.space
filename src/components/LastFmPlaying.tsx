// api key from https://github.com/vojislav/lastfm-now-playing/blob/main/main.js :3
import {Avatar, Modal} from "@react95/core";
import {useEffect, useState} from "react";
import {Unmute} from "@react95/icons";

import "../styles/LastFmPlaying.css"

const API_URL = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&api_key=d74f9fdb9c79a50ffac2ca0700892ca1&limit=1&user=maxusdev";

interface LastFmTrack {
    artist: { "#text": string },
    image: { "#text": string }[],
    album: { "#text": string },
    name: string,
    url: string,
    date: { "#text": string }
}

function fetchLastFmData(): LastFmTrack {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, false);
    xhr.send(null);
    return JSON.parse(xhr.responseText).recenttracks.track[0] as LastFmTrack
}

// You Might Think He Loves You for Your Money But I Know What He Really Loves You for It's Your Brand New Leopard Skin Pillbox Hat
function truncateStr(str: string): string {
    return str.length > 35 ? `${str.slice(0, 35)}...` : str
}

export const LastFmPlaying = () => {
    const [isClosed, close] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(fetchLastFmData());
    useEffect(() => {
        setInterval(() => {
            setCurrentTrack(fetchLastFmData())
        }, 60_000) // fetch API every minute
    }, [])

    return (<>
        { !isClosed && <Modal
            closeModal={() => close(true)}
            title="Currently playing music"
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
                ({currentTrack.date["#text"]})
            </div>
        </Modal>}
        </>)
}