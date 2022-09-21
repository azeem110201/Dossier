import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UploadCertificate from ".";

export default {
  title: "Organisms/UploadCertificate",
  component: UploadCertificate,
} as ComponentMeta<typeof UploadCertificate>;

const Template: ComponentStory<typeof UploadCertificate> = (args) => (
  <UploadCertificate {...args} />
);

export const uplodform = Template.bind({});
