import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from ".";

test("App name to be present in the document", () => {
  render(<Header />);

  const appName = screen.getByText("Dossier");

  expect(appName).toBeInTheDocument();
});

test("Click on the avatar to get the popup for logout", () => {
    render(<Header />);

    const help = screen.getByAltText('help');
    expect(help).toBeInTheDocument();

    const notification = screen.getByAltText('notification');
    expect(notification).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');

    expect(avatar).toBeInTheDocument();
})