/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import theme from "../../../themes/index";
import { getImageSrc } from "../../../utils/mapperFunction";

interface AutoCompleteDropdownProps {
  label: string;
  onChange?: (e: any, newValue: any) => void;
  item_array: Array<string>;
}

const classes = makeStyles(() => ({
  textInput: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    width: "39rem",
    paddingLeft: "10px !important",
  },
  logoStyles: {
    width: "1.5rem",
    height: "1.5rem",
  },

  autoComplete: {
    width: "39rem",
    height: "2.5rem",

    "&:hover": {
      borderColor: "yellow",
    },
  },
  list: {
    height: "2.5rem",
  },
}));

const MuiAutoCompleteDropdown = styled(Autocomplete)(() => ({
  "& .css-16awh2u-MuiAutocomplete-root.MuiOutlinedInput-root.MuiAutocomplete-input":
    { padding: "0", borderColor: `${theme.palette.text.disabled} !important` },
  "& .css-1lq56uf-MuiInputBase-root-MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      borderColor: `${theme.palette.grey[300]} !important`,
    },

  ul: {
    padding: "0 !important",
  },
  "& .MuiAutocomplete-popper.css-1s5lphu-MuiPopper-root-MuiAutocomplete-popper":
    {
      padding: "0 !important",
    },

  "&  .MuiAutocomplete-paper": {
    margin: "0 !important",
    border: "0 !important",
  },
  "& .MuiAutocomplete-popper ": {
    boxSizing: "border-box",
    padding: "0 ",
    margin: "0",
    backgroundColor: "yellow !important",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.grey[300]} !important`,
    zIndex: 1,
  },
  "& .MuiInputBase-root": {
    padding: "0",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0",
  },

  "& .MuiAutocomplete-listbox": {
    margin: "0 !important",
    padding: "0 !important",
  },
}));

const AutoCompleteDropdown: React.FC<AutoCompleteDropdownProps> = ({
  label,
  onChange,
  item_array,
}) => {
  const styles = classes();
  return (
    <MuiAutoCompleteDropdown
      data-testid={`autocomplete-${label}`}
      className={styles.autoComplete}
      popupIcon={null}
      disableClearable
      options={item_array}
      onChange={onChange}
      noOptionsText={"No Results Found"}
      renderOption={(props: any, option: any) => {
        return (
          <Box
            data-testid="options"
            component="li"
            className={styles.list}
            sx={{
              height: "2.5rem",
              "& > img": { mr: 2, flexShrink: 0 },
            }}
            {...props}
          >
            {label === "Search University Here" && (
              <img
                loading="lazy"
                className={styles.logoStyles}
                src={getImageSrc(option)}
                srcSet={`${getImageSrc(option)} 2x`}
                alt={`${option}`}
              />
            )}
            <Typography variant="caption3">{option}</Typography>{" "}
          </Box>
        );
      }}
      renderInput={(params: any): React.ReactNode => {
        return (
          <TextField
            data-testid={`textfield-${label}`}
            {...params}
            placeholder={label}
            InputProps={{
              classes: { input: styles.textInput },
              ...params.InputProps,
              type: "autoComplete",
              style: { fontWeight: "normal" },
            }}
          />
        );
      }}
    ></MuiAutoCompleteDropdown>
  );
};

export default AutoCompleteDropdown;
