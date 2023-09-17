import { Explorer101, Nwnp32FolderIcon, Nwnp32ServerIcon } from "@react95/icons";
import { DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks } from "../Notepad.tsx";

export default function Verses() {
    return (<DescriptionContainer>
        <h1>
            verses
        </h1>
        <ProjectLanguages languages={["rust"]} />
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/verses",
                desc: "repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"} />
            },
            {
                href: "https://crates.io/crates/verses",
                desc: "crates.io",
                icon: <Nwnp32FolderIcon variant={"16x16_4"} />
            },
            {
                href: "https://aur.archlinux.org/packages/verses-bin",
                desc: "AUR package",
                icon: <Explorer101 variant={"16x16_4"} />
            },
        ]} />
        <p>
            Verses is a TUI (Terminal UI) viewer for synchronized Spotify lyrics.
            The idea for the project came to me when I was customizing my Linux desktop, and I thought that
            displaying current playing Spotify song along with lyrics would be cool.
        </p>
        <p>
            After some searching I found out that pretty much the only tool that fit my needs
            was <ExternLink
                href={"https://github.com/lyricstify/lyricstify"} desc={"this app"} />, called lyricstify. However it seemed to be
            too minimalistic for me, and being built in JS seemed like an overkill. So I decided to write my own CLI in Rust.
        </p>
        <p>
            It uses <ExternLink
                href={"https://crates.io/crates/ratatui"} desc={"ratatui"} /> for Terminal UI, <ExternLink
                href={"https://crates.io/crates/deunicode"} desc={"deunicode"} /> for romanization and has an extensive configuration in TOML.
        </p>

        <img src="./images/verses-showcase.gif" alt="TUI showcase" width={"150%"} />
    </DescriptionContainer>)
}