import { ComponentStory, ComponentMeta } from "@storybook/react";
import EducationDetail from ".";
import React from "react";

export default {
  title: "Organisms/EducationDetails",
  component: EducationDetail,
} as ComponentMeta<typeof EducationDetail>;

const Template: ComponentStory<typeof EducationDetail> = () => {
  return <EducationDetail />;
};

export const user = Template.bind({});