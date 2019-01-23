/**
 * / @todo:
 *
 * Check that the final array lenght is stricly equal to 35
 * Fix the row generation, the start day is not good and the month is one above the one it should be
 * Unit test the functions
 * */

const DAYS = ["SUN", "MON", "TUE", "WED", "SAT", "FRI", "SAT"];

type Month = {
  dayLabel?: string;
  date?: Date;
};

export function generateMonthByYear(month: number, year: number): Month[] {
  const date = new Date(year, month, 1);
  const maxDays = new Date(year, month, 0).getDate();
  const firstDay = date.getDay();

  let lastDayIndex = firstDay;
  const monthArray = [];

  for (let i = 0; i < maxDays; i += 1) {
    monthArray.push({
      dayLabel: DAYS[lastDayIndex],
      date: new Date(year, month, i)
    });

    if (lastDayIndex < 6) {
      lastDayIndex += 1;
    } else {
      lastDayIndex = 0;
    }
  }

  return monthArray;
}

export function generateRows(months: Month[]) {
  const startOffset = months[0].date.getDay();
  // 7 days on 5 lines = 7*5 = 35
  const monthGridTotalTiles = 35;
  const maxRowNumber = 5;
  const monthArray = months;

  // Fill the week until the first day of the month
  for (let i = 0; i < startOffset; i += 1) {
    monthArray.unshift({});
  }

  // Fill the rest of the month with empty tiles
  for (let i = 0; i < monthGridTotalTiles - monthArray.length; i += 1) {
    monthArray.push({});
  }

  return pushDaysInRows(maxRowNumber, monthArray);
}

export function pushDaysInRows(maxRowNumber: number, arr: Month[]) {
  const initArray = [];

  //Creating the needed amount of rows
  for (let i = 0; i < maxRowNumber; i += 1) {
    initArray.push([]);
  }

  return arr.reduce(
    (acc, curr, i) => {
      console.log("acc =>", acc);
      if (i <= 6) {
        acc[0].push(curr);
      } else if (i <= 13) {
        acc[1].push(curr);
      } else if (i <= 20) {
        acc[2].push(curr);
      } else if (i <= 27) {
        acc[3].push(curr);
      } else {
        acc[4].push(curr);
      }

      return acc;
    },
    initArray as any
  );
}
