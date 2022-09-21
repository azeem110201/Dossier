import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typography from ".";

test("renders a typography tag", () => {
  render(<Typography variant="h1">Hello World</Typography>);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
