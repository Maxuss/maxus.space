import React, {ReactElement} from "react";
import {Frame, Modal, Tree} from "@react95/core";
import {
    FileCorrupted, FileFind,
    FilePen,
    Files,
    Folder,
    FolderFile, FolderShared
} from "@react95/icons";
import {NodeProps} from "@react95/core/@types/Tree/Node";
import ChatGptRs from "./projects/ChatGptRs.tsx";
import Flare from "./projects/Flare.tsx";

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
                }
            },
            {
                label: "SharpFunction.cs",
                icon: <FileCorrupted />,
                id: 2,
                onClick() {
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
                <Tree data={treeNodes(changeNotepadPage)}/>
            </Frame>
        </Modal>
    )
}