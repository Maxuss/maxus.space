import {useState} from "react";

export function useFetchOneshot(link: string): object | undefined {
    const [valueState, setValue] = useState(undefined);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.send(null)
    xhr.onload = () => {
        if(xhr.status === 200) {
            setValue(JSON.parse(xhr.responseText))
        }
    }

    return valueState
}