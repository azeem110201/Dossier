import styled from "@emotion/styled";
import { AppBar, Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../themes/index";
import Dossier from "../../../assets/logo/dossier.svg";
import Help from "../../../assets/icons/help.svg";
import Notification from "../../../assets/icons/notification.svg";
import Avatar from "../../../assets/avatar/avatar.svg";
import Typography from "../../atoms/Typography";
import IconButton from "@mui/material/IconButton";

const WrapperStyle = styled(Grid)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  marginLeft: `.75rem`,
  gap: 5,
  "&:hover": {
    cursor: "pointer",
  },
});

const WrapImage = styled("div")({
  alignSelf: "center",
  "&:hover": {
    cursor: "pointer",
  },
});

const LeftContainer = styled(Box)({
  display: "flex",
  gap: 6,
  marginRight: `1.5rem`,
});

const AppHeader = styled(AppBar)({
  backgroundColor: theme.palette.structural[50],
  display: "flex",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.grey[200]}`,
});

const WrapTypography = styled("div")({
  textAlign: "center",
  textTransform: "uppercase",
});

const Header = () => {
  return (
    <Box>
      <AppHeader elevation={0}>
        <Toolbar>
          <WrapperStyle container>
            <WrapImage>
              <img src={Dossier} alt="PMP" width="18px" height="18px" />
            </WrapImage>
            <WrapTypography>
              <Typography
                variant="h4"
                noWrap
                color={theme.palette.primary.main}
              >
                Dossier
              </Typography>
            </WrapTypography>
          </WrapperStyle>
          <LeftContainer>
            <IconButton>
              <img src={Help} alt="help" width="24px" height="24px" />
            </IconButton>
            <IconButton>
              <img
                src={Notification}
                alt="notification"
                width="24px"
                height="24px"
              />
            </IconButton>
            <img src={Avatar} alt="avatar" width="36px" height="36px" />
          </LeftContainer>
        </Toolbar>
      </AppHeader>
    </Box>
  );
};

export default Header;
