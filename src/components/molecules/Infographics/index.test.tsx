import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MoleculeInfographics from ".";
import { images, SearchIcon } from "../../../data/InfographicsImages";

export default {
  title: "Molecules/Infographics",
  component: MoleculeInfographics,
} as ComponentMeta<typeof MoleculeInfographics>;

const Template: ComponentStory<typeof MoleculeInfographics> = (args) => (
  <MoleculeInfographics {...args} />
);

export const infographics = Template.bind({});
infographics.args = {
    images: images,
    searchIcon: SearchIcon,
}