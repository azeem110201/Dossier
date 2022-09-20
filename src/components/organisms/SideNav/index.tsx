import styled from "@emotion/styled";
import React from "react";
import theme from "../../../themes/index";
import IconTypography, {
  IconTypographyProps,
} from "../../molecules/IconTypography";

interface SideNavProps {
  contentList: IconTypographyProps[];
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: '6.25rem',
  height: '44rem',
  backgroundColor: theme.palette.structural[50],
  gap: `1.25rem`,
  alignContent: "center",
  boxShadow: `0px 0px 4px 0px ${theme.palette.grey[200]}`,
  paddingTop: `1.5625rem`,
  paddingLeft: 0,
  paddingRight: 0,
});

const TemplateStyled = styled("div")<{ colored?: boolean }>(({ colored }) => ({
  return colored ? {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.primary.main,
  } : {
    backgroundColor: theme.palette.structural[50],
    color: theme.palette.text.secondary,
  }
}));
const SideNav = (props: SideNavProps) => {
  return (
    <Container data-testid="side-nav-bar">
      {props.contentList.map((item: IconTypographyProps, index: number) => {
        return (
          <div key={index}>
            {index === 0 ? (
              <TemplateStyled key={index} colored={true}>
                <IconTypography
                  text={item.text}
                  icon={item.icon}
                  key={index}
                  selected={false}
                ></IconTypography>
              </TemplateStyled>
            ) : (
              <TemplateStyled key={index} colored={false}>
                <IconTypography
                  text={item.text}
                  icon={item.icon}
                  key={index}
                  selected={false}
                ></IconTypography>
              </TemplateStyled>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default SideNav;