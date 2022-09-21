import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import IconTypography from ".";
import TypographIcon from "../../../assets/icons/T.svg";

test("Check templates tab", () => {
  render(<IconTypography icon={TypographIcon} text="Typography" selected={false}/>);
  const ReactElement = screen.getByTestId("icon-typography");
  expect(ReactElement).toBeInTheDocument();
}); 