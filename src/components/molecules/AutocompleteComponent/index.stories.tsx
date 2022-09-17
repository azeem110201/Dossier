import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Autocomplete from ".";
import { certificateNames } from "../../../data/CertificateNames";

export default {
  title: "Molecules/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const Certificates = Template.bind({});
Certificates.args = {
  options: certificateNames,
  placeholder: "Search a certificate name here",
  getOptionLabel: (option: any) => option.title,
  images: true,
};
