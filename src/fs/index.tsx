import { ReactElement } from "react";
import {
    Amovie2,
    Brush,
    Computer4,
    Defrag2,
    FileIcons,
    FileText,
    Folder,
    FolderFile,
    Progman10,
    RecycleEmpty,
} from "@react95/icons";
import { NodeProps } from "@react95/core/@types/Tree/Node";

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
    contents: ReactElement | string,
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
                    elements: [
                        {
                            path: "C:/Photos/Icons",
                            display: "Icons",
                            icon: <Folder variant={"16x16_4"} />,
                            elements: iconList("C:/Photos/Icons", ["csharp.svg", "java.svg", "kotlin.svg", "nextjs.svg", "react.svg", "rust.svg", "typescript.svg", "vite.svg"])
                        },
                        {
                            path: "C:/Photos/ralsei.jpg",
                            display: "ralsei.jpg",
                            icon: <Brush variant={"32x32_4"} style={{ width: 16, height: 16 }} />,
                            contents: "/images/ralsei1.jpg",
                            ty: "image"
                        }
                    ]
                },
                {
                    path: "C:/Videos",
                    display: "Videos",
                    icon: <Folder variant={"16x16_4"} />,
                    elements: [
                        {
                            path: "C:/Videos/ralsei.mp4",
                            display: "ralsei.mp4",
                            icon: <Amovie2 variant={"16x16_4"} />,
                            ty: "video",
                            contents: "/videos/ralsei2.mp4"
                        },
                        {
                            path: "C:/Videos/verses-showcase.gif",
                            display: "verses-showcase.gif",
                            icon: <Amovie2 variant={"16x16_4"} />,
                            ty: "image",
                            contents: "/images/verses-showcase.gif"
                        }
                    ]
                },
                {
                    path: "C:/Games",
                    display: "Games",
                    icon: <Folder variant={"16x16_4"} />,
                    elements: [
                        {
                            path: "C:/Games/DOOM.exe",
                            display: "DOOM.EXE",
                            icon: <Progman10 variant={"32x32_4"} style={{ width: 16, height: 16 }} />,
                            ty: "game",
                            contents: "/dos-bundles/doom.jsdos"
                        }
                    ]
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

function iconList(parentDir: string, files: string[]): File[] {
    return files.map(each => {
        return {
            path: `${parentDir}/${each}`,
            display: each,
            icon: <FileIcons variant={"32x32_4"} style={{ width: 16, height: 16 }} />,
            contents: `/icons/${each}`,
            ty: "image"
        }
    })
}

function mapDirEntry(setActiveFolder: (dir: Directory) => void, dir: Directory, idx: number): NodeProps {
    return {
        id: idx,
        label: dir.display,
        icon: dir.icon,
        onClick() {
            setActiveFolder(dir)
        },
        children: dir.elements.map((each, eachIdx): NodeProps | undefined => {
            if ("elements" in each) {
                return mapDirEntry(setActiveFolder, each, eachIdx)
            } else {
                return undefined
            }
        }).filter(it => it !== undefined) as NodeProps[]
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export function fileSystemTree(setActiveFolder: (dir: Directory) => void): NodeProps[] {
    return [mapDirEntry(setActiveFolder, FileSystem, 0)]
}

export type FileType = "text" | "image" | "video" | "game";

