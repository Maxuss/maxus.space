import {CdMusic, FolderFile, Winhlp324000} from "@react95/icons";
import {Bar} from "./components/TaskBar.tsx";

import {LastFmPlaying} from "./components/LastFmPlaying.tsx";
import {AboutModal} from "./components/AboutModal.tsx";
import {Clickable, IconName, ProgramIcon, ProgramIcons} from "./components/ProgramIcon.tsx";
import {ProjectExplorer} from "./components/ProjectExplorer.tsx";
import {ReactElement, useState} from "react";
import {Notepad} from "./components/Notepad.tsx";
import Filler from "./components/projects/Filler.tsx";

import "./App.css"

const IconAboutMe = Clickable(Winhlp324000);
const IconMusic = Clickable(CdMusic);
const IconFileExplorer = Clickable(FolderFile);

function App() {
    const [isNotepadClosed, setNotepadClosed] = useState(true);
    const [isProjectExplorerClosed, setProjectExplorerClosed] = useState(true);
    const [isAboutClosed, setAboutClosed] = useState(false);
    const [isLastFmClosed, setLastFmClosed] = useState(true);
    const [notepadComponent, setNotepadComponent] = useState(<Filler />);

    const isMobile = window.innerWidth < 850;

    const changeNotepadPage = (component: ReactElement) => {
        setNotepadComponent(component);
        if(isNotepadClosed)
            setNotepadClosed(false)
    }

    return (
    <>
        <div className="container">
            <ProgramIcons>
                <ProgramIcon>
                    <IconAboutMe variant={"32x32_4"} onClick={() => setAboutClosed(false)}/>
                    <IconName>About me</IconName>
                </ProgramIcon>
                <ProgramIcon>
                    <IconMusic variant={"32x32_4"} style={{marginLeft: 4}} onClick={() => setLastFmClosed(false)}/>
                    <IconName>Music</IconName>
                </ProgramIcon>
                <ProgramIcon>
                    <IconFileExplorer variant={"32x32_4"} onClick={() => setProjectExplorerClosed(false)} />
                    <IconName>Projects</IconName>
                </ProgramIcon>
            </ProgramIcons>

            {!isAboutClosed && <AboutModal close={() => setAboutClosed(true)} />}

            {!isLastFmClosed && <LastFmPlaying close={() => setLastFmClosed(true)} />}

            {!isNotepadClosed && <Notepad openComponent={notepadComponent} isMobile={isMobile} closeNotepad={() => setNotepadClosed(true)} />}

            {!isProjectExplorerClosed && <ProjectExplorer changeNotepadPage={changeNotepadPage} closeProjectExplorer={() => setProjectExplorerClosed(true)} />}

            <Bar />
        </div>
    </>
  )
}

export default App
