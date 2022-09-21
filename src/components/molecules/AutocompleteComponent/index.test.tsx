/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import AutoComplete from ".";
import { certificateNames, data } from "../../../data/CertificateNames";

test("test whether autocomplete is able to render the text", () => {
  render(
    <AutoComplete
      options={data}
      placeholder="Search a award name here"
      getOptionLabel={(option: any) => option.title}
      onChange={() => {}}
      images={false}
    />
  );

  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Awards" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input).toBeInTheDocument();
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input).toBeInTheDocument();
});

test("checks the on change of image/typograpy input ", () => {
  render(
    <AutoComplete
      options={certificateNames}
      placeholder="Search a certificate name here"
      getOptionLabel={(option: any) => option.title}
      onChange={() => {}}
      images={true}
    />
  );
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, {
    target: { value: "Project Management Professional (PMP)" },
  });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input).toBeInTheDocument();
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input).toBeInTheDocument();
});
