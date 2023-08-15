import {ReactElement} from "react";
import {
    Computer4,
    Defrag2,
    FileText,
    Folder, FolderFile,
    RecycleEmpty,
} from "@react95/icons";
import {NodeProps} from "@react95/core/@types/Tree/Node";

export interface Directory {
    path: string,
    display: string,
    icon: ReactElement
    elements: FileEntry[]
}

export interface File {
    path: string,
    display: string,
    icon: ReactElement,
    contents: ReactElement,
    ty: FileType
}

export type FileEntry = File | Directory;

export const FileSystem: Directory = {
    path: "/",
    display: "My Computer",
    icon: <Computer4 variant={"16x16_4"} />,
    elements: [
        {
            path: "C:/",
            display: "MAXUS (C:)",
            icon: <Defrag2 variant={"16x16_4"} />,
            elements: [
                {
                    path: "C:/Documents",
                    display: "My Documents",
                    icon: <FolderFile variant={"16x16_4"} />,
                    elements: [
                        {
                            path: "C:/Documents/Example.txt",
                            display: "Example.txt",
                            icon: <FileText variant={"16x16_4"} />,
                            contents: <div>hello, world</div>,
                            ty: "text"
                        },
                        {
                            path: "C:/Documents/Another.txt",
                            display: "Another.txt",
                            icon: <FileText variant={"16x16_4"} />,
                            contents: <div>another text</div>,
                            ty: "text"
                        }
                    ]
                },
                {
                    path: "C:/Photos",
                    display: "Photos",
                    icon: <Folder variant={"16x16_4"} />,
                    elements: [ ]
                },
                {
                    path: "C:/Videos",
                    display: "Videos",
                    icon: <Folder variant={"16x16_4"} />,
                    elements: [ ]
                },
                {
                    path: "C:/Trash",
                    display: "Recycled",
                    icon: <RecycleEmpty variant={"16x16_4"} />,
                    elements: []
                }
            ]
        }
    ]
}

function mapDirEntry(setActiveFolder: (dir: Directory) => void, dir: Directory, idx: number): NodeProps {
    return {
        id: idx,
        label: dir.display,
        icon: dir.icon,
        onClick() { setActiveFolder(dir) },
        children: dir.elements.map((each, eachIdx): NodeProps | undefined => {
            if("elements" in each) {
                return mapDirEntry(setActiveFolder, each, eachIdx)
            } else {
                return undefined
            }
        }).filter(it => it !== undefined) as NodeProps[]
    }
}

export function fileSystemTree(setActiveFolder: (dir: Directory) => void): NodeProps[] {
    return [mapDirEntry(setActiveFolder, FileSystem, 0)]
}

export type FileType = "text" | "image" | "video";

