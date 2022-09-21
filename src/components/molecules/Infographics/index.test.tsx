import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Infographics from "./index";
import { images, SearchIcon } from "../../../data/InfographicsImages";

test("Should contain a Searchbar component in this component ", () => {
  render(
    <Infographics images={images} searchIcon={SearchIcon}/>
  );
  const searchBar = screen.getByPlaceholderText("Search here");
  expect(searchBar).toBeInTheDocument();
});


test("Should contain all template images in the component", () => {
  render(
    <Infographics images={images} searchIcon={SearchIcon}/>
  );
  const searchBar = screen.getAllByAltText("template-image");
  expect(searchBar.length).toBe(4);
});
