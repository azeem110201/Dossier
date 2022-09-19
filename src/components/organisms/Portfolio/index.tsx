import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Buttons";
import Slider from "../Slider";
import { sliderData } from "../../../data/SliderData";
import Copy from "../../../assets/icons/copy_portfolio.svg";
import Trash from "../../../assets/icons/trash_portfolio.svg";
import EducationDetail from "../EducationDetails";
import Certifications from "../Certifications";

const Container = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  alignItems: "center",
  margin: 'auto',
  width: '60.625rem',
});

const Buttons = styled(Grid)({
  position: "relative",
  marginLeft: "auto",
  marginBottom: "auto",
  display: "flex",
  gap: 12,
});

const PortfolioIcons = styled(Grid)({
  display: `flex`,
  gap: `1.4rem`,
});

const Portfolio = () => {
  const [sliderId, setSliderId] = useState<number>(0);
  const getSliderId = (data: number) => {
    setSliderId(data);
  };

  const getSlideData = (id: number) => {
    switch (id) {
      case 2:
        return (
          <div id="screenshot">
            <EducationDetail />
          </div>
        );

      case 4:
        return (
          <div id="screenshot">
            <Certifications />
          </div>
        );
    }
  };
  return (
    <Container data-testid="portfolio">
      <Buttons>
        <Button variant="text" disabled={false} size="large">
          Preview
        </Button>
        <Button variant="outlined" disabled={false} size="medium">
          Save as Draft
        </Button>
        <Button variant="contained" disabled={false} size="large">
          Publish
        </Button>
      </Buttons>

      {getSlideData(sliderId)}

      <PortfolioIcons data-testid="portfolio-icons">
        <img src={Copy} alt="copy" />
        <img src={Trash} alt="trash" />
      </PortfolioIcons>

      <Slider data={sliderData} getSliderId={getSliderId} />
    </Container>
  );
};

export default Portfolio;
