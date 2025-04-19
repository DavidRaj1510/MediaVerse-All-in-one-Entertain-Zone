
export interface Anime {
  id: string;
  title: string;
  coverImage: string;
  studio: string;
  description: string;
  youtubeId?: string;
  crunchyrollLink?: string;
  youtubeLink?: string;
  hiAnimeLink?: string;
}

export const anime: Anime[] = [
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    studio: "MAPPA",
    description: "In a world where humanity lives within cities surrounded by enormous walls due to the Titans, giant humanoid beings who devour humans seemingly without reason, a young boy named Eren Yeager vows to rid the world of the Titans after they destroy his hometown and kill his mother.",
    youtubeId: "MGRm4IzK1SQ",
    crunchyrollLink: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    youtubeLink: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
    hiAnimeLink: "https://hianime.pe/anime/attack-on-titan"
  },
  {
    id: "one-piece-anime",
    title: "One Piece",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
    studio: "Toei Animation",
    description: "Follows the adventures of Monkey D. Luffy and his friends in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
    youtubeId: "S8_YwFLCh4U",
    crunchyrollLink: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
    youtubeLink: "https://www.youtube.com/watch?v=S8_YwFLCh4U",
    hiAnimeLink: "https://hianime.to/watch/one-piece"
  },
  {
    id: "solo-levelling",
    title: "Solo Leveling",
    coverImage: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_7ofs1o6qql4cn974jp7bb89f4r/-S897-FWEBP",
    studio: "A-1 Pictures",
    description: "In a world where hunters fight deadly monsters to protect humanity, Jinwoo Sung, the weakest hunter of all mankind, is granted a mysterious system that allows him to grow stronger with no limit.",
    youtubeId: "YvGSK8mIlt8",
    crunchyrollLink: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling",
    youtubeLink: "https://www.youtube.com/watch?v=YvGSK8mIlt8",
    hiAnimeLink: "https://hianime.to/watch/solo-leveling-18544"
  },
  {
    id: "demon-slayer-anime",
    title: "Demon Slayer",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNmQ5Zjg2ZTYtMGZmNC00M2Y3LTgwZGQtYmQ3NWI5MDdhZWNjXkEyXkFqcGc@._V1_.jpg",
    studio: "Ufotable",
    description: "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, where over 40 people have disappeared.",
    youtubeId: "VQGCKyvzIM4",
    crunchyrollLink: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
    youtubeLink: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
    hiAnimeLink: "https://hianime.to/watch/demon-slayer-kimetsu-no-yaiba"
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg",
    studio: "MAPPA",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    youtubeId: "4A_X-Dvl0ws",
    crunchyrollLink: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
    youtubeLink: "https://www.youtube.com/watch?v=4A_X-Dvl0ws",
    hiAnimeLink: "https://hianime.to/watch/jujutsu-kaisen"
  },
  {
    id: "one-punch-man",
    title: "One Punch Man",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNzMwOGQ5MWItNzE3My00ZDYyLTk4NzAtZWIyYWI0NTZhYzY0XkEyXkFqcGc@._V1_.jpg",
    studio: "Madhouse",
    description: "The story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.",
    youtubeId: "Poo5lqoWSGw",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYE241NKR/one-punch-man",
    youtubeLink: "https://www.youtube.com/watch?v=Poo5lqoWSGw",
    hiAnimeLink: "https://hianime.to/watch/one-punch-man"
  },
  {
    id: "dandadan",
    title: "Dandadan",
    coverImage: "https://asolivagantsshoes.com/wp-content/uploads/2025/01/511d172f_bbfc_4d06_a815_043eebe1b28b.webp?w=1024",
    studio: "Science SARU",
    description: "A high school girl who believes in ghosts and a boy obsessed with aliens get dragged into a world where both exist, leading to bizarre and action-packed encounters.",
    youtubeId: "0XJxfbN36Uw",
    crunchyrollLink: "",
    youtubeLink: "https://www.youtube.com/watch?v=0XJxfbN36Uw",
    hiAnimeLink: ""
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    coverImage: "https://external-preview.redd.it/blue-lock-season-2-teaser-visual-v0-jEeGIFJYeqVsYkMANzRTjYpf8peE-FJ20743UuoH3yw.jpg?auto=webp&s=0da3b28627528d2ddf7e38396548065f56dc57f2",
    studio: "8bit",
    description: "After Japan’s disappointing performance at the 2018 World Cup, the Japanese Football Union launches a radical new training program to find the best striker in the country — Blue Lock.",
    youtubeId: "IVsII3dLbWc",
    crunchyrollLink: "https://www.crunchyroll.com/series/GVDHX8QNW/blue-lock",
    youtubeLink: "https://www.youtube.com/watch?v=IVsII3dLbWc",
    hiAnimeLink: "https://hianime.to/watch/blue-lock-17496"
  },
  {
    id: "you-are-ms-servant",
    title: "You Are Ms. Servant",
    coverImage: "https://external-preview.redd.it/you-are-ms-servant-key-visual-v0-B3GsyDSFCUF4XezqTvD2jPGvMQpeaLGLASje95mToMQ.jpg?width=1080&crop=smart&auto=webp&s=56c0d8b98214bf1413eded92e4446f60a68301f2",
    studio: "Felix Film",
    description: "Hitoyoshi, a high school student living alone, encounters Yuki, a former assassin turned maid, who suddenly appears at his doorstep. As they navigate daily life together, Yuki's past and their growing bond unfold in unexpected ways.",
    youtubeId: "i0Vu4OG4ULs",
    crunchyrollLink: "https://www.crunchyroll.com/series/G1XHJV02M/you-are-ms-servant",
    youtubeLink: "https://www.youtube.com/watch?v=i0Vu4OG4ULs",
    hiAnimeLink: "https://hianime.to/watch/you-are-ms-servant-18545"
  },  
  {
    id: "clannad",
    title: "Clannad",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMWJiNDQzNGEtNTA3Zi00NjM2LWE2NTAtOTU0NzA4ZmJiMjhmXkEyXkFqcGc@._V1_.jpg",
    studio: "Kyoto Animation",
    description: "Tomoya Okazaki, a high school delinquent, meets a strange girl named Nagisa and is drawn into her world and the lives of others around them. A heartfelt story about love, loss, and the value of family.",
    youtubeId: "9ZseZTshl2k",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYWEQKJG6/clannad",
    youtubeLink: "https://www.youtube.com/watch?v=9ZseZTshl2k",
    hiAnimeLink: "https://hianime.to/watch/clannad-85"
  },  
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "MAPPA",
    description: "Denji is a teenage boy living with a devil dog named Pochita, which has a chainsaw blade extending from its head. One day, Denji is betrayed and killed, but Pochita merges with him, granting him the ability to transform into Chainsaw Man.",
    youtubeId: "q15CRdE5Bv0",
    crunchyrollLink: "https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man",
    youtubeLink: "https://www.youtube.com/watch?v=q15CRdE5Bv0",
    hiAnimeLink: "https://hianime.to/watch/chainsaw-man"
  },
  {
    id: "fullmetal-alchemist-brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png",
    studio: "Bones",
    description: "After a horrific alchemy experiment goes wrong, brothers Edward and Alphonse Elric are left in a catastrophic state. Now they seek the Philosopher's Stone to restore what they've lost.",
    youtubeId: "--IcmZkvL0Q",
    crunchyrollLink: "https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
    youtubeLink: "https://www.youtube.com/watch?v=--IcmZkvL0Q",
    hiAnimeLink: "https://hianime.to/watch/fullmetal-alchemist-brotherhood"
  },
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12793542_b_v13_ak.jpg",
    studio: "Bones",
    description: "In a world where people with superpowers known as 'Quirks' are the norm, middle school student Izuku Midoriya has dreams of one day becoming a hero, despite being bullied by his classmates for not having a Quirk.",
    youtubeId: "EPVkcwyLQQ8",
    crunchyrollLink: "https://www.crunchyroll.com/series/G6NVQ8WMY/my-hero-academia",
    youtubeLink: "https://www.youtube.com/watch?v=EPVkcwyLQQ8",
    hiAnimeLink: "https://hianime.to/watch/my-hero-academia"
  },
  {
    id: "death-note-anime",
    title: "Death Note",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Madhouse",
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    youtubeId: "NlJZ-YgAt-c",
    crunchyrollLink: "https://www.crunchyroll.com/series/G6QWD3EE6/death-note",
    youtubeLink: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
    hiAnimeLink: "https://hianime.to/watch/death-note"
  },
  {
    id: "naruto-shippuden",
    title: "Naruto: Shippuden",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg",
    studio: "Pierrot",
    description: "Naruto Uzumaki returns after years of training to find his village threatened by powerful enemies. Now with his fellow ninjas, he must protect his friends and face the challenges of becoming the next Hokage.",
    youtubeId: "1X2LKhOLo1g",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden",
    youtubeLink: "https://www.youtube.com/watch?v=1X2LKhOLo1g",
    hiAnimeLink: "https://hianime.to/watch/naruto-shippuden"
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "White Fox",
    description: "A group of friends creates a device that can send messages to the past, but their discovery inadvertently leads to a dystopian future and they must find a way to prevent it from happening.",
    youtubeId: "27OZc-ku6is",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYW4D15JR/steinsgate",
    youtubeLink: "https://www.youtube.com/watch?v=27OZc-ku6is",
    hiAnimeLink: "https://hianime.to/watch/steins-gate"
  },
  {
    id: "hunter-x-hunter-2011",
    title: "Hunter x Hunter (2011)",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Madhouse",
    description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks his father who left him when he was younger.",
    youtubeId: "d6kBeJjTGnY",
    crunchyrollLink: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter",
    youtubeLink: "https://www.youtube.com/watch?v=d6kBeJjTGnY",
    hiAnimeLink: "https://hianime.to/watch/hunter-x-hunter-2011"
  },
  {
    id: "your-name",
    title: "Your Name",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/1*WiBQ628f6PZNzE91FmXmGw.png",
    studio: "CoMix Wave Films",
    description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    youtubeId: "3KR8_igDs1Y",
    crunchyrollLink: "https://www.crunchyroll.com/watch/G62PEZ196/your-name",
    youtubeLink: "https://www.youtube.com/watch?v=3KR8_igDs1Y",
    hiAnimeLink: "https://hianime.to/watch/your-name"
  },
  {
    id: "vinland-saga-anime",
    title: "Vinland Saga",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17127060_b_v8_aa.jpg",
    studio: "Wit Studio",
    description: "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage.",
    youtubeId: "f8JrZ7Q_p-8",
    crunchyrollLink: "https://www.crunchyroll.com/series/GKEH5Z4PJ/vinland-saga",
    youtubeLink: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8",
    hiAnimeLink: "https://hianime.to/watch/vinland-saga"
  },
  {
    id: "haikyuu",
    title: "Haikyuu!!",
    coverImage: "https://m.media-amazon.com/images/I/71DRngOUBAS.jpg",
    studio: "Production I.G",
    description: "Determined to be like the volleyball championship's star player nicknamed 'the small giant', Shoyo Hinata joins his school's volleyball club.",
    youtubeId: "JOGp2c7-cKc",
    crunchyrollLink: "https://www.crunchyroll.com/series/GY8VM8MWY/haikyu",
    youtubeLink: "https://www.youtube.com/watch?v=JOGp2c7-cKc",
    hiAnimeLink: "https://hianime.to/watch/haikyuu"
  },
  {
    id: "demon-slayer-movie",
    title: "Demon Slayer: Mugen Train",
    coverImage: "https://images.static-bluray.com/products/20/107714_4_front.jpg",
    studio: "Ufotable",
    description: "After his family was murdered by a demon, Tanjiro and his sister Nezuko, who has been turned into a demon, join the Demon Slayer Corps to find a way to return Nezuko to normal and avenge their family.",
    youtubeId: "ATJYac_dORw",
    crunchyrollLink: "https://www.crunchyroll.com/watch/G9VHN90X0/demon-slayer-kimetsu-no-yaiba-mugen-train-arc",
    youtubeLink: "https://www.youtube.com/watch?v=ATJYac_dORw",
    hiAnimeLink: "https://hianime.to/watch/demon-slayer-movie-mugen-train"
  },
  {
    id: "mob-psycho-100",
    title: "Mob Psycho 100",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_.jpg",
    studio: "Bones",
    description: "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
    youtubeId: "Pr43Sayk37s",
    crunchyrollLink: "https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100",
    youtubeLink: "https://www.youtube.com/watch?v=Pr43Sayk37s",
    hiAnimeLink: "https://hianime.to/watch/mob-psycho-100"
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11999443_b_v8_ab.jpg",
    studio: "Studio Pierrot",
    description: "A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.",
    youtubeId: "uMeR2W19wT0",
    crunchyrollLink: "https://www.crunchyroll.com/series/G9VHN9G0G/tokyo-ghoul",
    youtubeLink: "https://www.youtube.com/watch?v=uMeR2W19wT0",
    hiAnimeLink: "https://hianime.to/watch/tokyo-ghoul"
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    coverImage: "https://resizing.flixster.com/MkSM7ougHsBx2AEYIM4FD4086Fk=/fit-in/352x330/v2/https://resizing.flixster.com/zx_u60-0hAUWX_6FZXoNbXZIWTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjNmNTI2ZmQtYzRhZS00MmFhLTgyMmYtMmMxMWQyOGFlNDM2LnBuZw==",
    studio: "Wit Studio",
    description: "A spy, an assassin, and a telepath come together to pose as a family, each hiding their identity from the others, while working to complete a mission that requires them to act as the perfect family.",
    youtubeId: "ofXigq9aIpo",
    crunchyrollLink: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
    youtubeLink: "https://www.youtube.com/watch?v=ofXigq9aIpo",
    hiAnimeLink: "https://hianime.to/watch/spy-x-family"
  },
  {
    id: "violet-evergarden",
    title: "Violet Evergarden",
    coverImage: "https://media.karousell.com/media/photos/products/2023/12/12/violet_evergarden_cosplay_1702368080_441c8a66_progressive.jpg",
    studio: "Kyoto Animation",
    description: "A former soldier returns from war and finds a job at a postal service, where she helps people express their feelings through letters while trying to understand emotions herself.",
    youtubeId: "g5xWqjFglsk",
    crunchyrollLink: "https://www.netflix.com/title/80182123",
    youtubeLink: "https://www.youtube.com/watch?v=g5xWqjFglsk",
    hiAnimeLink: "https://hianime.to/watch/violet-evergarden"
  },
  {
    id: "stein-gate-0",
    title: "Steins;Gate 0",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTgzZWY0YmEtNTNlMy00YzU1LWI4NTUtYzBlNzQ0ODkzNzAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "White Fox",
    description: "A continuation of the original series that explores an alternate worldline where Okabe fails to save Kurisu and must deal with the aftermath of his failure.",
    youtubeId: "MKHrLR1gecg",
    crunchyrollLink: "https://www.crunchyroll.com/series/GRGG29J36/steinsgate-0",
    youtubeLink: "https://www.youtube.com/watch?v=MKHrLR1gecg",
    hiAnimeLink: "https://hianime.to/watch/steinsgate-0"
  },
  {
    id: "neon-genesis-evangelion",
    title: "Neon Genesis Evangelion",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMGRiOWQyOTAtZDQ0Ny00NGRiLWIyYTYtZWM1MjNjNzg0ZjE3XkEyXkFqcGc@._V1_.jpg",
    studio: "Gainax",
    description: "A teenage boy finds himself recruited as a member of an elite team of pilots by his father.",
    youtubeId: "13nSISwxrY4",
    crunchyrollLink: "https://www.netflix.com/title/81033445",
    youtubeLink: "https://www.youtube.com/watch?v=13nSISwxrY4",
    hiAnimeLink: "https://hianime.to/watch/neon-genesis-evangelion"
  },
  {
    id: "your-lie-in-april",
    title: "Your Lie in April",
    coverImage: "https://img1.hulu.com/user/v3/artwork/8156b6d6-46ae-4576-877e-022657255de6?base_image_bucket_name=image_manager&base_image=64b5426d-d097-4ffd-9853-226e8df6514b&size=458x687&format=webp",
    studio: "A-1 Pictures",
    description: "A piano prodigy who lost his ability to play after suffering a traumatic event meets a violinist who helps him return to the music world.",
    youtubeId: "aMBJ543MU8w",
    crunchyrollLink: "https://www.crunchyroll.com/series/G6P8Z5GG6/your-lie-in-april",
    youtubeLink: "https://www.youtube.com/watch?v=aMBJ543MU8w",
    hiAnimeLink: "https://hianime.to/watch/your-lie-in-april"
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
    studio: "Studio Ghibli",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    youtubeId: "ByXuk9QqQkk",
    crunchyrollLink: "https://www.hbo.com/movies/spirited-away",
    youtubeLink: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    hiAnimeLink: "https://hianime.to/watch/spirited-away"
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZjM4ODA5YTktNjliMC00NzI5LTk3ZTctZWYyYWEyNTJhMmQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Kinema Citrus",
    description: "A young girl and her robot friend descend into a mysterious giant hole in the earth called the Abyss, seeking her mother who disappeared there.",
    youtubeId: "DiUKh_MjsI0",
    crunchyrollLink: "https://www.crunchyroll.com/series/GQWH0M9N8/made-in-abyss",
    youtubeLink: "https://www.youtube.com/watch?v=DiUKh_MjsI0",
    hiAnimeLink: "https://hianime.to/watch/made-in-abyss"
  },
  {
    id: "mushoku-tensei",
    title: "Mushoku Tensei: Jobless Reincarnation",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_.jpg",
    studio: "Studio Bind",
    description: "A 34-year-old unemployed shut-in is reincarnated into a magical world as Rudeus Greyrat. Armed with his knowledge from his previous life and new magical abilities, he begins a fresh chance at life.",
    youtubeId: "1TiBoHQUj3I",
    crunchyrollLink: "https://www.crunchyroll.com/series/G24H1N3MP/mushoku-tensei-jobless-reincarnation",
    youtubeLink: "https://www.youtube.com/watch?v=1TiBoHQUj3I",
    hiAnimeLink: "https://hianime.to/watch/mushoku-tensei-jobless-reincarnation"
  },
  {
    id: "gintama",
    title: "Gintama",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTMzNjE0N2ItNjFiYi00NmIzLTk1MzMtZWFjNThjMzI5MTJlXkEyXkFqcGc@._V1_.jpg",
    studio: "Sunrise",
    description: "In an era where aliens have invaded and taken over feudal Tokyo, a young samurai finds work however he can.",
    youtubeId: "YQC3z2QhQG4",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama",
    youtubeLink: "https://www.youtube.com/watch?v=YQC3z2QhQG4",
    hiAnimeLink: "https://hianime.to/watch/gintama"
  },
  {
    id: "monster",
    title: "Monster",
    coverImage: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/ad58dfdc-0007-4e0f-bee8-06f2466cb6e3/220x330",
    studio: "Madhouse",
    description: "Dr. Tenma, a renowned brain surgeon in Germany, sacrifices his career to save the life of a young boy. But the consequences of that decision come back to haunt him as he discovers the child he saved is a serial killer.",
    youtubeId: "9aXTKhnockM",
    crunchyrollLink: "",
    youtubeLink: "https://www.youtube.com/watch?v=9aXTKhnockM",
    hiAnimeLink: "https://hianime.to/watch/monster-39"
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg",
    studio: "Sunrise",
    description: "The futuristic misadventures of a ragtag crew of bounty hunters as they travel through the solar system looking for their next paycheck.",
    youtubeId: "QCaEJZqLeTU",
    crunchyrollLink: "https://www.crunchyroll.com/series/GYKE9NQ9Y/cowboy-bebop",
    youtubeLink: "https://www.youtube.com/watch?v=QCaEJZqLeTU",
    hiAnimeLink: "https://hianime.to/watch/cowboy-bebop"
  },
  {
    id: "code-geass",
    title: "Code Geass",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186544_b_v8_ad.jpg",
    studio: "Sunrise",
    description: "An exiled prince receives a power from a mysterious girl that allows him to command others. He uses this power to lead a rebellion against the empire that conquered his homeland.",
    youtubeId: "v-AGjx0N24U",
    crunchyrollLink: "https://www.crunchyroll.com/series/GY2P93Q9Y/code-geass",
    youtubeLink: "https://www.youtube.com/watch?v=v-AGjx0N24U",
    hiAnimeLink: "https://hianime.to/watch/code-geass"
  },
  {
    id: "re-zero",
    title: "Re:Zero - Starting Life in Another World",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTY1M2NjMTItOGFhNi00NDU3LWExNzQtZGY2YWJlYzExNmU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "White Fox",
    description: "A high school student is transported to another world and finds himself with the ability to reset by dying. He uses this ability to help save those he cares about.",
    youtubeId: "ETWVUFz9cgY",
    crunchyrollLink: "https://www.crunchyroll.com/series/GRGG3XP3R/rezero-starting-life-in-another-world",
    youtubeLink: "https://www.youtube.com/watch?v=ETWVUFz9cgY",
    hiAnimeLink: "https://hianime.to/watch/rezero-starting-life-in-another-world"
  },
];
