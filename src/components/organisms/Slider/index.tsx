import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import styled from "@emotion/styled";
import IconTypography from "../../molecules/IconTypography";
import theme from "../../../themes";
import "react-multi-carousel/lib/styles.css";
import { sliderData } from "../../../data/SliderData";

export interface SliderDataProps {
  id: number;
  src: string;
  text: string;
  selected: boolean;
}

export interface SliderProps {
  data: SliderDataProps[];
  selected?: number;
  onClick?: () => void;
  getSliderId: (id: number) => void;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselContainer = styled(Carousel)({
  width: "59.625rem",
  height: "9.4rem",
  boxShadow: `0px -2px 4px rgba(0, 0, 0, 0.12)`,
  backgroundColor: theme.palette.structural[50],
  display: "flex",
});

const Slider = (props: SliderProps) => {
  const [select, setSelect] = useState<number>(
    props.selected ? props.selected : 0
  );

  const handleSelect = (id: number) => {
    setSelect(id);
    props.getSliderId(id);
  };

  return (
    <CarouselContainer
      swipeable={false}
      draggable={false}
      responsive={responsive}
      slidesToSlide={3}
      data-testid="slider"
    >
      {sliderData.map((slider: SliderDataProps, index) => {
        if (index !== sliderData.length - 1) {
          return (
            <div key={index} data-testid="icon-typo">
              <IconTypography
                selected={select === index}
                key={index}
                icon={slider.src}
                text={slider.text}
                id={index}
                onClick={() => handleSelect(slider.id)}
              />
            </div>
          );
        }
      })}
      {sliderData.map((slider: SliderDataProps, index) => {
        if (index === sliderData.length - 1) {
          return (
            <div key={index} data-testid="icon-typo">
              <IconTypography
                selected={select === index}
                key={index}
                icon={slider.src}
                text={slider.text}
                id={index}
                onClick={() => handleSelect(slider.id)}
              />
            </div>
          );
        }
      })}
    </CarouselContainer>
  );
};

export default Slider;
