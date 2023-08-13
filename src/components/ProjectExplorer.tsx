import React, {useState} from "react";
import {Modal, Tree} from "@react95/core";
import {
    FileCorrupted,
    FilePen,
    Files,
    Folder,
    FolderFile, FolderShared
} from "@react95/icons";
import {NodeProps} from "@react95/core/@types/Tree/Node";

const TreeNodes: Array<NodeProps> = [
    {
        label: "AI",
        icon: <Folder />,
        id: 0,
        children: [
            {
                label: "ChatGPT.rs",
                icon: <FilePen />,
                id: 0,
                onClick(event: React.MouseEvent | React.KeyboardEvent, props: NodeProps) {
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
                label: "Macrocosm.kt",
                icon: <FilePen />,
                id: 0,
                onClick(event: React.MouseEvent | React.KeyboardEvent, props: NodeProps) {
                }
            },
            {
                label: "SharpFunction.cs",
                icon: <FileCorrupted />,
                id: 1,
                onClick(event: React.MouseEvent | React.KeyboardEvent, props: NodeProps) {
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
                onClick(event: React.MouseEvent | React.KeyboardEvent, props: NodeProps) {
                }
            },
            {
                label: "Conduct language (unfinished).rs",
                icon: <Files />,
                id: 1,
                onClick(event: React.MouseEvent | React.KeyboardEvent, props: NodeProps) {

                }
            }
        ]
    }
]

export const ProjectExplorer = () => {
    const [isClosed, close] = useState(false);

    return (<>
        {!isClosed && <Modal
            closeModal={() => close(true)}
            title={"Project Explorer"}
            icon={<FolderFile />}
            width={"300"}
            height={"220"}
        >
            <Tree data={TreeNodes}/>
        </Modal>}
        </>)
}