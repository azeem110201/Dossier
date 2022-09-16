import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageTypography from "./index";
import CPAMIcon from "../../../assets/logo/cpam.svg";
import PGMPIcon from "../../../assets/logo/pgmp.svg";
import PMPIcon from "../../../assets/logo/pmp.svg";

export default {
  title: "Molecules/ImageTypography",
  component: ImageTypography,
} as ComponentMeta<typeof ImageTypography>;

const Template: ComponentStory<typeof ImageTypography> = (args) => (
  <ImageTypography {...args} />
);

export const PMP = Template.bind({});
PMP.args = {
  children: <img src={CPAMIcon} alt="PMP" width="32px" height="32px" />,
  description: "Health Care IT Certification",
};

export const PGMP = Template.bind({});
PGMP.args = {
  children: <img src={PGMPIcon} alt="PGMP" width="32px" height="32px" />,
  description: "Program Management Professional (PgMP)",
};

export const CPMP = Template.bind({});
CPMP.args = {
  children: <img src={PMPIcon} alt="CPMP" width="32px" height="32px" />,
  description: "Health Care IT Certification",
};