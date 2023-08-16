import React, {ReactElement} from "react";
import {Frame, List, Modal, Tooltip} from "@react95/core";
import {Notepad1, WebLink} from "@react95/icons";
import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface LanguageProps {
    languages: ("kotlin" | "csharp" | "java" | "rust" | "ts" | "next" | "react")[]
}

export const ProjectLanguages: React.FC<LanguageProps> = ({languages}) => {
    return (
        <HorizontalContainer>
            <p style={{fontSize: 14}}>Languages: </p>
            {
                languages.map(each => {
                    switch (each) {
                        case "kotlin":
                            return <Tooltip text={"Kotlin"}><img alt="kotlin logo" src="/icons/kotlin.svg" height={16}
                                                                 style={{paddingRight: 4, paddingBottom: 2}}/></Tooltip>
                        case "csharp":
                            return <Tooltip text={"C#"}><img alt="csharp logo" src="/icons/csharp.svg" height={16}
                                                             style={{paddingRight: 4}}/></Tooltip>
                        case "java":
                            return <Tooltip text={"Java"}><img alt="Java" src="/icons/java.svg" height={16}
                                                               style={{paddingRight: 4}}/></Tooltip>
                        case "rust":
                            return <Tooltip text={"Rust"}><img alt="Rust" src="/icons/rust.svg" height={16}
                                                               style={{paddingRight: 4}}/></Tooltip>
                        case "ts":
                            return <Tooltip text={"TypeScript"}><img alt="TypeScript" src="/icons/typescript.svg"
                                                                     height={16}/></Tooltip>
                        case "next":
                            return <Tooltip text={"Next.JS"}><img alt="Next.JS" src="/icons/nextjs.svg" height={16}
                                                                  style={{paddingRight: 4}}/></Tooltip>
                        case "react":
                            return <Tooltip text={"React"}><img alt="React" src="/icons/react.svg"
                                                                height={16}/></Tooltip>
                    }
                }).map(each => <span style={{paddingTop: 14}}>{each}</span>)
            }
        </HorizontalContainer>
    )
}

export interface SingleLink {
    href: string,
    desc: string,
    icon: ReactElement
}

export interface LinkProps {
    links: SingleLink[]
}

const LinkHidden = styled.a`
  text-decoration: none;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ProjectLinks: React.FC<LinkProps> = ({links}) => {
    return (
        <HorizontalContainer>
            <p style={{fontSize: 14}}>Links: </p>
            {
                links.map(each =>
                    <span style={{paddingTop: 10}}>{each.icon} <LinkHidden href={each.href}
                                                                           target={"_blank"}>{each.desc}</LinkHidden></span>
                )
            }
        </HorizontalContainer>
    )
}

export interface ExternLinkProps {
    href: string,
    desc: string
}

export const ExternLink: React.FC<ExternLinkProps> = ({href, desc}) => {
    return (
        <span>
            <Tooltip text={href}>
                <LinkHidden href={href} target={"_blank"}>{desc}</LinkHidden>
                <WebLink style={{marginRight: 5, height: 12, width: 12}} variant={"16x16_4"}/>
            </Tooltip>
        </span>
    )
}

export interface NotepadProps {
    openComponent: ReactElement,
    fileName: string,
    isMobile: boolean,
    closeNotepad: () => void
}

export const Notepad: React.FC<NotepadProps> = ({openComponent, fileName, isMobile, closeNotepad}) => {
    return (
        <Modal
            icon={<Notepad1/>}
            title={`Notepad - ${fileName.toUpperCase()}`}
            closeModal={closeNotepad}
            buttons={[{value: "Close", onClick: closeNotepad}]}
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
                    name: "Format",
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
                    fontSize: isMobile ? 12 : 14
                }}
                children={[openComponent]}
            />
        </Modal>
    )
}