import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: JSX.IntrinsicAttributes & ButtonProps
) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Publish",
  variant: "contained",
  disabled: false,
  size: 'large',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: "Save as Draft",
  variant: "outlined",
  disabled: false,
  size: 'medium',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "Preview",
  variant: "text",
  disabled: false,
  size: 'large',
};

export const DisabledContainedButton = Template.bind({});
DisabledContainedButton.args = {
  children: "Submit",
  variant: "contained",
  disabled: true,
  size: 'medium',
};

export const DisabledOutlinedButton = Template.bind({});
DisabledOutlinedButton.args = {
  children: "Submit",
  variant: "outlined",
  disabled: true,
  size: 'medium',
};

export const DisabledTextButton = Template.bind({});
DisabledTextButton.args = {
  children: "Submit",
  variant: "text",
  disabled: true,
  size: 'medium',
};