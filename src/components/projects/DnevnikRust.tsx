import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Explorer101, Nwnp32FolderIcon, Nwnp32ServerIcon} from "@react95/icons";

export default function DnevnikRust() {
    return (<DescriptionContainer>
        <h1>dnevnik.mos.ru Rust API</h1>
        <ProjectLanguages languages={["rust"]} />
        <ProjectLinks links={[
            { href: "https://github.com/Maxuss/dnevnik", desc: "repository", icon: <Nwnp32ServerIcon variant={"16x16_4"} /> },
            { href: "https://crates.io/crates/dnevnik", desc: "crates.io", icon: <Nwnp32FolderIcon variant={"16x16_4"} /> },
            { href: "https://docs.rs/dnevnik/latest/dnevnik/", desc: "docs.rs", icon: <Explorer101 variant={"16x16_4"} /> },
        ]} />
        <p>
            Dnevnik.rs is a rust wrapper for dnevnik.mos.ru internal API that was reverse engineered. I made it because I was bored and wanted to
            reverse engineer something. Considering there are literally 0 dnevnik.mos.ru APIs in the wild it was kinda fun.
        </p>
        <p>
            It probably doesn't work anymore considering it was made in early 2022 and dnevnik.mos.ru changes like every month.
        </p>
    </DescriptionContainer>)
}