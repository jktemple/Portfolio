import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Josh Temple",
  role: "Generalist Game Programmer and Technical Designer",
  introduction: "Generalist Game Programmer and Technical Designer from the Bay Area, CA",
  description: "I'm Josh Temple, a game designer and programmer from the Bay Area, California. My love of games started when I fell in love with Magic: the Gathering after learning about it from the cool older kids at summer camp. Since then I've only fallen more in love with games in all their forms from card games to board games to video games. If I'm not playing or working on a game you can probably find me watching a San Francisco Giants game or with my nose stuck in a Sci-Fi or Fantasy book. I'm currently looking for opportunities, so feel free to get in touch.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Josh_Temple_CV.pdf`,
  links: {
    github: "https://github.com/jktemple",
    itchIO: "https://jktemple.itch.io",
    linkedIn: "https://www.linkedin.com/in/josh-temple-50bb181a9",
  }
};

export const games: Game[] = [
  {
    name: "TurnStyle",
    teamsize: "11",
    projectLength: "4 Months",
    roles: ["Programmer"],
    description: "TurnStyle is a turn-based RPG with a (literal) twist! Rotate your party of 5 and learn to balance the stats of all your members in order to defeat the monsters of the subway.",
    genres: ["JRPG", "Narrative"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unity],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://lion-slime.itch.io/turnstyle" },
    ],
    media: [
      { source: "/images/games/TurnStyle/TurnStyleScreenShot1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/vsJ6eBUVqvs?si=ndGIClOWg99qNpTu", type: MediaType.YouTube },
      { source: "/images/games/TurnStyle/TurnStyleScreenShot2.png", type: MediaType.Image },
      { source: "/images/games/TurnStyle/TurnStyleScreenShot3.png", type: MediaType.Image },
      { source: "/images/games/TurnStyle/TurnStyleScreenShot4.png", type: MediaType.Image },
    ],
    contributions : ["Ported original prototype from Phaser to Unity", "Implemented Combat Mechanics and Subway Map"]
  },
  {
    name: "Remembering Diane",
    teamsize: "6",
    projectLength: "2 Weeks ",
    roles: ["Lead Programmer"],
    description: "Remembering Diane is a short and sweet narrative experience about  remembering a life of fulfilling travels. You play as half of an elderly couple suffering from Alzheimer's trying to remember where they've been using the pictures and souvenirs that they have collected over time. The game created during TheXPlace's Summer Game Jam and was featured on Unity's Twitch.tv channel.",
    genres: ["Narrative"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unity],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/jktemple/TravelGame" },
      { source: LinkImageSource.ItchIo, url: "https://jktemple.itch.io/remembering-diane" },
    ],
    media: [
      { source: "/images/games/RememberingDiane/RememberingDianeScreenShot1.png", type: MediaType.Image},
      { source: "https://www.youtube.com/embed/nxfbAfXVAEc?si=Vkoo74xNqLOjg2Bh", type: MediaType.YouTube },
      { source: "/images/games/RememberingDiane/RememberingDianeScreenShot2.png", type: MediaType.Image},
    ],
    contributions : ["Implemented Ink dialouge system and UI"]
  },
  {
    name: "Untitled Parkour Game",
    teamsize: "12",
    projectLength: "6 Months",
    roles: ["Project Lead","Lead Programmer", "Lead Producer"],
    description: "Untitled Parkour Game is a Multiplayer 1st Person Parkour game made in Unity that was developed as part of my Senior Capstone sequence. It's heavily inspired by games like Mirror's Edge, Gorilla Tag, and many others.",
    genres: ["Action", "Platformer", "Multiplayer"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unity],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/jktemple/Untitled-Parkour-Game" },
      { source: LinkImageSource.ItchIo, url: "https://jktemple.itch.io/untitled-parkour-game" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/oJ0AgYTD5xU?si=BtGP0_YcIQYcV3Dc", type: MediaType.YouTube },
    ],
    contributions : ["Designed and implemented core movement mechanics", "Handled Network programming using Netcode For GameObjects, Relay, and Lobby."]
  }
];

