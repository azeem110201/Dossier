import React from "react";
import { Autocomplete, Box } from "@mui/material";
import TextField from "../../atoms/InputField/index";
import ImageTypography from "../ImageTypography";
import styled from "@emotion/styled";
import theme from "../../../themes";
interface AutocompleteImageTypography {
  icon?: string;
  title: string;
}
interface PropsType {
  options: AutocompleteImageTypography[];
  getOptionLabel: any;
  onChange: (value: any) => void;
  placeholder: string;
  images: boolean;
}

const OptionsStyled = styled("div")({
  backgroundColor: theme.palette.structural[50],
  border: `1px solid ${theme.palette.primary.dark}`,
  width: 624,
  height: 40,
});

const AutocompleteComponent = ({
  options,
  getOptionLabel,
  onChange,
  placeholder,
  images,
  ...remProps
}: PropsType) => {
  return (
    <>
      {images ? (
        <>
          <Autocomplete
            data-testid="dropdown-category"
            id="dropdown-category"
            options={options}
            freeSolo
            getOptionLabel={getOptionLabel}
            onChange={onChange}
            disableClearable
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={option.icon}
                  alt="Institution icon"
                />
                {option.title}
              </Box>
            )}
            renderInput={(option) => (
              <OptionsStyled>
                <TextField
                  data-testid="input-field"
                  variant="outlined"
                  placeholder={placeholder}
                  inputType="dropdown"
                  {...option}
                />
              </OptionsStyled>
            )}
            {...remProps}
          />
        </>
      ) : (
        <>
          <Autocomplete
            data-testid="autocomplete"
            freeSolo
            id="tags-outlined"
            options={options}
            getOptionLabel={getOptionLabel}
            onChange={() => onChange}
            disableClearable
            renderInput={(params) => (
              <TextField
                data-testid="search-field"
                variant="outlined"
                placeholder={placeholder}
                inputType="dropdown"
                {...params}
              />
            )}
            renderTags={(values) =>
              values.map((option, index) => (
                <ImageTypography
                  key={index}
                  // eslint-disable-next-line react/no-children-prop
                  children={option.icon}
                  description={option.title}
                />
              ))
            }
            {...remProps}
          />
        </>
      )}
    </>
  );
};

export default AutocompleteComponent;
