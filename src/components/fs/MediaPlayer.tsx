import React, {useEffect, useRef, useState} from "react";
import {Button, Frame, List, Modal} from "@react95/core";
import {MediaVideo} from "@react95/icons";
import styled from "styled-components";

const Controls = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2px 0;
`;

const VideoTag = styled.video`
  width: 300px;
  padding: 2px;
`;

const ControlBtn = styled(Button)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  &&,
  &:active,
  &:focus {
    width: 25px;
    height: 25px;
    padding: 7px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Play = () => (<svg
    height="6"
    viewBox="0 0 494.942 494.942"
    width="6"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="play"
    style={{
        width: 12,
        height: 12
    }}
>
        <path d="M35.353 0l424.236 247.471L35.353 494.942z" />
    </svg>);


const Pause = () => (
    <svg
        height="6"
        viewBox="0 0 424.236 424.236"
        width="6"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="pause"
        style={{
            width: 12,
            height: 12
        }}
    >
        <path d="M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z" />
    </svg>
);

const Stop = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        aria-label="stop"
        style={{
            width: 12,
            height: 12
        }}
    >
        <path d="M0 0h306v306H0z" />
    </svg>
);

export interface MediaProps {
    src: string,
    isMobile: boolean,
    close: () => void,
}

export const MediaPlayer: React.FC<MediaProps> = ({ src, isMobile, close }) => {
    const [mediaName, setMediaName] = useState("NULL.MOV")
    const player = useRef<HTMLVideoElement>(null);
    const [isPlaying, setPlaying] = useState(false);

    useEffect(() => {
        const split = src.split("/");
        setMediaName(split[split.length - 1].toUpperCase())
    }, [src]);

    return (<Modal
        icon={<MediaVideo variant={"32x32_4"} />}
        title={`MediaPlayer - ${mediaName}`}
        closeModal={close}
        menu={[
            {
                name: "File",
                list: (
                    <List>
                        <List.Item>
                            Close
                        </List.Item>
                    </List>
                )
            },
            {
                name: "Help",
                list: (
                    <List>
                        <List.Item>
                            Close
                        </List.Item>
                    </List>
                )
            }
        ]}
        style={{
            left: isMobile ? '5%' : '50%',
            top: isMobile ? '3%' : '15%',
        }}>
        <Frame
            bg="white"
            boxShadow="in"
            padding={2}
            children={[
                <VideoContainer>
                    <VideoTag src={src} ref={player} />
                    <Frame
                        bg="lightgray"
                        boxShadow="in"
                        style={{
                            height: "5%",
                            width: "100%"
                        }}
                        padding={1}
                        children={[
                            <Controls>
                                <ControlBtn
                                    onClick={() => {
                                        if(!isPlaying) {
                                            player.current?.play().finally(() => { });
                                        } else {
                                            player.current?.pause();
                                        }
                                        setPlaying(!isPlaying);
                                    }}
                                >
                                    {isPlaying ? <Pause /> : <Play />}
                                </ControlBtn>
                                <ControlBtn
                                    onClick={() => {
                                        if(player.current) {
                                            player.current.pause();
                                            player.current.currentTime = 0;
                                        }

                                        setPlaying(false);
                                    }}
                                >
                                    <Stop />
                                </ControlBtn>

                            </Controls>

                        ]}
                    />
                </VideoContainer>
            ]}
        />
    </Modal>)

}