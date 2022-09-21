import { Grid, styled } from "@mui/material";
import React from "react";

export interface PortfolioTemplateProps {
  header: React.ReactNode;
  sideNavbar: React.ReactNode;
  moleculeInfographics: React.ReactNode;
  portfolio: React.ReactNode;
}

const Container = styled(Grid)({
  display: "flex",
  flexDirection: "column",
});

const MainContent = styled(Grid)({
  display: "flex",
  marginTop: "4.2rem",
});

const PortfolioContainer = styled(Grid)({
  marginTop: "2rem",
});

const PortfolioTemplate = (props: PortfolioTemplateProps) => {
  return (
    <Container>
      <Grid md={12}>{props.header}</Grid>
      <MainContent>
        <Grid md={1}>{props.sideNavbar}</Grid>
        <Grid md={1}>{props.moleculeInfographics}</Grid>
        <PortfolioContainer md={10}>{props.portfolio}</PortfolioContainer>
      </MainContent>
    </Container>
  );
};

export default PortfolioTemplate;