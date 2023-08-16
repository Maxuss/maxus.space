import React, {useEffect, useState} from "react";
import {Frame, List, Modal} from "@react95/core";
import {Progman13} from "@react95/icons";

export interface ImageProps {
    src: string,
    isMobile: boolean,
    close: () => void,
}

export const ImageViewer: React.FC<ImageProps> = ({src, isMobile, close}) => {
    const [imageName, setImageName] = useState("NULL.JPG")
    useEffect(() => {
        const split = src.split("/");
        setImageName(split[split.length - 1].toUpperCase())
    }, [src]);

    return (<Modal
        icon={<Progman13 variant={"32x32_4"}/>}
        title={`Image Viewer - ${imageName}`}
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
            children={[<img src={src} style={{width: 300}} alt={`Image Viewer ${src}`}/>]}
        />
    </Modal>)

}