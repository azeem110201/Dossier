/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SyntheticEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "../../atoms/buttons/index";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Autocomplete,
  TextField,
  Grid,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import UploadMedia from "../../molecules/UploadMedia";
import theme from "../../../themes/index";
import UploadImage from "../../../assets/icons/upload.svg";
import AddLink from "../../../assets/icons/addLink.png";

export interface SubmitData {
  id: number;
  image: string;
  collegeName: string;
  degree: string;
  startDate: string;
  fieldOfStudy: string;
  endDate: string;
}

const DialogContainer = styled(Dialog)({
  "& .MuiDialog-paper": {
    minWidth: "43rem",
    borderRadius: "10px",
    minHeight: "32rem",
  },
});

const Title = styled(Box)({
  display: "flex",
  height: "3.125rem",
  boxShadow: "0px 2px 4px 0px #0000001F",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "0.75rem",
});

const CloseButton = styled(IconButton)({
  width: "1.5rem",
  height: "1.5rem",
  "&:hover": {
    cursor: "pointer",
  },
});

const FormContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const DialogActionsContainer = styled(DialogActions)({
  "& .MuiDialogActions-root": {
    padding: "1.5rem",
  },
});

const CertificateDescription = styled(Grid)({
  display: "flex",
  marginTop: "2rem",
});

interface CertificateDetails {
  id: number;
  name: string;
  Image: string;
}
const certificates = [
  { label: "Project Management Professional (PMP)", img: "project" },
  { label: "Health Care IT Certification", img: "health" },
  { label: "Program Management Professional(PgMP)", img: "program" },
];

interface UploadCertificateProps {
  onSubmit: (item: CertificateDetails) => void;
  onClose: () => void;
}
const UploadCertificate = (props: UploadCertificateProps) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [showUploadOption, setShowUploadOption] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(false);
  const [localImage, setlocalImage] = useState<any>();

  const [open, setOpen] = useState<boolean>(true);
  const handleModal = () => {
    setOpen(!open);
  };

  const showImage = (e: any) => {
    const formData = new FormData();

    formData.append("multipartFile", e.target.files[0]);
    setlocalImage(URL.createObjectURL(e.target.files[0]));
    setUpload(true);

    setSubmit(true);
  };
  const clickInput = () => {
    document.getElementById("upload-button")?.click();
  };
  const showOptions = () => {
    if (certificate !== "") {
      if (showUploadOption) {
        setShowUploadOption(false);
      } else {
        setShowUploadOption(true);
      }
    }
  };
  const cancelUpload = () => {
    setUpload(false);
    setSubmit(false);
    setlocalImage("");
  };
  const [certificate, setCertificate] = useState("");
  const onValueChange = (_e: SyntheticEvent, newValue: string) => {
    setCertificate(newValue);
  };

  return (
    <DialogContainer
      onClose={handleModal}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle>
        <Grid item>
          <Title>
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Add Certificate
            </Typography>
            <CloseButton onClick={handleModal}>
              <CloseIcon />
            </CloseButton>
          </Title>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "1rem",
            justifyContent: "center",
          }}
        >
          <FormContainer item>
            <Box>
              <Typography
                variant="overline2"
                color={theme.palette.text.secondary}
                sx={{ marginLeft: "1rem" }}
              >
                Name of the Certificate
              </Typography>
            </Box>
            <Autocomplete
              id="select-demo"
              data-testid="certificateChange"
              sx={{
                height: "30px",
                width: "624px",
                borderRadius: "4px",
                marginLeft: "0.8rem",
              }}
              options={certificates}
              disableClearable
              onChange={(event, newValue) =>
                onValueChange(event, newValue.label)
              }
              popupIcon={null}
              noOptionsText={"No results found"}
              getOptionLabel={(option) => option.label}
              renderOption={(prop, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...prop}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={require(`../../../assets/images/logos/${option.img.toLowerCase()}.png`)}
                    srcSet={`../../../assets/images/logos/${option.img.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  <Typography style={{ fontWeight: "normal" }}>
                    {option.label}
                  </Typography>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  data-testid="textfiledcertificate"
                  placeholder="Finance Portfolio"
                  inputProps={{
                    ...params.inputProps,
                    type: "autoComplete",
                    style: { fontWeight: "normal" },
                  }}
                />
              )}
            />
          </FormContainer>
          <CertificateDescription>
            <Typography variant="caption3" color={theme.palette.text.primary}>
              Add or link to external documents, photos, sites, videos, and
              presentations. Learn more about media file types supported
            </Typography>
          </CertificateDescription>
          <Grid item>
            {upload ? (
              <Box
                sx={{
                  marginTop: "30px",
                }}
              >
                <img
                  width="124px"
                  height="73px"
                  style={{ borderRadius: "10px" }}
                  src={localImage}
                />
                <CloseIcon
                  data-testid="canceluploadicon"
                  sx={{
                    position: "absolute",
                    paddingLeft: "-1px",
                    "&: hover": {
                      backgroundColor: theme.palette.structural[300],
                    },
                    cursor: "pointer",
                  }}
                  onClick={cancelUpload}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: "30px",
                }}
              >
                <IconButton
                  data-testid="showOptionsTest"
                  onClick={() => showOptions()}
                >
                  <AddIcon
                    sx={{
                      color: "primary.main",
                      border: "1px dashed #4C2CD9",
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
                <Box
                  data-testid="showImageTest"
                  onClick={() => clickInput()}
                  sx={{ cursor: "pointer" }}
                >
                  {showUploadOption && (
                    <UploadMedia
                      uploadImage={UploadImage}
                      addLink={AddLink}
                      uploadText={"Upload Media"}
                      addLinkText={"Add Link"}
                    />
                  )}
                </Box>
              </Box>
            )}
            <Box>
              <input
                accept="image/*"
                type="file"
                id="upload-button"
                data-testid="uploadbuttoninput"
                style={{ display: "none" }}
                onChange={showImage}
              />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActionsContainer>
        <Button
          variant="contained"
          onClick={() => {
            const item: CertificateDetails = {
              id: 0,
              Image: localImage,
              name: certificate,
            };
            return props.onSubmit(item);
          }}
          data-testid="UploadSubmitbutton"
          disabled={!submit}
          size="medium"
        >
          Submit
        </Button>
      </DialogActionsContainer>
    </DialogContainer>
  );
};

export default UploadCertificate;
