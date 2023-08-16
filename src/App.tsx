import {CdMusic, Drvspace7, FolderExe2, FolderFile, Winhlp324000} from "@react95/icons";
import {Bar} from "./components/TaskBar.tsx";

import {LastFmPlaying} from "./components/LastFmPlaying.tsx";
import {AboutModal} from "./components/AboutModal.tsx";
import {Clickable, IconName, ProgramIcon, ProgramIcons} from "./components/ProgramIcon.tsx";
import {ProjectExplorer} from "./components/ProjectExplorer.tsx";
import {ReactElement, useState} from "react";
import {Notepad} from "./components/Notepad.tsx";
import Filler from "./components/projects/Filler.tsx";

import "./App.css"
import {FileExplorer} from "./components/FileExplorer.tsx";
import {ImageViewer} from "./components/fs/ImageViewer.tsx";
import {MediaPlayer} from "./components/fs/MediaPlayer.tsx";
import {DosPlayer} from "./components/dos/DOSPlayer.tsx";
import {ContactsModal} from "./components/ContactsModal.tsx";

const IconAboutMe = Clickable(Winhlp324000);
const IconMusic = Clickable(CdMusic);
const IconFileExplorer = Clickable(FolderFile);
const IconProjectExplorer = Clickable(FolderExe2)

function App() {
    const [isNotepadClosed, setNotepadClosed] = useState(true);
    const [isProjectExplorerClosed, setProjectExplorerClosed] = useState(true);
    const [isAboutClosed, setAboutClosed] = useState(false);
    const [isLastFmClosed, setLastFmClosed] = useState(false);
    const [notepadComponent, setNotepadComponent] = useState(<Filler/>);
    const [openFileName, setOpenFileName] = useState("null.txt");
    const [isExplorerClosed, setExplorerClosed] = useState(true);
    const [isImageViewerClosed, setImageViewerClosed] = useState(true);
    const [imageViewerImage, setImageViewerImage] = useState("/vite.svg");
    const [isMediaViewerClosed, setMediaViewerClosed] = useState(true);
    const [mediaViewerFile, setMediaViewerFile] = useState("/videos/ralsei2.mp4");
    const [isContactsClosed, setContactsClosed] = useState(true);

    const [isDosClosed, setDosClosed] = useState(true);
    const [dosApp, setDosApp] = useState("/dos-bundles/doom.jsdos");

    const isMobile = window.innerWidth < 850;

    const changeNotepadPage = (fileName: string, component: ReactElement) => {
        setNotepadComponent(component);
        setOpenFileName(fileName);
        if (isNotepadClosed)
            setNotepadClosed(false)
    }

    const changeImageViewerImage = (newSrc: string) => {
        setImageViewerImage(newSrc);
        if (isImageViewerClosed)
            setImageViewerClosed(false)
    }

    const changeMediaPlayerFile = (newSrc: string) => {
        setMediaViewerFile(newSrc);
        if (isMediaViewerClosed)
            setMediaViewerClosed(false)
    }

    const changeDosApp = (newSrc: string) => {
        setDosApp(newSrc);
        if (isDosClosed)
            setDosClosed(false)
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
                        <IconProjectExplorer variant={"32x32_4"} onClick={() => setProjectExplorerClosed(false)}/>
                        <IconName>Projects</IconName>
                    </ProgramIcon>
                    <ProgramIcon>
                        <IconFileExplorer variant={"32x32_4"} onClick={() => setExplorerClosed(false)}/>
                        <IconName>Explorer</IconName>
                    </ProgramIcon>
                    <ProgramIcon>
                        <Drvspace7 variant={"32x32_4"} onClick={() => setContactsClosed(false)}/>
                        <IconName>Contacts</IconName>
                    </ProgramIcon>
                </ProgramIcons>

                {!isAboutClosed && <AboutModal close={() => setAboutClosed(true)}/>}

                {!isLastFmClosed && <LastFmPlaying close={() => setLastFmClosed(true)}/>}

                {!isNotepadClosed &&
                    <Notepad fileName={openFileName} openComponent={notepadComponent} isMobile={isMobile}
                             closeNotepad={() => setNotepadClosed(true)}/>}

                {!isProjectExplorerClosed && <ProjectExplorer changeNotepadPage={changeNotepadPage}
                                                              closeProjectExplorer={() => setProjectExplorerClosed(true)}/>}

                {!isExplorerClosed && <FileExplorer openDos={changeDosApp} openMediaPlayer={changeMediaPlayerFile}
                                                    openImageViewer={changeImageViewerImage}
                                                    openNotepad={changeNotepadPage} isMobile={isMobile}
                                                    close={() => setExplorerClosed(true)}/>}

                {!isImageViewerClosed &&
                    <ImageViewer isMobile={isMobile} src={imageViewerImage} close={() => setImageViewerClosed(true)}/>}

                {!isMediaViewerClosed &&
                    <MediaPlayer isMobile={isMobile} src={mediaViewerFile} close={() => setMediaViewerClosed(true)}/>}

                {!isDosClosed && <DosPlayer isMobile={isMobile} close={() => setDosClosed(true)} bundleUrl={dosApp}/>}

                {!isContactsClosed && <ContactsModal close={() => setContactsClosed(true)} />}

                <Bar openFileExplorer={() => setExplorerClosed(false)} openProjectExplorer={() => setProjectExplorerClosed(false)} openContacts={() => setContactsClosed(false)} />
            </div>
        </>
    )
}

export default App
