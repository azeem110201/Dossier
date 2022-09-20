import React from "react";
import Header from "../../components/organisms/Header";
import Portfolio from "../../components/organisms/Portfolio";
import SideNav from "../../components/organisms/SideNav";
import MoleculeInfographics from "../../components/molecules/Infographics";
import { contentList } from "../../data/SideNavList";
import { images, SearchIcon } from "../../data/InfographicsImages";
import PortfolioTemplate from "../../components/templates/PortfolioTemplate";

const PortfolioPage = () => {
  return (
    <PortfolioTemplate
      header={<Header />}
      sideNavbar={<SideNav contentList={contentList} />}
      moleculeInfographics={
        <MoleculeInfographics images={images} searchIcon={SearchIcon} />
      }
      portfolio={<Portfolio />}
    />
  );
};

export default PortfolioPage;