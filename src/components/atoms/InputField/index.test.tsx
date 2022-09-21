import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextFieldComponent from "./index";
import Search from "../../../assets/icons/search.svg";
import SearchSmall from "../../../assets/icons/icons_small.svg";

test("renders the component with given placeholder", () => {
  render(
    <TextFieldComponent
      placeholder="Search here"
      variant="outlined"
      startadornment={SearchSmall}
      inputType="search"
      border={false}
    />
  );
  const inputElement = screen.getByPlaceholderText("Search here");
  expect(inputElement).toBeInTheDocument();
});

test("renders border if border = true", () => {
  render(
    <TextFieldComponent
      placeholder="Select by category"
      variant="outlined"
      startadornment={Search}
      inputType="dropdown"
      border={true}
    />
  );
  const inputElement = screen.getByPlaceholderText("Select by category");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).not.toHaveStyle({ border: "none" });
});
