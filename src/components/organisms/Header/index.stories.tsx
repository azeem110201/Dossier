import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};