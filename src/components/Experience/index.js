import React from "react";

import {
  ExperienceWrapper,
  ExperiencesSection,
  ExperiencesContainer,
  ExperienceHeader,
  ExperiencesH1,
  ExperiencesH2,
  ExperiencesH3,
  ExperiencesH4,
  ExperiencesP,
  ExperienceCard,
  LineBreak,
} from "./ExperienceElements";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <ExperienceHeader>
        <ExperiencesH1>Experience</ExperiencesH1>
        <ExperiencesH4>click here for my resumé.</ExperiencesH4>
        {/* <LineBreak /> */}
      </ExperienceHeader>
      <ExperiencesSection id="about">
        <ExperiencesContainer>
          <ExperienceCard>
            {/* <ExperiencesH1>Experience</ExperiencesH1> */}
            <ExperiencesH2>Systems Administor</ExperiencesH2>
            <ExperiencesH3>2019-Present.</ExperiencesH3>
            <ExperiencesP>
              I'm currently a Systems Administrator in the MFA Computer Arts
              program at the School of Visual Arts (SVA), working as part of a
              small team to oversee and maintain lab machines and servers, as
              well as department's licensing of lab software.
            </ExperiencesP>
            <ExperiencesP>
              I provide daily systems support for Faculty, Students, and Staff
              primarily with Mac (but also across Windows/Linux-based systems),
              to ensure everything is running properly.
            </ExperiencesP>
          </ExperienceCard>

          <ExperienceCard>
            <ExperiencesH2>Exhibitions Coordinator</ExperiencesH2>
            <ExperiencesH3>2015-2019</ExperiencesH3>
            <ExperiencesP>
              As part of an exhibition staff at the School of Visual Art's 3
              Manhattan galleries, I assisted in the coordination and
              installation of a wide breadth of exhibitions.
            </ExperiencesP>
            <ExperiencesP>
              Our team had the opportunity to bring incredible thesis work of
              students from various undergraduate and graduate programs, as well
              as exhibit prominent practicing artists, curators, and designers
              such as Michael Bierut, Lousie Fili, Christoph Niemann, and many
              others.
            </ExperiencesP>
            {/* <ExperiencesH4>click here for my resumé.</ExperiencesH4> */}
          </ExperienceCard>
        </ExperiencesContainer>
      </ExperiencesSection>
    </ExperienceWrapper>
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
