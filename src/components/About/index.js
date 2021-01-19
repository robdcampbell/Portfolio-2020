import React from "react";

import {
  AboutContainer,
  AboutH1,
  AboutH2,
  AboutWrapper,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about-me">
      <AboutH1> About me. </AboutH1>
      <AboutWrapper>
        <ImgWrap>
          <Img
            src="../../images/me_woods.png"
            alt="Rob eating a bagel in the woods"
          />
        </ImgWrap>
        <div>
          <AboutCard>
            <h3>Education</h3>
            <AboutP>
              <strong>MFA: School of Visual Arts</strong> _ New York, NY
            </AboutP>
            <AboutP>
              <strong> BFA: Northern Michigan University</strong> _ Marquette,
              MI
            </AboutP>
            <AboutP> Michigan / New York</AboutP>
            <AboutP>
              I've been coding for the last 5 years (largely self-taught)
            </AboutP>
            <AboutP>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              inventore dolorum quibusdam, repellat nemo qui aperiam harum
              beatae voluptas officia.
            </AboutP>
          </AboutCard>
        </div>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

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
