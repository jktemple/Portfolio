import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import { Row } from "../Styles/StyledComponents";
import OtherWorkInfo from "./OtherWorkInfo";

interface GameProps {
  game: GameInterface;
}

const GameContainer = styled(Row)`
  align-items: flex-start;
  
  & > * {
    flex: 1;
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  & > * {
    flex: 1;
    max-width: 100%;
  }
    
`;

const OtherWork: React.FC<GameProps> = ({ game }) => {
  return (
    <GameContainer>
      <OtherWorkInfo game={game} />
      <GameMedia media={game.media} />
    </GameContainer>
  );
};

export default OtherWork;
