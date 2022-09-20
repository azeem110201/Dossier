import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Certifications from ".";

export default {
  title: "organisms/Certifications",
  component: Certifications,
} as ComponentMeta<typeof Certifications>;

const Template: ComponentStory<typeof Certifications> = (args) => {
  return <Certifications />;
};

export const primary = Template.bind({});

primary.args = {};
