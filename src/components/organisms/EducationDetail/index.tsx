import React, { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import Typography from "../../atoms/Typography";
import Masters from "../../../assets/icons/masters.svg";
import AddEducation from "../AddEducation";
import Graduates from "../../../assets/icons/graduates.svg";
import theme from "../../../themes";
import styled from "@emotion/styled";
import {
  degree,
  fieldOfStudy,
  universityOptions,
} from "../../../data/EducationData";

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
  width: 676,
  height: 379,
  boxShadow: `0px 2px 6px rgba(0, 0, 0, 0.2)`,
  backgroundColor: `${theme.palette.structural[50]}`,
});

const PageType = styled("div")({
  width: 193,
  height: 66,
  textAlign: "center",
  marginLeft: "auto",
  marginBottom: "auto",
  backgroundColor: theme.palette.accent[200],
  position: "relative",
});

const TypeTypography = styled("div")({
  textTransform: "uppercase",
  position: "relative",
  top: 20,
});

const EducationDetail = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [showUniversity, setShowUniversity] = useState<UniversityDetails[]>([
    {
      id: 0,
      src: Masters,
      name: "California Institute of Technology",
      degree: "Master of science",
      date: "2010-2012",
    },
    {
      id: 1,
      src: Graduates,
      name: "University of Pennsylvannia",
      degree: "Bachelors of science in Software Systems",
      date: "2006-2010",
    },
  ]);

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
    console.log(obj);
    const data = {
      id: activeIndex,
      src: obj.image,
      name: obj.collegeName,
      degree: obj.degree,
      date: `${obj.startDate.split("/")[1]} - ${obj.endDate.split("/")[1]}`,
    };
    showUniversity[activeIndex] = data;
    setShowUniversity(showUniversity);
    setOpen(!open);
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
              Education Details
            </Typography>
          </TypeTypography>
        </PageType>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            gap: "20px",
          }}
        >
          {showUniversity.map((university, index) => {
            return (
              <Grid
                item
                key={index}
                sx={{
                  width: "350px",
                  display: "flex",
                  "&:hover": { cursor: "pointer" },
                  border:
                    index == activeIndex && open
                      ? `1px dashed ${theme.palette.accent[800]}`
                      : `none`,
                  gap: `17px`,
                }}
                onClick={() => openAddEducation(index)}
              >
                <IconButton
                  sx={{
                    backgroundColor: theme.palette.structural[300],
                    borderRadius: "50%",
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <img
                    src={university.src}
                    alt="notification"
                    width="20px"
                    height="30px"
                  />
                </IconButton>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
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
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default EducationDetail;
