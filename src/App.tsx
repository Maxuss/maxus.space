import {Access229} from "@react95/icons";
import {Bar} from "./components/TaskBar.tsx";

import {LastFmPlaying} from "./components/LastFmPlaying.tsx";
import {AboutModal} from "./components/AboutModal.tsx";
import {ProgramIcon, ProgramIcons} from "./components/ProgramIcon.tsx";
import {ProjectExplorer} from "./components/ProjectExplorer.tsx";

function App() {
    return (
    <>
        <div className="container">
            <ProgramIcons>
                <ProgramIcon>
                    <Access229 variant={"32x32_4"}/>
                    <span>About me</span>
                </ProgramIcon>
            </ProgramIcons>

            <AboutModal />

            <LastFmPlaying />

            <ProjectExplorer />

            <Bar />
        </div>
    </>
  )
}

export default App
