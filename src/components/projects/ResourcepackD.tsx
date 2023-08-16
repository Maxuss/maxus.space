import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32FolderIcon, Nwnp32ServerIcon} from "@react95/icons";
import {Tooltip} from "@react95/core";

export default function ResourcepackD() {
    return (
        <DescriptionContainer>
            <h1>resourcepackd</h1>
            <ProjectLanguages languages={["rust"]}/>
            <ProjectLinks links={[
                {
                    href: "https://github.com/Maxuss/resourcepackd",
                    desc: "repository",
                    icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
                },
                {
                    href: "https://crates.io/crates/resourcepackd",
                    desc: "crates.io",
                    icon: <Nwnp32FolderIcon variant={"16x16_4"}/>
                },
            ]}/>
            <p>
                ResourecepackD is probably my smallest project. It is a simple daemon tool that watches a Minecraft
                resource pack directory
                and quickly recompiles it to a .zip file, optionally doing additional comment stripping for <Tooltip
                text={"JSON with Comments"}><span style={{color: "goldenrod"}}>.JSONC</span></Tooltip> and
                <Tooltip text={"Minecraft Meta with Comments"}><span
                    style={{color: "goldenrod"}}>.MCMETAC</span></Tooltip> files, and minifying all possible
                files. It is designed mostly for prototyping and writing a pack, and if you wish to distribute a pack,
                you should additionally compile it
                with the <ExternLink href={"https://github.com/ComunidadAylas/PackSquash"} desc={"PackSquash"}/> tool.
            </p>
        </DescriptionContainer>
    )
}