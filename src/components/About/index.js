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
    <ServicesContainer id="about">
      <ServicesH1>( A little about me. )</ServicesH1>
      <ServicesWrapper>
        <ImgWrap>
          <Img
            src="../../images/me_woods.png"
            alt="Rob eating a bagel in the woods"
          />
        </ImgWrap>
        <div>
          <AboutCard>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              eius perspiciatis tempore voluptate, quis ipsam ut accusantium
              cupiditate veritatis obcaecati eum, odio officia officiis
              reiciendis modi mollitia doloremque, quasi nobis?
            </p>
          </AboutCard>
        </div>

        {/* <ServicesCard>
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
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
