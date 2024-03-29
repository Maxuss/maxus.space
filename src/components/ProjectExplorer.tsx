import React, { ReactElement } from "react";
import { Frame, Modal, Tree } from "@react95/core";
import {
    BlankScreen100,
    FileCorrupted,
    FileFind,
    FileFont,
    FilePen,
    Files,
    FileText,
    FileTransfer,
    Folder,
    FolderFile,
    FolderShared,
    Mshtml32528
} from "@react95/icons";
import { NodeProps } from "@react95/core/@types/Tree/Node";
import { Clickable } from "./ProgramIcon.tsx";
import ChatGptRs from "./projects/ChatGptRs.tsx";
import Flare from "./projects/Flare.tsx";
import Macrocosm from "./projects/Macrocosm.tsx";
import SharpFunction from "./projects/SharpFunction.tsx";
import LobsterMessage from "./projects/LobsterMessage.tsx";
import PicoLimbo from "./projects/PicoLimbo.tsx";
import ResourcepackD from "./projects/ResourcepackD.tsx";
import SkyblockD from "./projects/SkyblockD.tsx";
import DnevnikRust from "./projects/DnevnikRust.tsx";
import ConduitLang from "./projects/ConduitLang.tsx";
import ConductLang from "./projects/ConductLang.tsx";
import MaxusSpace from "./projects/MaxusSpace.tsx";
import TerminalMaxusSpace from "./projects/TerminalMaxusSpace.tsx";
import Verses from "./projects/Verses.tsx";

function treeNodes(changeNotepadPage: (name: string, to: ReactElement) => void): NodeProps[] {
    return [
        {
            label: "AI",
            icon: <Folder />,
            id: 0,
            children: [
                {
                    label: "ChatGPT.rs",
                    icon: <FilePen />,
                    id: 0,
                    onClick() {
                        changeNotepadPage("chatgpt.rs", <ChatGptRs />)
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
                        changeNotepadPage("flare.java", <Flare />)
                    }
                },
                {
                    label: "SkyblockD.java",
                    icon: <FileCorrupted />,
                    id: 1,
                    onClick() {
                        changeNotepadPage("skyblockd.java", <SkyblockD />)
                    }
                },
                {
                    label: "Macrocosm.kt",
                    icon: <FilePen />,
                    id: 2,
                    onClick() {
                        changeNotepadPage("macrocosm.kt", <Macrocosm />)
                    }
                },
                {
                    label: "SharpFunction.cs",
                    icon: <FileCorrupted />,
                    id: 3,
                    onClick() {
                        changeNotepadPage("sharpfunction.cs", <SharpFunction />)
                    }
                },
                {
                    label: "lobstermessage.rs",
                    icon: <FileText />,
                    id: 4,
                    onClick() {
                        changeNotepadPage("lobstermessage.rs", <LobsterMessage />)
                    }
                },
                {
                    label: "picolimbo.rs",
                    icon: <FileTransfer />,
                    id: 5,
                    onClick() {
                        changeNotepadPage("picolimbo.rs", <PicoLimbo />)
                    }
                },
                {
                    label: "resourcepackd.rs",
                    icon: <FileFont />,
                    id: 6,
                    onClick() {
                        changeNotepadPage("resourcepackd.rs", <ResourcepackD />)
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
                        changeNotepadPage("conduit.rs", <ConduitLang />)
                    }
                },
                {
                    label: "Conduct language (unfinished).rs",
                    icon: <Files />,
                    id: 1,
                    onClick() {
                        changeNotepadPage("conduct.rs", <ConductLang />)
                    }
                }
            ]
        },
        {
            label: "Web",
            icon: <Folder />,
            id: 3,
            children: [
                {
                    label: "maxus.space",
                    icon: <Mshtml32528 variant={"16x16_4"} />,
                    id: 0,
                    onClick() {
                        changeNotepadPage("maxus.space", <MaxusSpace />)
                    }
                },
                {
                    label: "terminal.maxus.space",
                    icon: <BlankScreen100 variant={"16x16_4"} />,
                    id: 1,
                    onClick() {
                        changeNotepadPage("terminal.maxus.space", <TerminalMaxusSpace />)
                    }
                }
            ]
        },
        {
            label: "Other",
            icon: <Folder />,
            id: 4,
            children: [
                {
                    label: "verses.rs",
                    icon: <FileText />,
                    id: 0,
                    onClick() {
                        changeNotepadPage("verses.rs", <Verses />)
                    }
                },
                {
                    label: "dnevnik-mos.rs",
                    icon: <FileText />,
                    id: 1,
                    onClick() {
                        changeNotepadPage("dnevnik.rs", <DnevnikRust />)
                    }
                }
            ]
        }
    ]
}

interface ProjectExplorerProps {
    changeNotepadPage: (name: string, to: ReactElement) => void,
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
                <ClickableTree data={treeNodes(changeNotepadPage)} />
            </Frame>
        </Modal>
    )
}