import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";

interface Props {
  children: React.ReactNode;
  description: string;
}

const WrapperStyle = styled(Box)({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  width: '39rem',
  height: '2.5rem',
  gap: 10,
  textTransform: "none",
});

const WrapImage = styled(Grid)({
  alignSelf: "center",
  marginTop: 5,
});

const ImageTypography = (props: Props) => {
  return (
    <WrapperStyle>
      <WrapImage>{props.children}</WrapImage>
      <Typography variant="overline2" color={theme.palette.text.primary}>
        {props.description}
      </Typography>
    </WrapperStyle>
  );
};

export default ImageTypography;