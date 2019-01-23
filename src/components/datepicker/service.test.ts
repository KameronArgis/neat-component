import { generateMonthByYear, generateRows } from "./services";

describe("Generate Rows", () => {
  it("Should return an array of days for the specified month", () => {
    // January
    const month = 1;
    const year = 2000;

    const resultLenght = 31;
    const result = generateMonthByYear(month, year);
    expect(result.length).toBe(resultLenght);
  });
});
