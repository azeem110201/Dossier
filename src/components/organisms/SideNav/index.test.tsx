import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { contentList } from "../../../data/SideNavList";
import SideNav from ".";

test("Renders the SideNav", () => {
  render(<SideNav contentList={contentList} />);
  const ReactElement = screen.getByTestId("side-nav-bar");
  expect(ReactElement).toBeInTheDocument();
});

test("Check templates tab", () => {
  render(<SideNav contentList={contentList} />);
  const elements = contentList.map((element) => {
    return element.text;
  });
  elements.forEach((element: string) => {
    const iconTypo = screen.getByText(element);
    expect(iconTypo).toBeInTheDocument();
  });
});
