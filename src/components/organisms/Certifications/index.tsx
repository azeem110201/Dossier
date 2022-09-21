import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import theme from "../../../themes";
import { Box, Grid, Dialog } from "@mui/material";
import Typography from "../../atoms/Typography";
import UploadCertificate from "../UploadCertificate";
import { certificates, certificatePageName } from "../../../utils/constants";
import { CertificateService } from "../../../service/CertificateService";

export interface CertificateDetails {
  certificate_name: string;
  portfolio_id?: number;
  certificate_image: string;
  id: number;
}

export interface CertificateData {
  id: number;
  Image: string;
  name: string;
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

const ImageContainer = styled(Grid)({
  display: "flex",
  gap: `1rem`,
  marginTop: `3.5rem`,
  justifyContent: "space-evenly",
});

const GridContainer = styled(Grid)<{
  activeIndex: number;
  index: number;
  open: boolean;
}>(({ activeIndex, index, open }) => ({
  border:
    open && activeIndex === index
      ? `1px dashed ${theme.palette.accent[800]}`
      : `none`,
  "&:hover": { cursor: "pointer" },
}));

const Certifications = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [certificate, setData] =
    useState<CertificateDetails[]>(certificates);

  const handleClose = () => {
    setOpen(!open);
    setActiveIndex(-1);
  };

  const handleCertificateModal = (key: number) => {
    setOpen(!open);
    setActiveIndex(key);
  };

  const getBase64 = (file: any, cb: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
  };

  const getCertificateInfo = async () => {
    await CertificateService.getCertificatesByPortfolioId(1).then(
      (response) => {
        if (response.data.length !== 0) {
          const data = response.data;
          setData(data);
        } else {
          setData(certificates);
        }
      }
    );
  };

  useEffect(() => {
    getCertificateInfo();
  }, [certificate.length]);

  const getCertificateData = async (item: CertificateData) => {
    getBase64(item.Image, async (result: string) => {
      const itemData = {
        id: activeIndex,
        portfolio_id: 1,
        certificate_image: result,
        certificate_name: item.name,
      };
      certificate[activeIndex] = itemData;
      setData(() => {
        return certificate;
      });
      await CertificateService.postCertificate(itemData);
    });

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
              {certificatePageName}
            </Typography>
          </TypeTypography>
        </PageType>
        <ImageContainer>
          {certificate.map((certificate, index) => {
            return (
              <GridContainer
                key={index}
                onClick={() => handleCertificateModal(index)}
                activeIndex={activeIndex}
                index={index}
                open
              >
                <Typography
                  variant="body1"
                  color={theme.palette.structural[700]}
                >
                  {certificate.certificate_name}
                </Typography>
                <img src={certificate.certificate_image} alt="certificate" />
              </GridContainer>
            );
          })}
        </ImageContainer>
      </Container>
    </>
  );
};

export default Certifications;
