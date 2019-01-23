import * as React from "react";
import styled from "styled-components";
import DatePickerTile from "./tile";
import { generateMonthByYear, generateRows } from "../services";

interface IProps {
  week: Date[];
}

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function DatePickerRow({ week }: IProps) {
  const year = 2002;
  const month = 2;
  const mBY = generateMonthByYear(month, year);
  const rows = generateRows(mBY);

  console.log("month by year", mBY);
  console.log("rows", rows);

  return (
    <RowContainer>
      {week.map(date => (
        <DatePickerTile
          date={date}
          onClick={() => console.log("click on :", date)}
        />
      ))}
    </RowContainer>
  );
}

export default DatePickerRow;
