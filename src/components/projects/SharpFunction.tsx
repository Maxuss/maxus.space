import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {FolderOpen, New16, Nwnp32ServerIcon} from "@react95/icons";

export default function SharpFunction() {
    return (
        <DescriptionContainer>
            <h1>SharpFunction (and its continuations)</h1>
            <ProjectLanguages languages={["csharp"]}/>
            <ProjectLinks links={[
                {
                    href: "https://github.com/Maxuss/SharpFunction",
                    desc: "repository (1)",
                    icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
                },
                {
                    href: "https://github.com/Maxuss/CopperSharp",
                    desc: "repository (2)",
                    icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
                },
                {href: "https://maxuss.github.io/SharpFunction/", desc: "docs", icon: <New16 variant={"16x16_4"}/>},
                {
                    href: "https://www.nuget.org/packages/SharpFunction",
                    desc: "nuget",
                    icon: <FolderOpen variant={"16x16_4"}/>
                }
            ]}/>
            <p>
                SharpFunction was originally made by me to learn C# better, and to help me with generating minecraft
                datapacks.
                Considering it was probably my first big project, the code quality is just <em>awful</em>, and I can't
                state it enough.
                Nevertheless, SharpFunction somehow got over 3k total downloads on NuGet.
            </p>
            <p>
                After noticing numerous issues within SharpFunction, I decided to revamp it, creating CopperSharp.
                However, it also died
                after some time and I moved to Rust, which eventually lead to me coming up with Conduit (see
                Projects-&gt;Language Development).
            </p>
        </DescriptionContainer>
    )
}