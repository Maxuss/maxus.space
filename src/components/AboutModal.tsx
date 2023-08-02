import {Modal} from "@react95/core";
import {BlankScreen100} from "@react95/icons";
import {useState} from "react";

export function AboutModal() {
    const [isClosed, setClosed] = useState(false);

    return (
        <>
        {!isClosed && <Modal
            closeModal={() => setClosed(true)}
            width="400" height="300"
            buttons={[{
                value: "Ok",
                onClick: () => setClosed(true)
            }]}
            defaultPosition={{x: 200, y: 200}}
            title="About me"
            icon={<BlankScreen100 variant="32x32_4" />}
        >

        </Modal>}
        </>
    )
}