import {useState} from "react";
import styled from "styled-components";

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

export const Unselectable = styled.label`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
