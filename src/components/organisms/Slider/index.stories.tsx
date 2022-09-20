import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SlideBackground from ".";
import { sliderData } from "../../../data/SliderData";

export default {
  title: "Organisms/SlideBackground",
  component: SlideBackground,
} as ComponentMeta<typeof SlideBackground>;

const Template: ComponentStory<typeof SlideBackground> = (args) => {
  return <SlideBackground {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data: sliderData,
};