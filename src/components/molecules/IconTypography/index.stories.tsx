import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconTypography from "./index";
import TypographIcon from "../../../assets/icons/T.svg";
import ElementsIcon from "../../../assets/icons/elements.svg";

export default {
  title: "Molecules/IconTypography",
  component: IconTypography,
} as ComponentMeta<typeof IconTypography>;

const Template: ComponentStory<typeof IconTypography> = (args) => (
  <IconTypography {...args} />
);

export const typograph = Template.bind({});
typograph.args = {
  icon: TypographIcon,
  text: "Typography",
  selected: false,
};

export const elements = Template.bind({});
elements.args = {
  icon: ElementsIcon,
  text: "Elements",
  selected: false,
};
