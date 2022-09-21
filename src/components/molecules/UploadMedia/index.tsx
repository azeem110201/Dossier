import { Box, Grid, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes";

const Container = styled(Box)({
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.12)",
  maxHeight: "80px",
  width: "160px",
  borderRadius: "10px",
  padding: "12px",
});

export interface UploadMediaInterface {
  uploadImage: string;
  addLink: string;
  uploadText: string;
  addLinkText: string;
}

const UploadMedia = (props: UploadMediaInterface) => {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <IconButton>
                <img
                  data-testid="uploadmediabutton"
                  src={props.uploadImage}
                ></img>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ justifyContent: "center" }}>
                <Typography
                  variant="caption3"
                  color={theme.palette.text.secondary}
                >
                  {props.uploadText}
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container columnSpacing="12px" direction="row">
            <Grid item>
              <IconButton>
                <img src={props.addLink}></img>
              </IconButton>
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  variant="caption3"
                  color={theme.palette.text.secondary}
                >
                  {props.addLinkText}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadMedia;
