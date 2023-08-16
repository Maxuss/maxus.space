import {Directory, File, FileEntry, FileType} from "../../fs";
import React, {ReactElement} from "react";
import styled from "styled-components";
import {Unselectable} from "../../util.ts";

export interface FileListProps {
    files: FileEntry[],
    openFile: (fileType: FileType, name: string, e: ReactElement | string) => void,
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
            files.map((entry, idx) => {
                if("elements" in entry) {
                    // is a dir
                    const dir = entry as Directory;
                    return <span onClick={() => setActiveFolder(dir)} key={idx}>
                        <IconContainer>{dir.icon}</IconContainer>
                        <Unselectable>{dir.display}</Unselectable>
                    </span>
                } else {
                    // is a file
                    const file = entry as File;
                    return <span onClick={() => openFile(file.ty, file.display, file.contents)} key={idx}>
                        <IconContainer>{file.icon}</IconContainer>
                        <Unselectable>{file.display}</Unselectable>
                    </span>
                }
            })
        }
    </FileListContainer>)
}