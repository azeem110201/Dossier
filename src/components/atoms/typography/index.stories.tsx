import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Typography from ".";

export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title",
        "heading1",
        "heading2",
        "body1",
        "body2",
        "caption1",
        "caption2",
        "caption3",
        "overline1",
        "overline2",
      ],
      defaultValue: { summary: "heading1" },
      type: "string",
      description: "Hello World",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
);

export const Heading1 = Template.bind({});

Heading1.args = {
  variant: "h1",
  children: "Cash Acceleration",
};
