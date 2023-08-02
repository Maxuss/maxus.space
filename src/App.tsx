import {Access229} from "@react95/icons";
import {Button} from "@react95/core";
import {AboutModal} from "./components/AboutModal.tsx";
import {Bar} from "./components/TaskBar.tsx";

function App() {
  return (
    <>
        <div className="container">
            <Access229 variant="32x32_4" />

            <Button>Hello, world!</Button>

            <AboutModal />

            <Bar />
        </div>
    </>
  )
}

export default App
