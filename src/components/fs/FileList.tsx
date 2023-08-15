import {Directory, File, FileEntry, FileType} from "../../fs";
import React, {ReactElement} from "react";
import styled from "styled-components";
import {Unselectable} from "../../util.ts";

export interface FileListProps {
    files: FileEntry[],
    openFile: (fileType: FileType, e: ReactElement) => void,
    setActiveFolder: (dir: Directory) => void
}

const FileListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px
`;

const IconContainer = styled.span`
    margin-right: 2px;
`;

export const FileList: React.FC<FileListProps> = ({ files, openFile, setActiveFolder }) => {
    return (<FileListContainer>
        {
            files.map(entry => {
                if("elements" in entry) {
                    // is a dir
                    const dir = entry as Directory;
                    return <span onClick={() => setActiveFolder(dir)}>
                        <IconContainer>{dir.icon}</IconContainer>
                        <Unselectable>{dir.display}</Unselectable>
                    </span>
                } else {
                    // is a file
                    const file = entry as File;
                    return <span onClick={() => openFile(file.ty, file.contents)}>
                        <IconContainer>{file.icon}</IconContainer>
                        <Unselectable>{file.display}</Unselectable>
                    </span>
                }
            })
        }
    </FileListContainer>)
}