import {Frame, List, Modal, Tree} from "@react95/core";
import styled from "styled-components";
import {FolderOpen} from "@react95/icons";
import React, {ReactElement, useState} from "react";
import {FileSystem, fileSystemTree, FileType} from "../fs";
import {FileList} from "./fs/FileList.tsx";

const Dual = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nested = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface ExplorerProps {
    close: () => void,
    isMobile: boolean,
    openNotepad: (ele: ReactElement) => void,
}

export const FileExplorer: React.FC<ExplorerProps> = ({ close, openNotepad }) => {
    const [activeDirectory, setActiveDirectory] = useState(FileSystem)

    const openFile = (ty: FileType, contents: ReactElement) => {
        switch(ty) {
            case "text": return openNotepad(contents)
        }
    }

    return (<Modal
        title={`Exploring - ${activeDirectory.display}`}
        icon={<FolderOpen />}
        closeModal={close}
        width={"100%"}
        height={"415"}
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
                name: "Edit",
                list: (
                    <List>
                        <List.Item>
                            Close
                        </List.Item>
                    </List>
                )
            },
            {
                name: "View",
                list: (
                    <List>
                        <List.Item>
                            Close
                        </List.Item>
                    </List>
                )
            },
            {
                name: "Tools",
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
    >
        <Dual>
            <Nested>
                <Frame
                    bg="lightgray"
                    boxShadow="in"
                    style={{
                        height: "6%",
                        width: 200
                    }}
                    padding={5}
                    children={[
                        <span>All folders</span>
                    ]}
                />
                <Frame
                    bg="white"
                    boxShadow="in"
                    height="100%"
                    style={{
                        height: "320px",
                        maxHeight: "60vh",
                    }}
                    children={[<div style={{marginTop: -10}}><Tree data={fileSystemTree(setActiveDirectory)} /></div>]}
                />
            </Nested>
            <Nested>
                <Frame
                    bg="lightgray"
                    boxShadow="in"
                    style={{
                        height: "6%",
                        width: 310
                    }}
                    padding={5}
                    children={[
                        <span>Contents of '{activeDirectory.display}'</span>
                    ]}
                />
                <Frame
                    bg="white"
                    boxShadow="in"
                    height="100%"
                    padding={5}
                    style={{
                        height: 320,
                        overflowY: "auto",
                        maxHeight: "60vh",
                    }}
                    children={[<FileList files={activeDirectory.elements} openFile={openFile} setActiveFolder={setActiveDirectory} />]}
                />
            </Nested>
        </Dual>
        <Frame
            bg="lightgray"
            boxShadow="in"
            style={{
                height: "5%",
                width: "100%"
            }}
            padding={5}
            children={[
                <span>{activeDirectory.elements.length} object(s)</span>
            ]}
        />

    </Modal>)
}