import { DosPlayer as Instance, DosPlayerFactoryType } from "js-dos";
import {Modal} from "@react95/core";
import {Notepad1} from "@react95/icons";
import React, {useEffect, useRef, useState} from "react";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    bundleUrl: string,
    isMobile: boolean,
    close: () => void
}

export const DosPlayer: React.FC<PlayerProps> = ({ bundleUrl, isMobile, close }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        const instance = Dos(root);

        setDos(instance);

        return () => {
            instance?.stop();
        };
    }, [rootRef]);
    useEffect(() => {
        if (dos !== null) {
            dos?.run(bundleUrl); // ci is returned
        }
    }, [dos, bundleUrl]);

    return (
        <Modal
            icon={<Notepad1 />}
            title={`DOS`}
            closeModal={close}
            width={isMobile ? "400" : "800"}
            height={isMobile ? "400" : "800"}
        >
            <div ref={rootRef} style={{width: "100%", height: "100%"}}>

            </div>

        </Modal>)
}