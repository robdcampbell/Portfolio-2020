import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: #010606;
  background-color: #0c0c0c;
  border-bottom: #757272 solid 1px;

  @media screen and (max-width: 900px) {
    height: 1500px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const ExperienceCard = styled.div`
  background: #fff;
  width: 80%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
// IF YOU WANT LESS COLUMNS, CHANGE HERE (Grid-template-columns)
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  } */
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
// MAKE ALL CONTAINERS SAME HEIGHT, NO MATTER WHAT CONTENT
export const AboutCard = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  //max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
/////////////////
///  IMAGE   ///
///////////////

export const ImgWrap = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 0.5rem;
  //border: 1px solid #c0c0c0;
  max-width: 555px;
  padding: 2rem 1rem;
  @media screen and (max-width: 760px) {
    width: 90%;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0rem;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0;
  padding-right: 0;
  border-radius: 0.5rem;
`;
