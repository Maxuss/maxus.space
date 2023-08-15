import React, {ReactElement} from "react";
import {Frame, Modal, Tree} from "@react95/core";
import {
    FileCorrupted, FileFind,
    FilePen,
    Files, FileText,
    Folder,
    FolderFile, FolderShared
} from "@react95/icons";
import {NodeProps} from "@react95/core/@types/Tree/Node";
import {Clickable} from "./ProgramIcon.tsx";
import ChatGptRs from "./projects/ChatGptRs.tsx";
import Flare from "./projects/Flare.tsx";
import Macrocosm from "./projects/Macrocosm.tsx";
import SharpFunction from "./projects/SharpFunction.tsx";
import LobsterMessage from "./projects/LobsterMessage.tsx";

function treeNodes(changeNotepadPage: (to: ReactElement) => void): NodeProps[] {
    return [{
        label: "AI",
        icon: <Folder />,
        id: 0,
        children: [
            {
                label: "ChatGPT.rs",
                icon: <FilePen />,
                id: 0,
                onClick() {
                    changeNotepadPage(<ChatGptRs />)
                }
            },
        ]
    },
    {
        label: "Minecraft",
        icon: <FolderShared />,
        id: 1,
        children: [
            {
                label: "Flare.java",
                icon: <FileFind />,
                id: 0,
                onClick() {
                    changeNotepadPage(<Flare />)
                }
            },
            {
                label: "Macrocosm.kt",
                icon: <FilePen />,
                id: 1,
                onClick() {
                    changeNotepadPage(<Macrocosm />)
                }
            },
            {
                label: "SharpFunction.cs",
                icon: <FileCorrupted />,
                id: 2,
                onClick() {
                    changeNotepadPage(<SharpFunction />)
                }
            },
            {
                label: "lobstermessage.rs",
                icon: <FileText />,
                id: 3,
                onClick() {
                    changeNotepadPage(<LobsterMessage />)
                }
            }
        ]
    },
    {
        label: "Language Development",
        icon: <Folder />,
        id: 2,
        children: [
            {
                label: "Conduit language (unfinished).rs",
                icon: <Files />,
                id: 0,
                onClick() {
                }
            },
            {
                label: "Conduct language (unfinished).rs",
                icon: <Files />,
                id: 1,
                onClick() {

                }
            }
        ]
    }
]
}

interface ProjectExplorerProps {
    changeNotepadPage: (to: ReactElement) => void,
    closeProjectExplorer: () => void
}

const ClickableTree = Clickable(Tree);

export const ProjectExplorer: React.FC<ProjectExplorerProps> = ({ changeNotepadPage, closeProjectExplorer }) => {
    return (
        <Modal
            closeModal={() => closeProjectExplorer()}
            title={"Project Explorer"}
            icon={<FolderFile />}
            width={"300"}
            height={"120%"}
        >
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={10}
                style={{
                    overflowY: "auto",
                    maxHeight: "60vh",
                }}
            >
                <ClickableTree data={treeNodes(changeNotepadPage)}/>
            </Frame>
        </Modal>
    )
}