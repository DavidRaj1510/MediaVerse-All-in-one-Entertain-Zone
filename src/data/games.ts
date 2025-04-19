
export interface Game {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  studio: string;
  releaseYear: number;
  genre: string[];
  playLinks: {
    name: string;
    url: string;
  }[];
  preview?: string;
}

export const games: Game[] = [
  {
    id: "moto-x3m",
    title: "Moto X3M",
    coverImage: "https://static.keygames.com/0/24330/78577/672x448/moto-x3m.webp",
    description: "A challenging motorcycle racing game with crazy stunts and obstacles.",
    studio: "Madpuffers",
    releaseYear: 2016,
    genre: ["Racing", "Stunts", "Sports"],
    playLinks: [
      { name: "CrazyGames", url: "https://www.crazygames.com/game/moto-x3m" },
      { name: "Poki", url: "https://poki.com/en/g/moto-x3m" },
      { name: "Y8", url: "https://www.y8.com/games/moto-x3m" },
      { name: "Kizi", url: "https://kizi.com/games/moto-x3m" }
    ],
    preview: "https://www.youtube.com/embed/6fFX5BIyk9A"
  },
  {
    id: "vortex-9",
    title: "Vortex 9",
    coverImage: "https://play-lh.googleusercontent.com/jfjwc7szdcv5daIFxM31QYhM6BtZDFQ5XTgXyjhp1-MbjTo-XhgGbXPZvpYKhcvR3fI",
    description: "An addictive space shooter with stunning graphics and intense gameplay.",
    studio: "Vortex Games",
    releaseYear: 2022,
    genre: ["Shooter", "Space", "Action"],
    playLinks: [
      { name: "CrazyGames", url: "https://www.crazygames.com/game/vortex-9" },
      { name: "Armor Games", url: "https://armorgames.com/play/vortex-9" },
      { name: "Miniclip", url: "https://www.miniclip.com/games/vortex-9/en/" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    coverImage: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7.png",
    description: "The sequel to the endless running phenomenon with improved graphics and new features.",
    studio: "Imangi Studios",
    releaseYear: 2013,
    genre: ["Runner", "Adventure", "Action"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/temple-run-2" },
      { name: "Y8", url: "https://www.y8.com/games/temple_run_2" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/temple-run-2" }
    ],
    preview: "https://www.youtube.com/embed/ZxlJxDr26mM"
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    coverImage: "https://subway-surfers.org/wp-content/uploads/2023/11/subwaysurfers.jpg",
    description: "Run as fast as you can through the subway while dodging trains and obstacles.",
    studio: "SYBO Games",
    releaseYear: 2012,
    genre: ["Runner", "Arcade", "Action"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/subway-surfers" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/subway-surfers" },
      { name: "Kizi", url: "https://kizi.com/games/subway-surfers" }
    ],
    preview: "https://www.youtube.com/embed/aHCULCvpZyQ"
  },

  {
    id: "drift-hunters",
    title: "Drift Hunters",
    coverImage: "https://drifthuntersunblocked.github.io/images/logo.png",
    description: "Master the art of drifting in this realistic 3D racing game featuring real car physics.",
    studio: "Drift Hunters Developer",
    releaseYear: 2019,
    genre: ["Racing", "Sports", "Simulation"],
    playLinks: [
      { name: "CrazyGames", url: "https://www.crazygames.com/game/drift-hunters" },
      { name: "Y8", url: "https://www.y8.com/games/drift_hunters" },
      { name: "Kizi", url: "https://kizi.com/games/drift-hunters" }
    ],
    preview: "https://www.youtube.com/embed/qzVU-FzJwxY"
  },
  {
    id: "bullet-force",
    title: "Bullet Force",
    coverImage: "https://www.onlinegames.io/media/posts/333/Bullet-Force-2.jpg",
    description: "An intense multiplayer FPS game with modern military combat.",
    studio: "Blayze Games",
    releaseYear: 2016,
    genre: ["Action", "Shooter", "Multiplayer"],
    playLinks: [
      { name: "CrazyGames", url: "https://www.crazygames.com/game/bullet-force-multiplayer" },
      { name: "Y8", url: "https://www.y8.com/games/bullet_force" },
      { name: "Armor Games", url: "https://armorgames.com/play/bullet-force" }
    ],
    preview: "https://www.youtube.com/embed/O1Rf2GOfZjM"
  },
  {
    id: "swords-and-souls",
    title: "Swords and Souls",
    coverImage: "https://m.media-amazon.com/images/I/81MmYvoVtDL._h1_.png",
    description: "Train your character's skills and battle through an arena in this RPG.",
    studio: "SoulGame Studio",
    releaseYear: 2015,
    genre: ["RPG", "Training", "Fighting"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/swords_and_souls" },
      { name: "Armor Games", url: "https://armorgames.com/play/17796/swords-and-souls" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/swords-and-souls" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "strike-force-heroes",
    title: "Strike Force Heroes",
    coverImage: "https://i.ytimg.com/vi/TtmgV7iKxf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2I2J3HxlWi9cxd4cLh5jtvH91sw",
    description: "Battle through action-packed missions with customizable soldiers in this fast-paced shooter.",
    studio: "Sky9 Games",
    releaseYear: 2012,
    genre: ["Shooter", "Action", "Platformer"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/strike_force_heroes" },
      { name: "Armor Games", url: "https://armorgames.com/play/13339/strike-force-heroes" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/strike-force-heroes" }
    ],
    preview: "https://www.youtube.com/embed/HLaLCdJb4rY"
  },
  {
    id: "smash-karts",
    title: "Smash Karts",
    coverImage: "https://rocketgames.imgix.net/uploads/games/s/smash-karts-io/smash-karts-io.jpg?auto=format,compress,enhance&w=314&dpr=1",
    description: "A multiplayer kart battle arena game where players battle it out in explosive kart combat.",
    studio: "Tall Team",
    releaseYear: 2020,
    genre: ["Racing", "Battle", "Multiplayer"],
    playLinks: [
      { name: "CrazyGames", url: "https://www.crazygames.com/game/smash-karts" },
      { name: "Poki", url: "https://poki.com/en/g/smash-karts" },
      { name: "Y8", url: "https://www.y8.com/games/smash_karts" },
      { name: "Armor Games", url: "https://armorgames.com/play/smash-karts" },
      { name: "Miniclip", url: "https://www.miniclip.com/games/smash-karts/en/" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "chess",
    title: "Chess",
    coverImage: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/zeptozetta/phphnhnyj.png",
    description: "The classic strategy board game of kings and queens.",
    studio: "Chess.com",
    releaseYear: 2020,
    genre: ["Board", "Strategy", "Classic"],
    playLinks: [
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-chess" },
      { name: "Y8", url: "https://www.y8.com/games/chess_online" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/chess" },
      { name: "Armor Games", url: "https://armorgames.com/play/chess" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "stickman-hook",
    title: "Stickman Hook",
    coverImage: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/99e090d154caf30f3625df7e456d5984.png",
    description: "Swing through challenging levels as a stickman with a grappling hook.",
    studio: "Madbox",
    releaseYear: 2018,
    genre: ["Action", "Arcade", "Physics"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/stickman-hook" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/stickman-hook" },
      { name: "Y8", url: "https://www.y8.com/games/stickman_hook" },
      { name: "Kizi", url: "https://kizi.com/games/stickman-hook" }
    ],
    preview: "https://www.youtube.com/embed/JyD3hE9H4Sw"
  },
  {
    id: "brain-test",
    title: "Brain Test",
    coverImage: "https://store-images.s-microsoft.com/image/apps.17020.14108235367275677.7ed9a69d-cdf8-4064-b6db-ce73db8646f9.b17b928a-5cd9-475d-a796-bf16bf29bebc",
    description: "A tricky puzzle game that challenges your thinking with unexpected solutions.",
    studio: "Unico Studio",
    releaseYear: 2019,
    genre: ["Puzzle", "Brain Teaser", "Casual"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/brain-test-tricky-puzzles" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/brain-test" },
      { name: "Y8", url: "https://www.y8.com/games/brain_test" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "murder",
    title: "Murder",
    coverImage: "https://html5.gamemonetize.co/cjkzivm0hh60noz8ku1c91uwowpx668b/@base/banner.jpg",
    description: "A multiplayer mystery game where players must find the murderer among them.",
    studio: "Murder Games",
    releaseYear: 2020,
    genre: ["Mystery", "Social Deduction", "Multiplayer"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/murder" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/murder" },
      { name: "Y8", url: "https://www.y8.com/games/murder" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "run-3",
    title: "Run 3",
    coverImage: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub501.app51626/game-tiles/run-3.jpg",
    description: "Navigate through a series of tunnels in space as various aliens.",
    studio: "Player 03",
    releaseYear: 2014,
    genre: ["Runner", "Platform", "Space"],
    playLinks: [
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-run-3" },
      { name: "Y8", url: "https://www.y8.com/games/run_3" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/run-3" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "buildnow-gg",
    title: "BuildNow GG",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBj3KrhthTL8NB7I1ERkNy75yX6ueeHt5GA&s",
    description: "A creative building game where players can construct and share their own worlds.",
    studio: "BuildNow Studios",
    releaseYear: 2021,
    genre: ["Building", "Creativity", "Multiplayer"],
    playLinks: [
      { name: "Official Site", url: "https://buildnow.gg" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/buildnow-gg" },
      { name: "Y8", url: "https://www.y8.com/games/buildnow-gg" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "bloxorz",
    title: "Bloxorz",
    coverImage: "https://imgs2.dab3games.com/swipe-cubes-game9.png",
    description: "A puzzle game where you need to get a block to fall into a square hole.",
    studio: "Damien Clarke",
    releaseYear: 2007,
    genre: ["Puzzle", "Logic", "Strategy"],
    playLinks: [
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-bloxorz" },
      { name: "Y8", url: "https://www.y8.com/games/bloxorz" },
      { name: "Armor Games", url: "https://armorgames.com/play/bloxorz" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "fireboy-and-watergirl",
    title: "Fireboy and Watergirl: Forest Temple",
    coverImage: "https://play-lh.googleusercontent.com/6N_ON50BZiEAe-ll2lM92NrVrgp5I5Ha6VI0a4Usw7uPmgEjL6tgJR6jWYUkkYgx2LM",
    description: "A cooperative puzzle game where two players control characters with different abilities.",
    studio: "Oslo Albet",
    releaseYear: 2009,
    genre: ["Puzzle", "Cooperation", "Platform"],
    playLinks: [
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-forest-temple" },
      { name: "Poki", url: "https://poki.com/en/g/fireboy-and-watergirl-1" },
      { name: "Y8", url: "https://www.y8.com/games/fireboy_and_watergirl_forest_temple" }
    ],
    preview: "https://www.youtube.com/embed/jvMKzJR3Bg0"
  },
  {
    id: "papas-pizzeria",
    title: "Papa's Pizzeria",
    coverImage: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/377fd7d97c2b2f4fe25618ccffcc601b.jfif",
    description: "Run a pizza restaurant and serve customers by making perfect pizzas.",
    studio: "Flipline Studios",
    releaseYear: 2007,
    genre: ["Simulation", "Time Management", "Cooking"],
    playLinks: [
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-papas-pizzeria" },
      { name: "Y8", url: "https://www.y8.com/games/papa_s_pizzeria" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/papas-pizzeria" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "snake",
    title: "Snake",
    coverImage: "https://img.gamepix.com/games/little-big-snake/cover/little-big-snake.png?w=400&ar=16:10",
    description: "The classic game where you guide a snake to eat food and grow without hitting walls or yourself.",
    studio: "Classic Games",
    releaseYear: 1997,
    genre: ["Arcade", "Classic", "Strategy"],
    playLinks: [
      { name: "Poki", url: "https://poki.com/en/g/snake" },
      { name: "Y8", url: "https://www.y8.com/games/snake" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/snake" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "wheely-8",
    title: "Wheely 8",
    coverImage: "https://gameforge.com/de-DE/littlegames/includes/images/games/10784_5eb3f1b7c26a8.jpg",
    description: "Help Wheely, a little red car, solve puzzles and find his way through obstacles.",
    studio: "Wheely Games",
    releaseYear: 2019,
    genre: ["Puzzle", "Adventure", "Kids"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/wheely-8" },
      { name: "Y8", url: "https://www.y8.com/games/wheely_8" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/wheely-8" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "bob-the-robber",
    title: "Bob the Robber",
    coverImage: "https://gameforge.com/de-DE/littlegames/includes/images/games/10139_5eb3f08bdb854.jpg",
    description: "Help Bob sneak past security systems and guards to steal valuables.",
    studio: "Flazm",
    releaseYear: 2011,
    genre: ["Stealth", "Platform", "Adventure"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/bob-the-robber" },
      { name: "Y8", url: "https://www.y8.com/games/bob_the_robber" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/bob-the-robber" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "papas-burgeria",
    title: "Papa's Burgeria",
    coverImage: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/4fad37685af404ca0f987d927358ab79.jfif",
    description: "Run a burger restaurant and serve customers by making perfect burgers.",
    studio: "Flipline Studios",
    releaseYear: 2010,
    genre: ["Simulation", "Time Management", "Cooking"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/papas-burgeria" },
      { name: "Y8", url: "https://www.y8.com/games/papa_s_burgeria" },
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-papas-burgeria" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "money-movers",
    title: "Money Movers",
    coverImage: "https://static.keygames.com/5/89585/48346/1024x1024/money-movers.webp",
    description: "Help two brothers escape from prison by solving puzzles and avoiding obstacles.",
    studio: "Kizi",
    releaseYear: 2015,
    genre: ["Puzzle", "Platform", "Cooperation"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/money-movers" },
      { name: "Y8", url: "https://www.y8.com/games/money_movers" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/money-movers" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "snail-bob",
    title: "Snail Bob",
    coverImage: "https://play-lh.googleusercontent.com/Y-yytL6yCUt1Z1jJrU9F-gGNcqsuDpS6ZmVePkzyP02HMq6_tjhdRserzpYGe4XV6ww",
    description: "Guide a determined snail named Bob through dangerous environments using various objects.",
    studio: "Hunter Hamster",
    releaseYear: 2010,
    genre: ["Puzzle", "Adventure", "Strategy"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/snail-bob" },
      { name: "Y8", url: "https://www.y8.com/games/snail_bob" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/snail-bob" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "adam-and-eve-go",
    title: "Adam and Eve: GO",
    coverImage: "https://static.keygames.com/9/115319/101261/672x448/adam-and-eve-go-3.webp",
    description: "Help Adam find Eve through a series of prehistoric adventure puzzles.",
    studio: "Jmtb02",
    releaseYear: 2018,
    genre: ["Adventure", "Point and Click", "Puzzle"],
    playLinks: [
      { name: "Kizi", url: "https://kizi.com/games/adam-and-eve-go" },
      { name: "Y8", url: "https://www.y8.com/games/adam_and_eve_go" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/adam-and-eve-go" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "bomb-it-6",
    title: "Bomb It 6",
    coverImage: "https://kizicdn.com/system/static/thumbs/big_tile_thumb/1101/thumb300_bomb-it-614764110082843.jpg?1556201436",
    description: "A Bomberman-inspired game where you place bombs to defeat opponents and clear obstacles.",
    studio: "Spil Games",
    releaseYear: 2016,
    genre: ["Action", "Battle", "Multiplayer"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/bomb_it_6" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/bomb-it-6" },
      { name: "Kizi", url: "https://kizi.com/games/bomb-it-6" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "gun-mayhem",
    title: "Gun Mayhem",
    coverImage: "https://play-lh.googleusercontent.com/d7m2ov6sNDMa8iTkU7UYO8z5IJrYopwgAf8nmYH95DHfrkpt6Y8R_I77UHsrlrg7-4Mu",
    description: "A chaotic platform shooter where you battle against friends or AI to knock them off the stage.",
    studio: "Kevin Gu",
    releaseYear: 2013,
    genre: ["Action", "Platform", "Shooter"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/gun_mayhem" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/gun-mayhem" },
      { name: "Armor Games", url: "https://armorgames.com/play/gun-mayhem" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "fireboy-watergirl-2",
    title: "Fireboy & Watergirl 2: Light Temple",
    coverImage: "https://kizicdn.com/system/static/thumbs/big_tile_thumb/6/thumb300_FBWG2_300x300.jpg?1556198397",
    description: "The sequel to the popular cooperative puzzle game set in the Light Temple.",
    studio: "Oslo Albet",
    releaseYear: 2010,
    genre: ["Puzzle", "Cooperation", "Platform"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/fireboy_and_watergirl_2_in_the_light_temple" },
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-fireboy-and-watergirl-in-the-light-temple" },
      { name: "Poki", url: "https://poki.com/en/g/fireboy-and-watergirl-2-light-temple" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "bad-ice-cream",
    title: "Bad Ice Cream",
    coverImage: "https://badicecreamgame.com/uploads/bad-ice-cream-unblocked.jpg",
    description: "Control ice cream characters to collect fruits while avoiding enemies in this Bomberman-like game.",
    studio: "Nitrome",
    releaseYear: 2011,
    genre: ["Puzzle", "Action", "Multiplayer"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/bad_ice_cream" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/bad-ice-cream" },
      { name: "Coolmath Games", url: "https://www.coolmathgames.com/0-bad-ice-cream" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  },
  {
    id: "city-siege",
    title: "City Siege",
    coverImage: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/578590/capsule_616x353.jpg?t=1715044431",
    description: "Lead a squad of soldiers through enemy-filled cities to rescue hostages.",
    studio: "Goodzgame",
    releaseYear: 2012,
    genre: ["Strategy", "Action", "Shooter"],
    playLinks: [
      { name: "Y8", url: "https://www.y8.com/games/city_siege" },
      { name: "Armor Games", url: "https://armorgames.com/play/city-siege" },
      { name: "CrazyGames", url: "https://www.crazygames.com/game/city-siege" }
    ],
    preview: "https://www.youtube.com/embed/vXJbLYV4Sgw"
  }
  
];
