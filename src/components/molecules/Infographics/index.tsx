import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import TextFieldComponent from "../../atoms/InputField";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";

export interface TemplateImages {
  id: number;
  src: string;
}

export interface MoleculeInfographicsProps {
  images: TemplateImages[];
  searchIcon: string;
}

const Container = styled(Box)({
  paddingTop: "1.25rem",
  width: "18.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  backgroundColor: theme.palette.grey[100],
  alignItems: "center",
  justifyContent: "center",
});

const Results = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
});

const Templates = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

const MoleculeInfographics = (props: MoleculeInfographicsProps) => {
  return (
    <Container>
      <TextFieldComponent
        placeholder="Search here"
        variant="outlined"
        startadornment={props.searchIcon}
        inputType="Search"
        border={false}
      />

      <Results>
        <Typography variant="overline2" color={theme.palette.text.primary}>
          Showing Results for Finance
        </Typography>
        <Typography variant="overline2" color={theme.palette.primary.main}>
          View More
        </Typography>
      </Results>
      <Templates>
        {props.images.map((image: TemplateImages) => {
          return <img key={image.id} src={image.src} alt="template-image" />;
        })}
      </Templates>
    </Container>
  );
};

export default MoleculeInfographics;