export const wips: Game[] = [
  {
    name: "Codename Steel Lizard",
    teamsize: "11",
    projectLength: "4 Months",
    roles: ["Programmer", "Designer"],
    description: "Codename Steel Lizard is a continuation of and/or a successor to Untitled Parkour Game. Starting from a brand new codebase with new movement mechanics like rope, bar swinging, and others, Codename Steel Lizard will be a single player experience focusing on exploration and puzzle solving. I'm currently working solo on the project and am currently prototyping and refining the movement mechanics, level design and puzzles. Once a vertical slice of the movement and puzzles is completed, I may begin to look for collaborators to build out the games visuals. If you're interested in potentially joining the project feel free to reach out.",
    genres: ["Action", "Adventure", "Platformer", "Puzzle"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unity],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://lion-slime.itch.io/turnstyle" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/oJ0AgYTD5xU?si=BtGP0_YcIQYcV3Dc", type: MediaType.YouTube },
    ],
    contributions : ["Ported original prototype from Phaser to Unity", "Implemented Combat Mechanics and Subway Map"]
  },
];

export const otherWorks: Game[] = [
  {
    name: "3D Texturing",
    teamsize: "1",
    projectLength: "2 Weeks",
    roles: ["3D texture Artist"],
    description: "Took a 3D texturing class at a local community college, learned to use Substance Painter.",
    genres: ["JRPG", "Narrative"],
    platforms: [Platform.Windows],
    engine: [GameEngine.SubstancePainter, GameEngine.Blender],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://lion-slime.itch.io/turnstyle" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/_UTPG_cKgb8?si=SohdBK4umE8rzdCg", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/_UTPG_cKgb8?si=0zVMv8AqdQqzvWog", type: MediaType.YouTube },
      { source: "/images/other/3DTexturing/SubstancePainterScreenshot1.png", type: MediaType.Image },
    ],
    contributions : ["Ported original prototype from Phaser to Unity", "Implemented Combat Mechanics and Subway Map"]
  },
  {
    name: "Low Poly Wave Shader",
    teamsize: "1",
    projectLength: "2 Weeks",
    roles: ["3D texture Artist"],
    description: "Created a shader in Unity's shader graph to create Low-poly ocean waves including depth and foam effects",
    genres: ["JRPG", "Narrative"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unity],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://lion-slime.itch.io/turnstyle" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/RIwOhX0Lt3U?si=MEXLWllE2Eagkw3N", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/eVaIo52wt2w?si=1GHtWG_eP5CPFYwF", type: MediaType.YouTube },
      { source: "/images/other/Shaders/WaveShaderScreenShot1.png", type: MediaType.Image },
      { source: "/images/other/Shaders/WaveShaderScreenShot2.png", type: MediaType.Image },
    ],
    contributions : ["Ported original prototype from Phaser to Unity", "Implemented Combat Mechanics and Subway Map"]
  },
  {
    name: "Unreal Stylized Rendering",
    teamsize: "1",
    projectLength: "2 Weeks",
    roles: ["3D texture Artist"],
    description: "Used Unreal's material graph to create stylized rendering post processing effects using a anisotropic Kuwahara filter to create a painterly effect and also created a physically based cell-shading and outline effect.",
    genres: ["JRPG", "Narrative"],
    platforms: [Platform.Windows],
    engine: [GameEngine.Unreal],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://lion-slime.itch.io/turnstyle" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/od_PaU07GqM?si=2X0bYXtMK_EvrkPH", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/6O1dUHdllFw?si=ZrNy1lJvUCMPOd0m", type: MediaType.YouTube },
      { source: "/images/other/Shaders/KuwaharaScreenShot1.png", type: MediaType.Image },
      { source: "/images/other/Shaders/CellShadingScreenShot1.png", type: MediaType.Image },
      { source: "/images/other/Shaders/CellShadingScreenShot2.png", type: MediaType.Image },
      { source: "/images/other/Shaders/CellShadingScreenShot3.png", type: MediaType.Image },
      
    ],
    contributions : ["Ported original prototype from Phaser to Unity", "Implemented Combat Mechanics and Subway Map"]
  },
];
