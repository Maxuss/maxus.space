import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon} from "@react95/icons";

export default function ConduitLang() {
    return (<DescriptionContainer>
        <h1>Conduit</h1>
        <ProjectLanguages languages={["rust"]}/>
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/conduit-lang",
                desc: "repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            },
        ]}/>
        <p>
            Conduit is an experimental language that compiles to Minecraft functions.
            I initially got this idea when I saw projects like <ExternLink href={"https://mcscript.stevertus.com/"}
                                                                           desc={"mcsript"}/> and after
            developing SharpFunction. However mcscript seemed to simple to me, I wanted something more powerful.
        </p>
        <p>
            Unfortunately, at the moment I got this idea, it was practically impossible to make a fully fledged language
            compile
            to .mcfunction, due to lack of function arguments and other necessary features.
        </p>
        <p>
            Thankfully, in Minecraft <ExternLink
            href={"https://www.minecraft.net/en-us/article/minecraft-snapshot-23w31a"}
            desc={"snapshot 23w31a"}/> function
            macros have been introduced, adding arguments to functions and string substitutions. So I started working on
            Conduit.
        </p>
        <p>
            Conduit is currently far from complete, but the parser and lexer is already fully done and I am working on
            the compiler now.
        </p>
    </DescriptionContainer>)
}