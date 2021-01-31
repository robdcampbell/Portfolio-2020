import React from "react";

import {
  AboutContainer,
  AboutH1,
  AboutH2,
  AboutH3,
  AboutH4,
  AboutWrapper,
  AboutP,
  Img,
  ImgWrap,
  AboutCard,
  A,
} from "./ExperienceElements";

const Experience = () => {
  return (
    <AboutContainer id="about">
      <AboutH1> Experience</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutH2>Systems Administrator</AboutH2>
          <AboutH4>
            <strong> Currently:</strong>
          </AboutH4>
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
            The role has meant using a wide-range of languages and technologies,
            routinely creating bash scripts, using MDM software (JAMF pro), and
            managing lab computers and peripheral equipment.
          </AboutP>
          <AboutP>
            See more of my professional experience on:
            <strong>
              <A
                href="https://www.linkedin.com/in/rob-campbell-a6354a75/"
                target="_blank"
              >
                LinkedIn.
              </A>
            </strong>
          </AboutP>
        </AboutCard>
        <div>
          <AboutCard>
            <AboutH2>Languages / Technologies:</AboutH2>
            <AboutP>
              <strong>Javascript</strong>
            </AboutP>
            <AboutP>
              <strong> React.js</strong>
            </AboutP>
            <AboutP>
              <strong> Redux</strong>
            </AboutP>
            <AboutP>
              <strong> React Styled Components</strong>
            </AboutP>
            <AboutP>
              <strong> Node.js</strong>
            </AboutP>
            <AboutP>
              <strong> Firebase</strong>
            </AboutP>
            <AboutP>
              <strong> MongoDB</strong>
            </AboutP>
            <AboutP>
              <strong> PostgreSQL</strong>
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
