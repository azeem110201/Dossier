import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../../themes";
import { Box, Grid, Dialog } from "@mui/material";
import Typography from "../../atoms/Typography";
import Certificate1 from "../../../assets/images/Certificate1.svg";
import Certificate2 from "../../../assets/images/Certificate2.svg";
import UploadCertificate from "../UploadCertificate";

export interface CertificateDetails {
  name: string;
  image: string;
  id: number;
}

export interface CertificateData {
  id: number;
  Image: string;
  name: string;
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

const ImageContainer = styled(Grid)({
  display: "flex",
  gap: `1rem`,
  marginTop: `3.5rem`,
  justifyContent: "space-evenly",
});

const Certifications = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [certificate, setCertificate] = useState<CertificateDetails[]>([
    {
      id: 0,
      image: Certificate1,
      name: "Certificate 1",
    },
    {
      id: 1,
      image: Certificate2,
      name: "Certificate 2",
    },
  ]);

  const handleClose = () => {
    setOpen(!open);
    setActiveIndex(-1);
  };

  const handleCertificateModal = (key: number) => {
    setOpen(!open);
    setActiveIndex(key);
  };

  const getCertificateData = (item: CertificateData) => {
    const data = {
      id: activeIndex,
      image: item.Image,
      name: item.name,
    };

    certificate[activeIndex] = data;
    setCertificate(certificate);
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <Dialog open={open} onClose={handleCertificateModal}>
          <UploadCertificate
            onSubmit={getCertificateData}
            onClose={handleClose}
          />
        </Dialog>
      ) : null}
      <Container>
        <PageType>
          <TypeTypography>
            <Typography variant="caption" color={theme.palette.structural[50]}>
              Certifications
            </Typography>
          </TypeTypography>
        </PageType>
        <ImageContainer>
          {certificate.map((certificate, index) => {
            return (
              <Grid
                key={index}
                onClick={() => handleCertificateModal(index)}
                sx={{
                  border:
                    open && activeIndex === index
                      ? `1px dashed ${theme.palette.accent[800]}`
                      : `none`,
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Typography
                  variant="body1"
                  color={theme.palette.structural[700]}
                >
                  {certificate.name}
                </Typography>
                <img src={certificate.image} alt="certificate" />
              </Grid>
            );
          })}
        </ImageContainer>
      </Container>
    </>
  );
};

export default Certifications;
