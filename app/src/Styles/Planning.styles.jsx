import styled from "styled-components";
import PlanningCardContainer from "./PlanningCard.styles";

const PlanningContainer = styled.div`
  & ${PlanningCardContainer} {
    margin-bottom: 1rem;
  }
`;

export default PlanningContainer;
