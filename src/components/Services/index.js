import React from "react";
import Icon1 from "../../images/svg-2.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="about">
      <ServicesH1>A little about me.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
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
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
