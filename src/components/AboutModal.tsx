import {Avatar, Modal, ProgressBar} from "@react95/core";
import {Winhlp324000} from "@react95/icons";

import styled from "styled-components";
import React from "react";
import {ExternLink} from "./Notepad.tsx";

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AboutAvatarBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
`;

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const LargeFontSpan = styled.span({fontSize: 15});

const SmallerList = styled.ul`
  margin-top: -10px
`;

const SmallerListItem = styled.li`
  margin-left: -12px;
  font-size: 14px;
`;

interface LanguageBarProps {
    language: string,
    percentage: number
}

const LanguageProgressBar: React.FC<LanguageBarProps> = ({language, percentage}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: "80%"}}>
            <LargeFontSpan>{language}</LargeFontSpan>
            <ProgressBar percent={percentage} width={200}/>
        </div>
    )
}

export interface AboutProps {
    close: () => void
}

export const AboutModal: React.FC<AboutProps> = ({close}) => {
    return (
        <Modal
            closeModal={close}
            width="380" height="405"
            buttons={[{
                value: "Ok",
                onClick: () => close()
            }]}
            defaultPosition={{x: 50, y: 0}}
            title="About me"
            icon={<Winhlp324000 variant="32x32_4"/>}
        >
            <AboutBox>
                <AboutAvatarBox>
                    <Avatar src={"/pfp.jpg"} alt={"my pfp :3"} size={80}/>
                    <AboutHeader>
                        <h2>hi, im maxus and i like coding</h2>
                        <LargeFontSpan>check out my <ExternLink href={"https://github.com/Maxuss"}
                                                                desc={"github"}/></LargeFontSpan>
                    </AboutHeader>
                </AboutAvatarBox>
                <AboutBody>
                    <LargeFontSpan>here are my favorite languages and my (probably inaccurate) proficiency in
                        them:</LargeFontSpan>
                    <LanguageProgressBar language={"Java"} percentage={79}/>
                    <LanguageProgressBar language={"Kotlin"} percentage={76}/>
                    <LanguageProgressBar language={"Rust"} percentage={68}/>
                    <LanguageProgressBar language={"C#"} percentage={65}/>
                    <h2>i am currently interested in:</h2>
                    <SmallerList>
                        <SmallerListItem>learning functional programming (specifically OCaml/Haskell)</SmallerListItem>
                        <SmallerListItem>language development (see my projects <a
                            href={"https://github.com/Maxuss/conduit-lang"} target={"_blank"}>Conduit</a> and <a
                            href={"https://github.com/Maxuss/conduct"} target={"_blank"}>Conduct</a>)</SmallerListItem>
                        <SmallerListItem>more backend development in Rust with <a
                            href={"https://docs.rs/axum/latest/axum/"} target={"_blank"}>Axum</a></SmallerListItem>
                    </SmallerList>
                </AboutBody>
            </AboutBox>
        </Modal>
    )
}