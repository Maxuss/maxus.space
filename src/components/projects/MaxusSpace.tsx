import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon, Websrch} from "@react95/icons";
import {Tooltip} from "@react95/core";

export default function MaxusSpace() {
    return (<DescriptionContainer>
        <h1>maxus.space</h1>
        <ProjectLanguages languages={["ts", "react"]}/>
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/maxus.space",
                desc: "repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            },
            {href: "https://maxus.space", desc: "this website", icon: <Websrch variant={"16x16_4"}/>}
        ]}/>
        <p>
            maxus.space is the website you are currently on! I was kinda burned out so I decided to update my website.
            I decided to go for Windows95 style. Despite the fact that I use <Tooltip
            text={"i use arch btw :3"}>Linux</Tooltip>,
            I have always liked old system designs, due to how simplistic and functional they are.
        </p>
        <p>
            Big thanks to the <ExternLink href={"https://github.com/React95/React95"} desc={"React95"}/> development
            team for making such a beautiful library!
        </p>
    </DescriptionContainer>)
}