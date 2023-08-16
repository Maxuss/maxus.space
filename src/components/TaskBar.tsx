import {List, TaskBar} from "@react95/core";
import {Drvspace7, Intl101, WindowsExplorer} from "@react95/icons";
import React from "react";

export interface BarProps {
    openFileExplorer: () => void,
    openProjectExplorer: () => void,
    openContacts: () => void
}

export const Bar: React.FC<BarProps> = ({ openFileExplorer, openProjectExplorer, openContacts }) => {
    return (
        <TaskBar list={
            <List>
                <List.Item icon={<Drvspace7 style={{ width: 16, height: 16 }} />} onClick={openContacts}>
                    Contact me!
                </List.Item>

                <List.Divider />

                <List.Item icon={<Intl101 variant="16x16_4"/>} onClick={openProjectExplorer}>
                    Project Explorer
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="16x16_4"/>} onClick={openFileExplorer}>
                    File Explorer
                </List.Item>
            </List>
        }/>)

}