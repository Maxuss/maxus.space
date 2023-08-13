import {useState} from "react";
import {Avatar, Modal} from "@react95/core";
import {BlankScreen100} from "@react95/icons";

import "../styles/AboutModal.css"

export const AboutModal = () => {
    const [isAboutClosed, setAboutClosed] = useState(false);
    return (<>
        {!isAboutClosed && <Modal
            closeModal={() => setAboutClosed(true)}
            width="400" height="300"
            buttons={[{
                value: "Ok",
                onClick: () => setAboutClosed(true)
            }]}
            defaultPosition={{x: 200, y: 200}}
            title="About me"
            icon={<BlankScreen100 variant="32x32_4" />}
        >
            <div className="about-box">
                <Avatar src={"https://github.com/Maxuss.png"} alt={"my pfp :3"} size={100} />
                <div className=".about-header">
                    <h1>
                        hi im maxus
                    </h1>
                    <h3>
                        i like doing stuff (programming mostly)
                    </h3>
                </div>
            </div>
        </Modal>}
    </>)
}