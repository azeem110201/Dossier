import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Button from "./index";
import theme from "../../../themes";

test("Should Renders a Button", () => {
  render(
    <Button disabled={false} size="medium" variant="contained">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should Renders a Button with disabled as true", () => {
  render(
    <Button disabled={true} size="medium" variant="contained">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should Renders a Button with variant as outlined", () => {
  render(
    <Button disabled={false} size="medium" variant="outlined">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should Renders a Button with large size", () => {
  render(
    <Button disabled={false} size="large" variant="outlined">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should Renders a Button with contained disable=false style", () => {
  render(
    <Button disabled={false} size="medium" variant="contained">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveStyle({
    color: theme.palette.structural[100],
    backgroundColor: theme.palette.primary.main,
  });
});

test("Should Renders a Button with contained disable=true style", () => {
  render(
    <Button disabled={true} size="medium" variant="contained">
      Button
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toHaveStyle({
    color: theme.palette.structural[100],
    backgroundColor: theme.palette.primary.main,
  });
});