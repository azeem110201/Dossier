import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ImageTypography from "./index";
import CPAMIcon from "../../../assets/logo/cpam.svg";
import PGMPIcon from "../../../assets/logo/pgmp.svg";
import PMPIcon from "../../../assets/logo/pmp.svg";

test("Should Render Health Care IT Certification", () => {
  render(
    <ImageTypography description="Health Care IT Certification">
      <img src={CPAMIcon} alt="PMP" width="32px" height="32px" />
    </ImageTypography>
  );
  const imageElement = screen.getByAltText("PMP");
  const textElement = screen.getByText("Health Care IT Certification");
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

test("Should Render Program Management Professional (PgMP)", () => {
  render(
    <ImageTypography description="Program Management Professional (PgMP)">
      <img src={PGMPIcon} alt="PMP" width="32px" height="32px" />
    </ImageTypography>
  );
  const imageElement = screen.getByAltText("PMP");
  const textElement = screen.getByText(
    "Program Management Professional (PgMP)"
  );
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

test("Should Render Project Management Professional (PMP)", () => {
  render(
    <ImageTypography description="Project Management Professional (PMP)">
      <img src={PMPIcon} alt="PGMP" width="32px" height="32px" />
    </ImageTypography>
  );
  const imageElement = screen.getByAltText("PGMP");
  const textElement = screen.getByText("Project Management Professional (PMP)");
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
