import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Column, Row, Row2 } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #00A7AA;
  margin-top: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;

    @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Contributions = styled.p`
  margin: 8;
  font-size: 1.5rem;

    @media (max-width: 768px) {
    font-size: 1rem;
  }
  white-space: pre-line;
`;

const InfoTable = styled(Column)`
  gap: 5px;
  margin: 20px 0;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
`;
const InfoRow2 = styled(Row)`
  gap: 75px;
`;

const InfoKey = styled.span`
  font-weight: bold;
  min-width: 10px;
  text-align: left;
`;

const InfoValue = styled.span`
  color: silver;
`;

const LinksContainer = styled(Row)`
  gap: 10px;
`;

const WipInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{game.name}</GameTitle>
            <GameDescription>{game.description}</GameDescription>

            <InfoTable>
                <InfoRow>
                    <InfoKey>Genres:</InfoKey>
                    <InfoValue>{game.genres.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Role:</InfoKey>
                    <InfoValue>{game.roles.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Platforms:</InfoKey>
                    <InfoValue>{game.platforms.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Engine:</InfoKey>
                    <InfoValue>{game.engine.join(", ")}</InfoValue>
                </InfoRow>
                {game.source && <InfoRow>
                    <InfoKey>Source:</InfoKey>
                    <InfoValue >
                        <a href={game.source.url} target="_blank" rel="noopener noreferrer">
                            {game.source.name}
                        </a>
                    </InfoValue>
                </InfoRow>}
            </InfoTable>
        </GameInfoContainer>
    );
};

export default WipInfo;
