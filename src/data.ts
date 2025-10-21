import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Josh Temple",
  role: "Generalist Game Programmer and Technical Designer",
  introduction: "Generalist Game Programmer and Technical Designer from the Bay Area, CA",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/jktemple",
    itchIO: "https://jktemple.itch.io",
    linkedIn: "https://www.linkedin.com/in/josh-temple-50bb181a9",
  }
};

export const games: Game[] = [
  {
    name: "TurnStyle",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/TurnStyle/TurnStyleScreenShot1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/vsJ6eBUVqvs?si=ndGIClOWg99qNpTu", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Untitled Parkour Game",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/jktemple/Untitled-Parkour-Game" },
      { source: LinkImageSource.ItchIo, url: "https://jktemple.itch.io/untitled-parkour-game" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/oJ0AgYTD5xU?si=BtGP0_YcIQYcV3Dc", type: MediaType.YouTube },
    ],
  }
];