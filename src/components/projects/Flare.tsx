import {DescriptionContainer, ExternLink, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Cachevu100, Explorer101, Nwnp32ServerIcon, Shell3214} from "@react95/icons";

export default function Flare() {
    return (<DescriptionContainer>
        <h1>Flare</h1>
        <ProjectLanguages languages={["java"]}/>
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/chatgpt_rs",
                desc: "repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            },
            {
                href: "https://central.sonatype.com/artifact/space.maxus/flare/1.0.0",
                desc: "maven central",
                icon: <Cachevu100 variant={"16x16_4"}/>
            },
            {href: "https://flare.maxus.space", desc: "docs", icon: <Explorer101 variant={"16x16_4"}/>},
            {
                href: "https://bstats.org/plugin/bukkit/Flare/18411",
                desc: "bstats",
                icon: <Shell3214 variant={"16x16_4"}/>
            }
        ]}/>
        <p>
            Flare is an experimental inventory UI design framework for Spigot. It is heavily inspired by
            React and thus borrows a lot of ideas from it.
        </p>
        <p>
            Flare supports custom components, reactive states, memoization out of the box. It also has a lot of
            pre-built
            components, ranging from <ExternLink href={"https://flare.maxus.space/ui/composable/#button"}
                                                 desc={"simple buttons"}/>
            to <ExternLink href={"https://flare.maxus.space/ui/composable/#progressbar"} desc={"progress bars"}/>
            and <ExternLink href={"https://flare.maxus.space/ui/composable/#containerslot"} desc={"container slots"}/>.
            Flare also includes built-in support for <ExternLink
            href={"https://www.spigotmc.org/resources/placeholderapi.6245/"} desc={"PlaceholderAPI"}/>
        </p>
        <p>
            Flare is still not 100% complete. I plan on adding UI definition from <ExternLink
            href={"https://github.com/lightbend/config/blob/main/HOCON.md"} desc={"HOCON"}/>
            configs in future. After that, you will be able to use it as a standalone plugin too.
        </p>
    </DescriptionContainer>)
}