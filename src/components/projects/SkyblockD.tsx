import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon} from "@react95/icons";

export default function SkyblockD() {
    return (<DescriptionContainer>
        <h1>SkyblockD</h1>
        <ProjectLanguages languages={["java"]}/>
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/SkyblocKD",
                desc: "repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            },
        ]}/>
        <p>
            SkyblockD was made when I was overly obsessed with Hypixel Skyblock and wanted to replicate it while
            learning Java.
            It is a Spigot (not even Paper) plugin for Minecraft 1.16 that adds different stuff from Hypixel Skyblock:
            items, enemies,
            and even some bosses.
        </p>
        <p>
            I didn't really know what I was doing when coding it, and it was one of my first big projects, so the code
            is really messy, the
            items and balancing is inconsistent. But I made it to play with friends originally and we had fun so it was
            kind of good? After finishing it I started
            working on Macrocosm (see Projects-&gt;Minecraft) and Macrocosm is generally better than SkyblockD.
        </p>
        <p>
            What's with the name? I don't really know either tbh. My brain was probably <em>skyblocked</em> at the
            moment.
        </p>
    </DescriptionContainer>)
}