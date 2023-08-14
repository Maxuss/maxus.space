import React, {ReactElement} from "react";
import {Frame, Modal, Tooltip} from "@react95/core";
import {Notepad1} from "@react95/icons";
import styled from "styled-components";

export interface NotepadProps {
    openComponent: ReactElement,
    isMobile: boolean,
    closeNotepad: () => void
}

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface LanguageProps {
    languages: ("kotlin" | "csharp" | "java" | "rust")[]
}

export const ProjectLanguages: React.FC<LanguageProps> = ({ languages }) => {
    return (
        <HorizontalContainer>
            <p style={{fontSize: 14}}>Languages: </p>
            {
                languages.map(each => {
                    switch(each) {
                        case "kotlin": return <Tooltip text={"Kotlin"}><img alt="kotlin logo" src="/kotlin.svg" height={16} style={{paddingRight: 4, paddingBottom: 2}} /></Tooltip>
                        case "csharp": return <Tooltip text={"C#"}><img alt="csharp logo" src="/csharp.svg" height={16} style={{paddingRight: 4}}/></Tooltip>
                        case "java": return <Tooltip text={"Java"}><img alt="Java" src="/java.svg" height={16} style={{paddingRight: 4}}/></Tooltip>
                        case "rust": return <Tooltip text={"Rust"}><img alt="Rust" src="/rust.svg" height={16} style={{paddingRight: 4}}/></Tooltip>
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

export const ProjectLinks: React.FC<LinkProps> = ({ links }) => {
    return (
        <HorizontalContainer>
            <p style={{fontSize: 14}}>Links: </p>
            {
                links.map(each =>
                    <span style={{paddingTop: 10}}>{each.icon} <LinkHidden href={each.href} target={"_blank"}>{each.desc}</LinkHidden></span>
                )
            }
        </HorizontalContainer>
    )
}

export const Notepad: React.FC<NotepadProps> = ({ openComponent, isMobile, closeNotepad }) => {
    return (
        <Modal
            icon={<Notepad1 />}
            title={`Notepad`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
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
                }}
                children={[openComponent]}
            />
        </Modal >
    )
}