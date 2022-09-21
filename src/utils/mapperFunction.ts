import MemphisImage from "../assets/images/university_images/memphis.png";
import LowaImage from "../assets/images/university_images/lowa.png";
import SanfransiscoImage from "../assets/images/university_images/sanfransisco.png";

export const getImageSrc = (item: string) => {
  switch (item) {
    case "University of San Francisco":
      return SanfransiscoImage;
    case "University of Memphis":
      return MemphisImage;
    case "University of Iowa":
      return LowaImage;
    default:
      break;
  }
};
