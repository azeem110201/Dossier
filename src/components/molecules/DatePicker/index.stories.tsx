import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResponsiveDatePickers from ".";
export default {
  title: "Molecules/DatePicker",
  component: ResponsiveDatePickers,
} as ComponentMeta<typeof ResponsiveDatePickers>;

const Template: ComponentStory<typeof ResponsiveDatePickers> = (args) => (
  <ResponsiveDatePickers {...args} />
);

export const datePicker = Template.bind({});
datePicker.args = {};
