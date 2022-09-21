import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideNav from ".";
import { contentList } from "../../../data/SideNavList";

export default {
  title: "Organisms/SideNav",
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => {
  return <SideNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  contentList: contentList,
};
