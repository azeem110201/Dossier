import React from "react";
import { Button as MuiButton, styled } from "@mui/material";
import theme from "../../../themes";

export interface ButtonProps {
  variant: "contained" | "outlined" | "text";
  children: string;
  disabled: boolean;
  onClick?: () => void;
  size: 'small'
  | 'medium'
  | 'large';
}

const colorVariant = (variant: string, disabled: boolean) => {
  if (variant === "contained") {
    return theme.palette.structural[100];
  }

  if(variant === 'contained' && disabled) {
    return theme.palette.structural[100];
  }
  
  return theme.palette.primary.main;
};

const backGroundColorVariant = (variant: string, disabled: boolean) => {
  if (variant === "contained") {
    return theme.palette.primary.main;
  }

  if(disabled && variant === 'contained') {
    return theme.palette.success.light;
  }
};

const ButtonComponent = styled(MuiButton)<{
  disabled: boolean;
  variant: "text" | "contained" | "outlined";
}>(({ disabled, variant }) => ({
  padding: variant === 'contained' || variant === 'outlined' ? '8px 32px 8px 32px' : 'none',
  borderRadius: '4px',
  backgroundColor: backGroundColorVariant(variant, disabled),
  color: colorVariant(variant, disabled),
  border: variant === 'outlined' ? `1px solid ${theme.palette.primary.main}` : 'none',
  textTransform: 'none',
  '&:hover': {
    border: variant === 'outlined' ? `1px solid ${theme.palette.primary.main}` : 'none',
    backgroundColor: variant === 'contained' ? theme.palette.primary.contrastText : theme.palette.primary.dark,
  },
  '&:active': {
    backgroundColor: variant === 'contained' ? theme.palette.primary.light : theme.palette.primary.dark,
  }
}));

const Button = (props: ButtonProps) => {
  return (
    <ButtonComponent
      variant={props.variant}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
    >
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
