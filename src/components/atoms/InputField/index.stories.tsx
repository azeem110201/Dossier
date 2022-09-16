import React from "react";
import TextField from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "../../../assets/icons/search.svg";
import SearchSmall from "../../../assets/icons/icons_small.svg";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const SearchBar = Template.bind({});
SearchBar.args = {
  placeholder: "Search here",
  variant: "outlined",
  startadornment: SearchSmall,
  inputType: "search",
  border: false,
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  placeholder: "Select by category",
  variant: "outlined",
  startadornment: Search,
  inputType: "dropdown",
  border: true,
};
