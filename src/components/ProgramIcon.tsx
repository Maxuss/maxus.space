import styled, {WebTarget} from "styled-components";
import {Cursor} from "@react95/core";

export const ProgramIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProgramIcons = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  padding: 8px;
`;

export function ClickableIcon<Target extends WebTarget>(tg: Target) {
    return styled(tg)`
      ${Cursor["Pointer"]}
    `;
}
