import {DescriptionContainer, ProjectLanguages, ProjectLinks} from "../Notepad.tsx";
import {Nwnp32ServerIcon} from "@react95/icons";

export default function Macrocosm() {
    return (<DescriptionContainer>
        <h1>Macrocosm (and Empyrean)</h1>
        <ProjectLanguages languages={["kotlin", "java"]}/>
        <ProjectLinks links={[
            {
                href: "https://github.com/Maxuss/Macrocosm",
                desc: "old repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            },
            {
                href: "https://github.com/Maxuss/Empyrean",
                desc: "new repository",
                icon: <Nwnp32ServerIcon variant={"16x16_4"}/>
            }
        ]}/>
        <p>
            Macrocosm was a project I started shortly after finishing SkyblockD. SkyblockD had just way too much issues,
            starting with
            unbalanced items and generally awful code quality.
        </p>
        <p>
            Macrocosm features systems that support custom items, mobs and blocks, and resource loading at runtime.
            However, after working on
            Macrocosm for over 500 hours it became obvious that purely server-side modding was not enough to fully
            implement my ideas. The codebase
            was getting more bloated over time too, with Macrocosm having over 40k LOC at the moment of repository
            archiving. That's where idea for
            Empyrean first appeared.
        </p>
        <p>
            Empyrean is different from Macrocosm, as it takes more inspirations from Terraria and Calamity mod, rather
            than Hypixel Skyblock. These features
            include custom wings, adrenaline meter and item prefixes. Empyrean is still heavily in development and
            closed source for the time being. I plan on open
            sourcing it once the general code quality increases.
        </p>
    </DescriptionContainer>)
}