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
  ExperienceCard,
} from "./ExperienceElements";

const Services = () => {
  return (
    <ServicesContainer id="about">
      <ServicesH1>Experience</ServicesH1>
      <ExperienceCard>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        perferendis provident sequi minus? Minus numquam repellendus non earum
        deserunt quia voluptates, ipsa illum facere omnis tenetur perspiciatis
        voluptatibus iste quam temporibus aliquid, necessitatibus excepturi
        consequatur eos fugit consectetur. Perspiciatis fugiat omnis quidem
        quibusdam! Et sequi mollitia quas velit debitis aliquam.
      </ExperienceCard>
      <ExperienceCard>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        perferendis provident sequi minus? Minus numquam repellendus non earum
        deserunt quia voluptates, ipsa illum facere omnis tenetur perspiciatis
        voluptatibus iste quam temporibus aliquid, necessitatibus excepturi
        consequatur eos fugit consectetur. Perspiciatis fugiat omnis quidem
        quibusdam! Et sequi mollitia quas velit debitis aliquam.
      </ExperienceCard>
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
