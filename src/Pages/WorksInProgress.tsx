import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Wip";
import { wips } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const WipPage: React.FC = () => (
  <GamesContainer>
    {wips.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== wips.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);


export default WipPage;
