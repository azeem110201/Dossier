import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddEducationModal from ".";
import { degree, fieldOfStudy, universityOptions } from "../../../data/EducationData";


export default {
  title: "Organisms/AddEducationModal",
  component: AddEducationModal,
} as ComponentMeta<typeof AddEducationModal>;

const Template: ComponentStory<typeof AddEducationModal> = (args) => (
  <AddEducationModal {...args}/>
);

export const education = Template.bind({});
education.args = {
    university: universityOptions,
    degree: degree,
    fieldOfStudy: fieldOfStudy,
}