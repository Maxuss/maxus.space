import {DosPlayer as Instance, DosPlayerFactoryType} from "js-dos";
import {Modal} from "@react95/core";
import {Progman10} from "@react95/icons";
import React, {useEffect, useRef, useState} from "react";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
    bundleUrl: string,
    isMobile: boolean,
    close: () => void
}

export const DosPlayer: React.FC<PlayerProps> = ({bundleUrl, isMobile, close}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dos, setDos] = useState<Instance | null>(null);
    const [appName, setAppName] = useState("NULL.EXE");

    useEffect(() => {
        const split = bundleUrl.split("/");
        setAppName(split[split.length - 1].toUpperCase().replace(".JSDOS", ".EXE"))
    }, [bundleUrl]);

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
            icon={<Progman10 variant={"32x32_4"}/>}
            title={`MSDOS - Running ${appName}`}
            closeModal={close}
            width={isMobile ? "400" : "800"}
            height={isMobile ? "300" : "600"}
        >
            <div ref={rootRef} style={{width: "100%", height: "100%"}} />
        </Modal>)
}