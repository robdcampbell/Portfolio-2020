import React from "react";

import {
  AboutContainer,
  AboutH1,
  AboutH2,
  AboutH3,
  AboutWrapper,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
} from "./ExperienceElements";

const Experience = () => {
  return (
    <AboutContainer id="about">
      <AboutH1> Experience</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutH2>Systems Administrator</AboutH2>
          <AboutP>
            <strong>2019-Present.</strong>
            SVA New York, NY
          </AboutP>

          <AboutP>
            I'm currently a Systems Administrator in the MFA Computer Arts
            program at the School of Visual Arts (SVA), working as part of a
            small team to oversee and maintain lab machines and servers, as well
            as the department's licensing of lab software.
          </AboutP>
          <AboutP>
            I've been coding for the last 5 years (largely self-taught)
          </AboutP>
          <AboutP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            inventore dolorum quibusdam, repellat nemo qui aperiam harum beatae
            voluptas officia.
          </AboutP>
        </AboutCard>
        <div>
          <AboutCard>
            <AboutH2>Exhibitions Coordinator</AboutH2>
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
        <AboutH3>resumé.</AboutH3>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default Experience;

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
