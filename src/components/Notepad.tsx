import React, {ReactElement} from "react";
import {Frame, Modal} from "@react95/core";
import {Notepad1} from "@react95/icons";

export interface NotepadProps {
    openComponent: ReactElement,
    isMobile: boolean,
    closeNotepad: () => void
}

export const Notepad: React.FC<NotepadProps> = ({ openComponent, isMobile, closeNotepad }) => {
    return (
        <Modal
            icon={<Notepad1 />}
            title={`Notepad`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
            style={{
                left: isMobile ? '5%' : '50%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '90%' : 450,
            }}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
                    overflowY: "auto",
                    maxHeight: "60vh",
                }}
                children={[openComponent]}
            />
        </Modal >
    )
}