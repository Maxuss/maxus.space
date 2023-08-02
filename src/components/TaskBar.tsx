import {List, TaskBar} from "@react95/core";
import {ReaderClosed, WindowsExplorer} from "@react95/icons";

export function Bar() {
    return (
        <TaskBar list={
            <List>
            <List.Item icon={<ReaderClosed variant="16x16_4" onClick={() => console.log("second clicked")} /> }>
                Local Disk (C:)
            </List.Item>
                <List.Item icon={<WindowsExplorer variant="16x16_4" />} onClick={() => console.log("first clicked")}>
                    Windows Explorer
                </List.Item>
            </List>
        } />)

}