import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import UploadMedia from ".";
import UploadImage from "../../../assets/icons/upload.png";
import AddLink from "../../../assets/icons/addLink.png";

describe("Should render UploadMedia component", () => {
  it("should match snapshot", () => {
    const wrapper = render(
      <UploadMedia
        uploadImage={UploadImage}
        addLink={AddLink}
        uploadText="Upload Media"
        addLinkText="Add link"
      />
    );
    expect(wrapper).toBeTruthy;
  });
});

test("Should render upload media image", () => {
    render(
        <UploadMedia
        uploadImage={UploadImage}
        addLink={AddLink}
        uploadText="Upload Media"
        addLinkText="Add link"
      />
    );
    const image = screen.getByTestId('uploadmediabutton');
    expect(image).toBeInTheDocument();
})
