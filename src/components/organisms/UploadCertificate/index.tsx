/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SyntheticEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "../../atoms/Buttons";
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
import {
  submitText,
  nameOfTheCertificateText,
  certificatePageName,
  certificateText,
  noResultText,
  uploadText,
  addLinkText,
} from "../../../data/constants";
import { certificatesData } from "../../../data/CertificatesData";

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
  boxShadow: `0px 2px 4px 0px ${theme.palette.accent[400]}`,
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

const OptionsContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  marginTop: "1rem",
  justifyContent: "center",
});

const CloseIconContainer = styled(CloseIcon)({
  position: "absolute",
  paddingLeft: "-1px",
  "&: hover": {
    backgroundColor: theme.palette.structural[300],
  },
  cursor: "pointer",
});

const AddIconContainer = styled(AddIcon)({
  color: "primary.main",
  border: "1px dashed #4C2CD9",
  borderRadius: "4px",
});

interface CertificateDetails {
  id: number;
  name: string;
  Image: string;
}

interface UploadCertificateProps {
  onSubmit: (item: CertificateDetails) => void;
  onClose: () => void;
}
const UploadCertificate = (props: UploadCertificateProps) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [showUploadOption, setShowUploadOption] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(false);
  const [localImage, setlocalImage] = useState<any>();
  const [fileName, setFileName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);
  const handleModal = () => {
    setOpen(!open);
  };

  const showImage = (e: any) => {
    const formData = new FormData();

    formData.append("multipartFile", e.target.files[0]);
    setFileName(e.target.files[0]);
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
  const [certificate, setCertificate] = useState<string>("");
  const onValueChange = (_e: SyntheticEvent, newValue: string) => {
    setCertificate(newValue);
  };

  const onSubmitPassData = () => {
    const item: CertificateDetails = {
      id: 0,
      Image: fileName,
      name: certificate,
    };
    return props.onSubmit(item);
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
              {certificatePageName}
            </Typography>
            <CloseButton onClick={handleModal}>
              <CloseIcon />
            </CloseButton>
          </Title>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <OptionsContainer container>
          <FormContainer item>
            <Box>
              <Typography
                variant="overline2"
                color={theme.palette.text.secondary}
                sx={{ marginLeft: "1rem" }}
              >
                {nameOfTheCertificateText}
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
              options={certificatesData}
              disableClearable
              onChange={(event, newValue) =>
                onValueChange(event, newValue.label)
              }
              popupIcon={null}
              noOptionsText={noResultText}
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
                    src={option.img}
                    srcSet={option.img}
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
              {certificateText}
            </Typography>
          </CertificateDescription>
          <Grid item>
            {upload ? (
              <Box
                sx={{
                  marginTop: "1.875rem",
                }}
              >
                <img
                  width="124px"
                  height="73px"
                  style={{ borderRadius: "10px" }}
                  src={localImage}
                />
                <CloseIconContainer
                  data-testid="canceluploadicon"
                  onClick={cancelUpload}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: "1.875rem",
                }}
              >
                <IconButton
                  data-testid="showOptionsTest"
                  onClick={() => showOptions()}
                >
                  <AddIconContainer />
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
                      uploadText={uploadText}
                      addLinkText={addLinkText}
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
        </OptionsContainer>
      </DialogContent>
      <DialogActionsContainer>
        <Button
          variant="contained"
          onClick={() => onSubmitPassData()}
          data-testid="UploadSubmitbutton"
          disabled={!submit}
          size="medium"
        >
          {submitText}
        </Button>
      </DialogActionsContainer>
    </DialogContainer>
  );
};

export default UploadCertificate;
