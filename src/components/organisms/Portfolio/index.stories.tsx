import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Portfolio from ".";

export default {
  title: "Organisms/Portfolio",
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = () => {
  return <Portfolio />;
};

export const Default = Template.bind({});
Default.args = {};
