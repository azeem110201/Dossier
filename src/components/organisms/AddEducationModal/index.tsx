import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../../themes";
import Typography from "../../atoms/Typography";
import CloseIcon from "@mui/icons-material/Close";
import AutoCompleteDropdown from "./AutoCompleteDropdown";
import ResponsiveDatePickers from "../../molecules/DatePicker";
import Button from "../../atoms/Buttons";
import { getImageSrc } from "../../../utils/mapperFunction";
import {
  DEGREE_ARRAY,
  FIELD_OF_STUDY,
  UNIVERSITY_ARRAY,
} from "../../../data/EducationData";
import { educationModalText, universityNameText, degreeNameText, fieldOfStudyNameText, startYearText, endYearText, submitText } from "../../../data/constants";

export interface Options {
  icon?: string;
  title: string;
}

export interface AddEducationModalProps {
  onSubmit: (item: SubmitData) => void;
  onClose: () => void;
  university: Options[];
  degree: Options[];
  fieldOfStudy: Options[];
  setChanged?: (item: string) => void;
  checkAll?: () => void;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

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

const DatePicker = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.625rem",
  marginTop: "0.4375rem",
});

const DialogActionsContainer = styled(DialogActions)({
  "& .MuiDialogActions-root": {
    padding: "1.5rem",
  },
});

const InputGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});

const AddEducationModal = (props: AddEducationModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleModal = () => {
    setOpen(!open);
  };

  const [university, setUniversity] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  const [value, setValue] = React.useState<Date>();

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      const dateValue =
        newValue.getMonth() + 1 < 9
          ? "0" + newValue.getMonth()
          : newValue.getMonth();
      const mmYY = dateValue + "/" + newValue.getFullYear();
      setValue(newValue);
      if (props.setChanged && props.checkAll) {
        props.setChanged(mmYY);
        props.checkAll();
      }
    }
  };

  const checkAll = () => {
    if (
      university != "" &&
      degree != "" &&
      fieldOfStudy != "" &&
      startDate != "" &&
      endDate != ""
    ) {
      setSubmit(true);
    }
  };
  const onUnviersityChange = (newValue: any) => {
    setUniversity(newValue.target.outerText);
    checkAll();
  };
  const onDegreeChange = (newValue: any) => {
    setDegree(newValue.target.outerText);
    checkAll();
  };
  const onFieldOfStudyChange = (newValue: any) => {
    setFieldOfStudy(newValue.target.outerText);
    checkAll();
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
              { educationModalText }
            </Typography>
            <CloseButton onClick={handleModal}>
              <CloseIcon />
            </CloseButton>
          </Title>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <InputGrid container>
          <FormContainer item>
            <Typography
              variant="overline2"
              color={theme.palette.text.secondary}
              sx={{ marginLeft: "10px" }}
            >
              { universityNameText }
            </Typography>
            <AutoCompleteDropdown
              onChange={onUnviersityChange}
              label="Search University Here"
              data-testid="unviersityChange"
              item_array={UNIVERSITY_ARRAY}
            />
          </FormContainer>
          <FormContainer item>
            <Box>
              <Typography
                variant="overline2"
                color={theme.palette.text.secondary}
                sx={{ marginLeft: "10px" }}
              >
                { degreeNameText }
              </Typography>
            </Box>
            <AutoCompleteDropdown
              onChange={onDegreeChange}
              label="Search Degree Here"
              data-testid="degreeChange"
              item_array={DEGREE_ARRAY}
            />
          </FormContainer>
          <FormContainer item>
            <Box>
              <Typography
                variant="overline2"
                color={theme.palette.text.secondary}
                sx={{ marginLeft: "10px" }}
              >
                { fieldOfStudyNameText }
              </Typography>
            </Box>
            <AutoCompleteDropdown
              onChange={onFieldOfStudyChange}
              label="Search Field Here"
              data-testid="fieldChange"
              item_array={FIELD_OF_STUDY}
            />
          </FormContainer>
          <FormContainer item>
            <Grid container columnGap="1.25rem">
              <Grid item>
                <Box>
                  <Typography
                    variant="overline2"
                    color={theme.palette.text.secondary}
                    sx={{ marginLeft: "10px" }}
                  >
                    { startYearText }
                  </Typography>
                </Box>
                <DatePicker>
                  <ResponsiveDatePickers
                    setChanged={setStartDate}
                    date={ () => handleChange(new Date()) }
                    label="MM/YYYY"
                    checkAll={checkAll}
                  />
                </DatePicker>
              </Grid>
              <FormContainer item>
                <Box>
                  <Typography
                    variant="overline2"
                    color={theme.palette.text.secondary}
                    sx={{ marginLeft: "10px" }}
                  >
                    { endYearText }
                  </Typography>
                </Box>
                <ResponsiveDatePickers
                  setChanged={setEndDate}
                  date={ () => handleChange(new Date()) }
                  label="MM/YYYY"
                  checkAll={checkAll}
                />
              </FormContainer>
            </Grid>
          </FormContainer>
        </InputGrid>
      </DialogContent>
      <DialogActionsContainer>
        <Button
          onClick={() => {
            props.onSubmit({
              id: 2,
              image: getImageSrc(university),
              collegeName: university,
              degree: degree,
              startDate: startDate,
              fieldOfStudy: fieldOfStudy,
              endDate: endDate,
            });
          }}
          variant="contained"
          disabled={false}
          size="medium"
        >
          { submitText }
        </Button>
      </DialogActionsContainer>
    </DialogContainer>
  );
};

export default AddEducationModal;
