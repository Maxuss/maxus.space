import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Explorer101, Nwnp32FolderIcon, Nwnp32ServerIcon} from "@react95/icons";

export default function LobsterMessage() {
    return (
        <DescriptionContainer>
            <h1>lobstermessage</h1>
            <ProjectLanguages languages={["rust"]}/>
            <ProjectLinks links={[
                {
                    href: "https://github.com/Maxuss/lobstermessage",
                    desc: "repository",
                    icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
                },
                {
                    href: "https://crates.io/crates/lobsterchat",
                    desc: "crates.io",
                    icon: <Nwnp32FolderIcon variant={"16x16_4"}/>
                },
                {
                    href: "https://docs.rs/lobsterchat/latest/lobsterchat/",
                    desc: "docs.rs",
                    icon: <Explorer101 variant={"16x16_4"}/>
                },
            ]}/>
            <p>
                LobsterMessage is an implementation of Minecraft <ExternLink href={"https://wiki.vg/Chat"}
                                                                             desc={"Chat Component"}/> in Rust. It also
                contains
                a parser for <ExternLink href={"https://docs.advntr.dev/minimessage/index.html"}
                                         desc={"Kyori's MiniMessage"}/>, which allows to easily design
                chat components using HTML-like syntax.
            </p>
            <p>
                LobsterMessage was originally built for one of my (now forgotten) minecraft server implementations in
                Rust. It was later used in my other projects,
                such as PicoLimbo (see Projects-&gt;Minecraft).
            </p>
            <p>
                LobsterMessage is still not a 100% replication of MiniMessage, it does not yet support gradients and
                click/hover events, although it is planned.
            </p>
        </DescriptionContainer>
    )
}