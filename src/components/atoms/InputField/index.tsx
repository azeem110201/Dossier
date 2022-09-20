import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";
import theme from "../../../themes/index";
import InputAdornment from "@mui/material/InputAdornment";
type PropsType = {
  border?: boolean;
  textColor?: string;
  startadornment?: string;
  inputType?: string;
  isReadonly?: boolean;
  defaultValue?: React.ReactNode;
} & TextFieldProps;

const choiceType = (inputType?: string) => {
  if (inputType === "dropdown") {
    return 624;
  } else {
    return 256;
  }
};

const StyledTextField = styled((props: PropsType) => {
  const icon = {
    startAdornment: (
      <InputAdornment position="start">
        <img src={props.startadornment} height={20} width={26} />
      </InputAdornment>
    ),
  };
  const { ...other } = props;
  if (props.startadornment === null || props.startadornment === undefined)
    return <TextField {...other} />;
  else if (
    props.isReadonly === true
  )
    return (
      <TextField
        defaultValue={props.defaultValue}
        InputProps={{ readOnly: true }}
      />
    );
  else return <TextField InputProps={icon} {...other} />;
})(({ inputType, border, textColor, startadornment }) => ({
  display: "flex",
  textAlign: "center",
  width: choiceType(inputType),
  marginLeft:
    startadornment !== "undefined" || startadornment !== null ? 10 : 2,
  "& .MuiInput-root": {
    "&:before, :after": {
      borderBottom: border && `1px solid ${theme.palette.grey[300]}`,
    },
    color: textColor || theme.palette.text.primary,
  },
  backgroundColor: theme.palette.structural[50],
  borderRadius: inputType === "dropdown" ? "4px" : "8px",
  "&.MuiTextField-root": {
    "& .MuiOutlinedInput-input": {
      color: textColor || theme.palette.text.primary,
      fontWeight: 400,
      lineHeight: "22px",
      fontSize: "14px",
      "&::placeholder": {
        color: `${theme.palette.text.disabled}`,
        opacity: 1,
      },
      "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
        border: border
          ? `1px solid ${theme.palette.grey[300]} !important`
          : "none",
      },
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: border ? `1px solid ${theme.palette.grey[300]}` : "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: border ? `1px solid ${theme.palette.grey[300]}` : "none",
  },
}));
const TextFieldComponent: React.FC<PropsType> = ({
  border = true,
  ...remProps
}: PropsType) => {
  return <StyledTextField border={border} {...remProps} />;
};

export default TextFieldComponent;
