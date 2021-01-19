import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  background-color: #0c0c0c;
  border-bottom: #757272 solid 1px;
`;

export const ExperienceHeader = styled.div`
  background-color: #0c0c0c;
  padding-top: 3rem;
  margin-left: 5%;
  @media screen and (max-width: 780px) {
    margin-left: 10%;
    margin-bottom: 3rem;
  }
`;

export const ExperiencesH1 = styled.h1`
  /* padding-top: 3rem;
  margin-left: 5%; */
  background-color: #0c0c0c;
  font-size: 3em;
  color: #fff;

  /* border-bottom: #757272 solid 1px; */

  /* @media screen and (max-width: 780px) {
    font-size: 3rem;
    margin-left: 10%;
    margin-bottom: 3rem; */
  }
`;
export const LineBreak = styled.div`
  background-color: #0c0c0c;
  border-bottom: #757272 solid 1px;
  width: 70%;
  margin-left: 7.5%;
`;

// SECTION CONTAINER
export const ExperiencesSection = styled.section`
  height: 750px;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;

  @media screen and (max-width: 1200px) {
    /* background-color: red; */
    margin: 0 auto;
    height: 900px;
    width: 80%;
  }
`;
export const ExperiencesContainer = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    height: 1000px;
    /* display: block; */
  }
`;

export const ExperienceCard = styled.div`
  width: 85%;
  color: #fff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: 2rem;
  /* max-height: 340px; */
  /* border: red solid 2px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const ExperiencesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;
export const ExperiencesH3 = styled.h3`
  /* font-size: 2rem; */
  color: #c0c0c0;
  margin-bottom: 10px;
  border-bottom: #757272 solid 1px;
  padding-bottom: 0.5rem;
`;
export const ExperiencesH4 = styled.h3`
  /* font-size: 2rem; */
  color: #c0c0c0;
  margin-bottom: 3rem;
  /* border-top: #757272 solid 1px; */
  padding: 0.5rem 0;
  cursor: pointer;
`;
export const ExperiencesP = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;
