import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

interface TextTypographyProps extends TypographyProps {
  onClick?: () => void;
}

const Typography: React.FC<TextTypographyProps> = (
  props: TextTypographyProps
) => {
  return <MuiTypography {...props} />;
};

export default Typography;
