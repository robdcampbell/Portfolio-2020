import styled from "styled-components";

// SECTION CONTAINER
export const ExperiencesSection = styled.section`
  height: 700px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  border-bottom: #757272 solid 1px;
  position: relative;

  @media screen and (max-width: 900px) {
    height: 1000px;
  }
`;
export const ExperiencesContainer = styled.div``;

export const ExperienceCard = styled.div`
  width: 85%;
  color: #fff;
  margin-top: 0.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  /* border-bottom: #292929 solid 2px; */
  /* border-radius: 10px; */
  max-height: 340px;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const ExperiencesH1 = styled.h1`
  font-size: 3em;
  color: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
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
  margin-top: 1rem;
  border-top: #757272 solid 1px;
  padding: 0.5rem 0;
  cursor: pointer;
`;
export const ExperiencesP = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;
