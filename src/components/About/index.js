import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  Img,
  ImgWrap,
  AboutCard,
} from "./AboutElements";

const Services = () => {
  return (
    <ServicesContainer id="about-me">
      <ServicesH1> About me. </ServicesH1>
      <ServicesWrapper>
        <ImgWrap>
          <Img
            src="../../images/me_woods.png"
            alt="Rob eating a bagel in the woods"
          />
        </ImgWrap>
        <div>
          <AboutCard>
            <h3>Education</h3>
            <p>
              <strong>MFA: School of Visual Arts.</strong>New York, NY
            </p>
            <p>BFA: Northern Michigan University. Marquette, MI</p>
          </AboutCard>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

{
  /* <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            WebDev. System Administration. All sorts of creative technologies.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>Run Run Run RUNRUNRUNRUNRUNRUN. beer.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Michigan / New York</ServicesH2>
          <ServicesP>
            Came from the woods to make a home in the city ok ok
          </ServicesP>
        </ServicesCard> */
}
