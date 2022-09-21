import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import UploadMedia from ".";
import UploadImage from "../../../assets/icons/upload.png";
import AddLink from "../../../assets/icons/addLink.png";


export default {
  title: "Molecules/UploadMedia",
  component: UploadMedia,
} as ComponentMeta<typeof UploadMedia>;

const Template: ComponentStory<typeof UploadMedia> = (args) => <UploadMedia {...args}/>;

export const Upload = Template.bind({});

Upload.args = {
    uploadImage: UploadImage,
    addLink: AddLink,
    uploadText: 'Upload Media',
    addLinkText: 'Add link',
}