import {Access229} from "@react95/icons";
import {Bar} from "./components/TaskBar.tsx";

import {LastFmPlaying} from "./components/LastFmPlaying.tsx";
import {AboutModal} from "./components/AboutModal.tsx";

function App() {
    return (
    <>
        <div className="container">
            <Access229 variant="32x32_4" />

            <AboutModal />

            <LastFmPlaying />

            <Bar />
        </div>
    </>
  )
}

export default App
