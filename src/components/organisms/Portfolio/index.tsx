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
import { draftButtonText, previewButtonText, publishButtonText, copyIconAlt, trashIconAlt } from "../../../utils/constants";


const Container = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  alignItems: "center",
  margin: "auto",
  width: "60.625rem",
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
    if (id === 2) {
      return <EducationDetail />;
    }
    else {
      return <Certifications />;
    }
  };
  return (
    <Container data-testid="portfolio">
      <Buttons>
        <Button variant="text" disabled={false} size="large">
          { previewButtonText }
        </Button>
        <Button variant="outlined" disabled={false} size="medium">
          { draftButtonText }
        </Button>
        <Button variant="contained" disabled={false} size="large">
          { publishButtonText }
        </Button>
      </Buttons>

      {getSlideData(sliderId)}

      <PortfolioIcons data-testid="portfolio-icons">
        <img src={Copy} alt={copyIconAlt} />
        <img src={Trash} alt={trashIconAlt} />
      </PortfolioIcons>

      <Slider data={sliderData} getSliderId={getSliderId} />
    </Container>
  );
};

export default Portfolio;
