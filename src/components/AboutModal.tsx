import {useState} from "react";
import {Avatar, Modal, ProgressBar} from "@react95/core";
import {BlankScreen100} from "@react95/icons";

import "../styles/AboutModal.css"
import styled from "styled-components";

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
            <ProgressBar percent={percentage} width={200} />
        </div>
    )
}

export const AboutModal = () => {
    const [isAboutClosed, setAboutClosed] = useState(false);
    return (<>
        {!isAboutClosed && <Modal
            closeModal={() => setAboutClosed(true)}
            width="400" height="420"
            buttons={[{
                value: "Ok",
                onClick: () => setAboutClosed(true)
            }]}
            defaultPosition={{x: 200, y: 200}}
            title="About me"
            icon={<BlankScreen100 variant="32x32_4" />}
        >
            <AboutBox>
                <AboutAvatarBox>
                    <Avatar src={"https://github.com/Maxuss.png"} alt={"my pfp :3"} size={100} />
                    <AboutHeader>
                        <h2>hi im maxus and i like coding</h2>
                        <LargeFontSpan>you can find most of my projects on my <a href={"https://github.com/Maxuss"} target={"_blank"}>github</a></LargeFontSpan>
                    </AboutHeader>
                </AboutAvatarBox>
                <AboutBody>
                    <LargeFontSpan>here is how effective i am in my favorite languages:</LargeFontSpan>
                    <LanguageProgressBar language={"Java"} percentage={79} />
                    <LanguageProgressBar language={"Kotlin"} percentage={76} />
                    <LanguageProgressBar language={"C#"} percentage={68} />
                    <LanguageProgressBar language={"Rust"} percentage={65} />
                    <LanguageProgressBar language={"TypeScript"} percentage={60} />
                    <h2>i am currently interested in:</h2>
                    <SmallerList>
                        <SmallerListItem>learning functional programming (specifically OCaml/Haskell)</SmallerListItem>
                        <SmallerListItem>language development (see my projects <a href={"https://github.com/Maxuss/conduit-lang"} target={"_blank"}>Conduit</a> and <a href={"https://github.com/Maxuss/conduct"} target={"_blank"}>Conduct</a>)</SmallerListItem>
                        <SmallerListItem>more backend development in Rust with <a href={"https://docs.rs/axum/latest/axum/"} target={"_blank"}>Axum</a></SmallerListItem>
                    </SmallerList>
                </AboutBody>
            </AboutBox>
        </Modal>}
    </>)
}