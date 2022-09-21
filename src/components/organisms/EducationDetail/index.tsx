import React, { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import Typography from "../../atoms/Typography";
import AddEducation from "../AddEducationModal";
import theme from "../../../themes";
import styled from "@emotion/styled";
import {
  degree,
  fieldOfStudy,
  universityOptions,
} from "../../../data/EducationData";
import {
  educationPage,
  educationDetailsData,
  notificationAlt,
} from "../../../utils/constants";

export interface EducationUniversityDetails {
  id: number;
  image: string;
  collegeName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export interface UniversityDetails {
  id: number;
  src: string;
  name: string;
  degree: string;
  date: string;
}

const Container = styled(Box)({
  width: "42.25rem",
  height: "23.6875rem",
  boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.2)`,
  backgroundColor: `${theme.palette.structural[50]}`,
});

const PageType = styled("div")({
  width: "12.0625rem",
  height: "4.125rem",
  textAlign: "center",
  marginLeft: "auto",
  marginBottom: "auto",
  backgroundColor: theme.palette.accent[200],
  position: "relative",
});

const TypeTypography = styled("div")({
  textTransform: "uppercase",
  position: "relative",
  top: "1.25rem",
});

const EducationContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "2rem",
  gap: "1.25rem",
});

const IconButtonContainer = styled(IconButton)({
  backgroundColor: theme.palette.structural[300],
  borderRadius: "50%",
  width: "4.375rem",
  height: "4.375rem",
});

const EducationTextGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
});

const SingleEducation = styled(Grid)<{
  activeIndex: number;
  index: number;
  open: boolean;
}>(({ activeIndex, index, open }) => ({
  width: `21.875rem`,
  display: "flex",
  "&:hover": { cursor: "pointer" },
  border:
    index == activeIndex && open
      ? `1px dashed ${theme.palette.accent[800]}`
      : `none`,
  gap: `1rem`,
}));

const EducationDetail = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [showUniversity, setShowUniversity] =
    useState<UniversityDetails[]>(educationDetailsData);

  const handleClose = () => {
    setOpen(!open);
    setActiveIndex(-1);
  };

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const openAddEducation = (key: number) => {
    setOpen(!open);
    setActiveIndex(key);
  };
  const setFormMethod = (obj: EducationUniversityDetails) => {
    const data = {
      id: activeIndex,
      src: obj.image,
      name: obj.collegeName,
      degree: obj.degree,
      date: `${obj.startDate.split("/")[1]} - ${obj.endDate.split("/")[1]}`,
    };
    showUniversity[activeIndex] = data;
    setShowUniversity(() => {
      return showUniversity;
    });
    setOpen(!open);
    setActiveIndex(-1);
  };
  return (
    <>
      {open ? (
        <AddEducation
          onSubmit={setFormMethod}
          onClose={handleClose}
          university={universityOptions}
          degree={degree}
          fieldOfStudy={fieldOfStudy}
        />
      ) : null}
      <Container>
        <PageType>
          <TypeTypography>
            <Typography variant="caption" color={theme.palette.structural[50]}>
              {educationPage}
            </Typography>
          </TypeTypography>
        </PageType>
        <EducationContainer container>
          {showUniversity.map((university, index) => {
            return (
              <SingleEducation
                item
                activeIndex={activeIndex}
                index={index}
                open
                key={index}
                onClick={() => openAddEducation(index)}
              >
                <IconButtonContainer>
                  <img
                    src={university.src}
                    alt={notificationAlt}
                    width="20px"
                    height="30px"
                  />
                </IconButtonContainer>
                <EducationTextGrid item>
                  <Typography
                    variant="body1"
                    color={theme.palette.structural[700]}
                  >
                    {university.name}
                  </Typography>
                  <Typography
                    variant="overline2"
                    color={theme.palette.structural[700]}
                  >
                    {university.degree}
                  </Typography>
                  <Typography
                    variant="overline2"
                    color={theme.palette.text.secondary}
                  >
                    {university.date}
                  </Typography>
                </EducationTextGrid>
              </SingleEducation>
            );
          })}
        </EducationContainer>
      </Container>
    </>
  );
};

export default EducationDetail;
