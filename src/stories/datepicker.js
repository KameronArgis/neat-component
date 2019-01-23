import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import DatePickerRow from "../components/datepicker/components/row";
import DatePickerTile from "../components/datepicker/components/tile";

const stubWeek = [new Date(), new Date(), new Date(), new Date(), new Date()];

storiesOf("DatePicker", module)
  .add("Tile", () => (
    <DatePickerTile date={new Date()} onClick={action("clicked")} />
  ))
  .add("Row", () => <DatePickerRow week={stubWeek} />);
