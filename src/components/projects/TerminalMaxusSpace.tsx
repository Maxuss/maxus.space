import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon, Websrch} from "@react95/icons";

export default function TerminalMaxusSpace() {
    return (<DescriptionContainer>
        <h1>terminal.maxus.space</h1>
        <ProjectLanguages languages={["ts", "next"]} />
        <ProjectLinks links={[
            { href: "https://github.com/Maxuss/maxus.space-legacy", desc: "repository", icon: <Nwnp32ServerIcon variant={"16x16_4"} /> },
            { href: "https://terminal.maxus.space", desc: "website", icon: <Websrch variant={"16x16_4"} /> }
        ]} />
        <p>
            This is my old website that I built in mid 2022. I originally got the idea from <ExternLink href={"https://oat.zone/"} desc={"this website"} /> by oatmealine.
            The website is basically a terminal with a theme heavily inspired by the <ExternLink href={"https://ohmyz.sh/"} desc={"default oh-my-zsh theme"} />.
            It has a small virtual file system, allowing to read files, and a few other neat commands.
        </p>
        <p>
            Overall, I think it was a pretty good first personal website.
        </p>
    </DescriptionContainer>)
}