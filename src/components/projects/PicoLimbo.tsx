import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon} from "@react95/icons";

export default function PicoLimbo() {
    return (
        <DescriptionContainer>
            <h1>picolimbo</h1>
            <ProjectLanguages languages={["rust"]}/>
            <ProjectLinks links={[
                {
                    href: "https://github.com/Maxuss/picolimbo",
                    desc: "repository",
                    icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
                },
                // { href: "https://crates.io/crates/picolimbo", desc: "crates.io", icon: <Nwnp32FolderIcon variant={"16x16_4"} /> },
                // { href: "https://docs.rs/lobsterchat/latest/lobsterchat/", desc: "docs.rs", icon: <Explorer101 variant={"16x16_4"} /> },
            ]}/>
            <p>
                PicoLimbo is my experimental Minecraft limbo server implementation in Rust. I was wondering, how small
                was it possible to make
                a limbo for it to remain functional and stable if large player amounts joined. In search for the answer
                I found <ExternLink href={"https://github.com/Nan1t/NanoLimbo"} desc={"NanoLimbo"}/>.
                However, it was written in Java, and therefore was not able to achieve maximum performance, so I decided
                to <em>Rewrite It in Rust</em>™. ️
            </p>
            <p>
                Stress tests show that PicoLimbo is extremely solid even during large amount of players joining, with it
                only taking around ~20mb of RAM with 2500 players online, compared to
                the over 500mb of RAM of NanoLimbo. After seeing these results I decided to add a bit more functionality
                to PicoLimbo. I added HOCON config support, with features like sending
                messages to players, bossbars, and titles.
            </p>
            <p>
                PicoLimbo currently supports Minecraft versions of 1.7.10 up to 1.19.3 (1.20+ is currently unsupported
                due to protocol changes),
                however future version support is planned. It also does not yet directly support any proxies, and is
                generally experimental. I plan on releasing it to crates.io
                once proxy support is finished.
            </p>
        </DescriptionContainer>
    )
}