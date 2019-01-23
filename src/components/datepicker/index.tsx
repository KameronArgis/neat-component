import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DAYS = ["MON", "TUE", "WED", "SAT", "FRI", "SAT", "SUN"];

class DatePicker extends React.Component {
  render() {
    return <div className="date-picker-container">Coucou date Picker</div>;
  }
}
