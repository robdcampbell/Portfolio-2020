import React, { useState } from "react";
import Image from "../../images/blueGrid.png";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>{/* <ImgBg src={Image} alt="gridBackground"></ImgBg> */}</HeroBg>
      <HeroContent>
        <HeroH1>Rob Campbell</HeroH1>
        <HeroP>Web development & Creative Technology</HeroP>
        <HeroBtnWrapper>
          <Button
            to="project-1"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
