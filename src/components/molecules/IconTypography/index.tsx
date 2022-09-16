import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";
import Typography from "../../atoms/typography";
import theme from "../../../themes";
export interface IconTypographyProps {
  icon?: string;
  text?: string;
  selected: boolean;
  onClick?: () => void;
  id?: number;
}

const WrapperStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  gap: 3,
  textTransform: "none",
  "&:hover": {
    cursor: "pointer",
  },
});

const WrapperImage = styled("img")<{
  selected: boolean;
}>(({ selected }) => ({
  border: selected ? `4px solid ${theme.palette.primary.contrastText}` : "none",
  borderRadius: selected ? "10px" : "none",
}));

const IconTypography = (props: IconTypographyProps) => {
  return (
    <Container data-testid="icon-typography" onClick={props.onClick}>
      <WrapperStyle>
        <WrapperImage
          selected={props.selected}
          id={`img-${props.id}`}
          src={props.icon}
          alt={props.text}
        />
        <Typography
          variant="overline2"
          color={theme.palette.text.secondary}
        >
          {props.text}
        </Typography>
      </WrapperStyle>
    </Container>
  );
};

export default IconTypography;
