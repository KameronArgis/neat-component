import * as React from "react";
import styled from "styled-components";

interface IProps {
  date: Date;
  onClick: () => void;
}

const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex: 1;
  transition: all 0.2s ease-in;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

function DatePickerTile({ date, onClick }: IProps) {
  const day = date.getUTCDay();
  return <TileContainer onClick={onClick}>{day}</TileContainer>;
}

export default DatePickerTile;
