import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon} from "@react95/icons";

export default function ConductLang() {
    return (<DescriptionContainer>
        <h1>Conduct</h1>
        <ProjectLanguages languages={["rust"]} />
        <ProjectLinks links={[
            { href: "https://github.com/Maxuss/conduct", desc: "repository", icon: <Nwnp32ServerIcon variant={"16x16_4"} /> },
        ]} />
        <p>
            Conduct is a <em>very</em> experimental language. Basically the idea behind Conduct is to have multiple
            cardinally different compilation target. For example a program in conduct should be able to compile with a GCC target
            and a JVM target, while having the same functionality.
        </p>
        <p>
            Conduct is very-very-very far from being considered complete, but I am gradually working on it.
        </p>
    </DescriptionContainer>)
}