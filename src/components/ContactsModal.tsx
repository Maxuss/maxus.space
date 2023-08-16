import React from "react";
import {Avatar, Modal} from "@react95/core";
import {Drvspace7, Mail} from "@react95/icons";
import styled from "styled-components";
import {ExternLink} from "./Notepad.tsx";

export interface ContactsProps {
    close: () => void
}

const CenteredAvatar = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

const ContactFooter = styled.span`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

export const ContactsModal: React.FC<ContactsProps> = ({ close }) => {
    return <Modal
        closeModal={close}
        width="260" height="350"
        buttons={[{
            value: "Ok",
            onClick: close
        }]}
        defaultPosition={{x: 50, y: 0}}
        title="Contact me!"
        icon={<Drvspace7 variant={"32x32_4"} />}>
        <CenteredAvatar>
            <Avatar src={"/pfp.jpg"} size={60} circle={true} alt={":333"} />
        </CenteredAvatar>
        <ContactList>
            <h2>contact me: </h2>
            <span>discord: maxusdev</span>
            <span>github: <ExternLink href={"https://github.com/Maxuss"} desc={"Maxuss"} /></span>
            <span>mastodon: <ExternLink href={"https://mastodon.social/@maxusdev"} desc={"maxusdev@mastodon.dev"} /></span>
            <span>twitter: <ExternLink href={"https://twitter.com/maxusdev"} desc={"maxusdev"} /></span>
            <span>last.fm: <ExternLink href={"https://last.fm/user/maxusdev"} desc={"maxusdev"} /></span>
            <span>telegram: <ExternLink href={"https://t.me/maxusdev"} desc={"maxusdev"} /></span>
            <span>revolt: maxus#8637</span>
            <span>matrix: xtremum:matrix.org</span>
        </ContactList>
        <ContactFooter>
            <ExternLink href={"mailto:me@maxus.space"} desc={"or just email me!"} icon={<Mail variant={"16x16_4"} />} />
        </ContactFooter>
    </Modal>
}