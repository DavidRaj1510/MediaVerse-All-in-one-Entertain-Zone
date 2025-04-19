
export interface Movie {
  id: string;
  title: string;
  coverImage: string;
  director: string;
  description: string;
  youtubeId?: string;
  netflixLink?: string;
  primeLink?: string;
  ibommaLink?: string;
}

export const movies: Movie[] = [
  {
    id: "Pushpa",
    title: "Pushpa",
    coverImage: "https://images.justwatch.com/poster/305791255/s718/pushpa-the-rule-part-2.jpg",
    director: "Sukumae",
    description: "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new.",
    netflixLink: "https://www.netflix.com/in/title/82006666",
    primeLink: "https://www.primevideo.com/detail/Pushpa-The-Rise-Hindi/0PCNR8B8EB3051VAMKZ4JOKOM9",
    ibommaLink: "https://ees.ibomma.day/d/Pushpa-The-Rule-Part-2-2024-JfZL-telugu-movie-watch-online.html",
    youtubeId: "g3JUbgOHgdw"
  },
  {
    id: "chhaava",
    title: "Chhaava",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMDMyZjFmZTctNDAxYi00MWM3LWJiYmItM2VhNWZiM2IwNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Laxman Utekar",
    description: "A historical drama based on the life of Chhatrapati Sambhaji Maharaj, the son of Shivaji Maharaj, depicting his bravery and struggles.",
    netflixLink: "https://www.netflix.com/in/title/81902061",
    primeLink: ""
  },
  {
    id: "game-changer",
    title: "Game Changer",
    coverImage: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/01/10154018/game-changer-feature.jpg?tr=w-1200,q-60",
    director: "S. Shankar",
    description: "A political action thriller where a man takes on systemic corruption to bring about revolutionary change in governance.",
    netflixLink: "https://www.primevideo.com/detail/Game-Changer/0Q2NQ37JYS1O5F6NQYKYQGSWJP",
    primeLink: "https://www.primevideo.com/detail/Game-Changer/0Q2NQ37JYS1O5F6NQYKYQGSWJP"
  },
  {
    id: "azaad",
    title: "Azaad",
    coverImage: "https://images.mid-day.com/images/images/2025/jan/Azaadmoviereviewfil_d.jpg",
    director: "Abhishek Kapoor",
    description: "Details currently under wraps, expected to be a patriotic action drama centered around a revolutionary figure.",
    netflixLink: "https://www.netflix.com/in/title/81977810?source=35",
    primeLink: "https://www.primevideo.com/detail/Azaad/0MNL54NERAK2T443TOCP4NMAY7"
  },
  {
    id: "lucky-bhaskar",
    title: "Lucky Bhaskar",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMjEzN2ZjYjUtZTI3NC00MzMyLWJiNDAtMDBiZGEzNTBiY2RkXkEyXkFqcGc@._V1_.jpg",
    director: "Venky Atluri",
    description: "Inspired by real events, this gripping drama follows a common man entangled in the aftermath of a massive financial scandal.",
    netflixLink: "https://www.netflix.com/in/title/81902035?source=35",
    primeLink: "https://www.netflix.com/in/title/81902035"
  },
  {
    id: "daaku-maharaj",
    title: "Daaku Maharaj",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Daaku_Maharaaj_film_poster.jpg/250px-Daaku_Maharaaj_film_poster.jpg",
    director: "Siddharth P. Malhotra",
    description: "A gritty and dramatic tale of power, faith, and rebellion set in a complex socio-political backdrop.",
    netflixLink: "https://www.netflix.com/in/title/81715676",
    primeLink: "https://www.netflix.com/in/title/81715676"
  },  
  {
    id: "sector-36",
    title: "Sector 36",
    coverImage: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1195725,resizemode-75,msid-113318385/magazines/panache/sector-36-review-vikrant-masseys-haunting-crime-drama-leaves-viewers-shaken-check-plot-cast.jpg",
    director: "Aditya Nimbalkar",
    description: "A gritty cop thriller that dives into the dark side of crime and corruption in one of the most dangerous sectors of the city.",
    netflixLink: "https://www.netflix.com/in/title/81777258",
    primeLink: "https://www.netflix.com/in/title/81777258"
  },
  {
    id: "jigra",
    title: "Jigra",
    coverImage: "https://resizing.flixster.com/QIQ9ES2Hd5gmV9mFjWJzeQ-H2kU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E4MDIxNjI3LTMxMTItNDliYS1hOTU3LWFjOTg0YWZhMjhlNC5qcGc=",
    director: "Vasan Bala",
    description: "A heart-thumping emotional drama about a sister's courage and fierce protection of her brother against looming danger.",
    netflixLink: "https://www.netflix.com/in/title/81730619",
    primeLink: "https://www.netflix.com/in/title/81730619"
  },
  {
    id: "retro",
    title: "Retro",
    coverImage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00426563-weztjtdntd-portrait.jpg",
    director: "Vikramaditya Motwane",
    description: "A stylish throwback to the golden era of cinema, Retro blends nostalgia with a gripping story of love, ambition, and betrayal in the film industry.",
    netflixLink: "",
    primeLink: ""
  },  
  {
    id: "kalki-2898-ad",
    title: "Kalki 2898 AD",
    coverImage: "https://preview.redd.it/are-you-excited-for-kalki-2898-ad-june-20-release-is-v0-md9ands6zotc1.jpeg?auto=webp&s=86fb97e5169fc034c79e80d03f86e61136d06927",
    director: "Nag Ashwin",
    description: "Set in a dystopian future, this epic sci-fi action film reimagines Hindu mythology through a futuristic lens, with the rise of a new warrior to restore balance.",
    netflixLink: "https://www.netflix.com/in/title/81726031",
    primeLink: "https://www.primevideo.com/dp/amzn1.dv.gti.5e6a95ea-424a-49e0-b1db-3a6097ec03f9?autoplay=0&ref_=atv_cf_strg_wb"
  },
  
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    coverImage: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    description: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II and the moral and political consequences that followed.",
    netflixLink: "https://www.netflix.com/title/81617538",
    primeLink: "https://www.primevideo.com/detail/Oppenheimer/0QSD7K9UVIPDIKVFKT8Q8Y8I9R"
  },
  {
    id: "the-avengers",
    title: "The Avengers",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Joss Whedon",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    netflixLink: "https://www.netflix.com/title/70217912",
    primeLink: "https://www.primevideo.com/detail/0Q7KEW9O3UZQ3YMQWEFJGRALIQ"
  },
  {
    id: "spider-man",
    title: "Spider-Man",
    coverImage: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S2_1200x1600-76424286902489f4d9639ac9b735c2b2",
    director: "Sam Raimi",
    description: "After being bitten by a genetically-altered spider, a shy teenager gains spider-like abilities and decides to fight crime as Spider-Man.",
    netflixLink: "https://www.netflix.com/title/60022052",
    primeLink: "https://www.primevideo.com/detail/Spider-Man/0QGYYTL6T0KJSWCBPNN3VXXT0W"
  },  
  {
    id: "parasite",
    title: "Parasite",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQ8a2gQyfA8PSjfQKCvnfJiYmu84DQWW6Gw&s",
    director: "Bong Joon-ho",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    netflixLink: "https://www.netflix.com/title/81221938",
    primeLink: "https://www.primevideo.com/detail/Parasite/0I7JMGW4PBHLA0Z7A7LIHH37BZ"
  },
  {
    id: "rrr",
    title: "RRR",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    director: "S.S. Rajamouli",
    description: "A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    netflixLink: "https://www.netflix.com/title/81476453",
    ibommaLink: "https://evs.ibomma.day/telugu-movies/rrr/"
  },
  {
    id: "bahubali",
    title: "Baahubali",
    coverImage: "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "S.S. Rajamouli",
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    netflixLink: "https://www.netflix.com/title/80204538",
    ibommaLink: "https://evs.ibomma.day/telugu-movies/baahubali-the-beginning/"
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s",
    director: "The Wachowskis",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    netflixLink: "https://www.netflix.com/title/20557937",
    primeLink: "https://www.primevideo.com/detail/The-Matrix/0TEBHO6DZWFCYT2HEF1TARAIS"
  },
  // Additional 24 movies
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    coverImage: "https://m.media-amazon.com/images/S/pv-target-images/541b7d586b6a736467d773f36e8f878a8f4f56e6de63ab8fd33d1dfd9feb5f34.jpg",
    director: "Quentin Tarantino",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    netflixLink: "https://www.netflix.com/title/880640",
    primeLink: "https://www.primevideo.com/detail/Pulp-Fiction/0N4SUHCBKDL0RBFCALBZXD6MWK"
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMtkGBfHb06Qfe-eI5WYVbzMZ18yHhdowsA&s",
    director: "Christopher Nolan",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    netflixLink: "https://www.netflix.com/title/70079583",
    primeLink: "https://www.primevideo.com/detail/The-Dark-Knight/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    director: "Francis Ford Coppola",
    description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    netflixLink: "https://www.netflix.com/title/60011152",
    primeLink: "https://www.primevideo.com/detail/The-Godfather/0GSYK1JD27OUH5UUEPK0ZOFGXP"
  },
  {
    id: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Frank Darabont",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    netflixLink: "https://www.netflix.com/title/70005379",
    primeLink: "https://www.primevideo.com/detail/The-Shawshank-Redemption/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "fight-club",
    title: "Fight Club",
    coverImage: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "David Fincher",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    netflixLink: "https://www.netflix.com/title/26004747",
    primeLink: "https://www.primevideo.com/detail/Fight-Club/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "forrest-gump",
    title: "Forrest Gump",
    coverImage: "https://m.media-amazon.com/images/I/713xd8jGVuL._AC_UF1000,1000_QL80_.jpg",
    director: "Robert Zemeckis",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    netflixLink: "https://www.netflix.com/title/60000724",
    primeLink: "https://www.primevideo.com/detail/Forrest-Gump/0XWJJ3QVFPPW63XZKZXM3TIWSA"
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    coverImage: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    director: "Martin Scorsese",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    netflixLink: "https://www.netflix.com/title/70002022",
    primeLink: "https://www.primevideo.com/detail/Goodfellas/0HN8QYVW8BZRIZPR3PJ67AJ19W"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    director: "Christopher Nolan",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    netflixLink: "https://www.netflix.com/title/70305903",
    primeLink: "https://www.primevideo.com/detail/Interstellar/0G35FGCQOSPCPLB0HR9VF08YV5"
  },
  {
    id: "schindlers-list",
    title: "Schindler's List",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Steven Spielberg",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    netflixLink: "https://www.netflix.com/title/60036359",
    primeLink: "https://www.primevideo.com/detail/Schindlers-List/0RG5DBFXJHQ96CYZ70T3MAM7GQ"
  },
  {
    id: "gladiator",
    title: "Gladiator",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    director: "Ridley Scott",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    netflixLink: "https://www.netflix.com/title/60000929",
    primeLink: "https://www.primevideo.com/detail/Gladiator/0ZEEEDNOB9LNVNKPF5TEFM0ZDU"
  },
  {
    id: "titanic",
    title: "Titanic",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
    director: "James Cameron",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    netflixLink: "https://www.netflix.com/title/1181461",
    primeLink: "https://www.primevideo.com/detail/Titanic/0KANJGPO8U2VZ29R8JJXQINK0N"
  },
  {
    id: "jurassic-park",
    title: "Jurassic Park",
    coverImage: "https://m.media-amazon.com/images/I/917hANc0Q9L._AC_UF894,1000_QL80_.jpg",
    director: "Steven Spielberg",
    description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    netflixLink: "https://www.netflix.com/title/60002360",
    primeLink: "https://www.primevideo.com/detail/Jurassic-Park/0TERJJXNQS908GX0LZKNTGKK9P"
  },
  {
    id: "the-lord-of-the-rings",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    director: "Peter Jackson",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    netflixLink: "https://www.netflix.com/title/60004480",
    primeLink: "https://www.primevideo.com/detail/The-Lord-of-the-Rings-The-Fellowship-of-the-Ring/0OBYLSHJTBSRY8UZJLG3REPRN2"
  },
  {
    id: "avatar",
    title: "Avatar",
    coverImage: "https://m.media-amazon.com/images/I/71LRjSVXCGL._AC_UF1000,1000_QL80_.jpg",
    director: "James Cameron",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    netflixLink: "https://www.netflix.com/title/70120522",
    primeLink: "https://www.primevideo.com/detail/Avatar/0OQAKG3ZFNMV9J1Y6EDK7QNKCB"
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    coverImage: "https://cdn.kinocheck.com/i/06w674iyae.jpg",
    director: "Christopher Nolan",
    description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    netflixLink: "https://www.netflix.com/title/70047095",
    primeLink: "https://www.primevideo.com/detail/The-Prestige/0QLGW0V6LHB71L7Q8DP9A9DMRJ"
  },
  {
    id: "spirited-away-movie",
    title: "Spirited Away",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg",
    director: "Hayao Miyazaki",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    netflixLink: "https://www.netflix.com/title/60023642",
    primeLink: "https://www.primevideo.com/detail/Spirited-Away/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "whiplash",
    title: "Whiplash",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10488558_p_v12_ai.jpg",
    director: "Damien Chazelle",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    netflixLink: "https://www.netflix.com/title/70299275",
    primeLink: "https://www.primevideo.com/detail/Whiplash/0GMK6O4JYLDNX2BX91276DHZIG"
  },
  {
    id: "the-departed",
    title: "The Departed",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
    director: "Martin Scorsese",
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    netflixLink: "https://www.netflix.com/title/70044689",
    primeLink: "https://www.primevideo.com/detail/The-Departed/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33409_p_v10_bb.jpg",
    director: "Michel Gondry",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    netflixLink: "https://www.netflix.com/title/60034545",
    primeLink: "https://www.primevideo.com/detail/Eternal-Sunshine-of-the-Spotless-Mind/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    coverImage: "https://ew.com/thmb/axT6cG7KYmJ2s70gct3zhdjUIqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-social-network-2000-1cc38972d01241a5b2f89e4412a0ceb5.jpg",
    director: "David Fincher",
    description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    netflixLink: "https://www.netflix.com/title/70132721",
    primeLink: "https://www.primevideo.com/detail/The-Social-Network/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "the-truman-show",
    title: "The Truman Show",
    coverImage: "https://m.media-amazon.com/images/S/pv-target-images/000f3148b9e88c93884fb5b28ce6ae4519690911db706d2e7d0c13bac8e175ba.jpg",
    director: "Peter Weir",
    description: "An insurance salesman discovers his whole life is actually a reality TV show.",
    netflixLink: "https://www.netflix.com/title/11819086",
    primeLink: "https://www.primevideo.com/detail/The-Truman-Show/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "the-green-mile",
    title: "The Green Mile",
    coverImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_p_v12_bf.jpg",
    director: "Frank Darabont",
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    netflixLink: "https://www.netflix.com/title/60000006",
    primeLink: "https://www.primevideo.com/detail/The-Green-Mile/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "good-will-hunting",
    title: "Good Will Hunting",
    coverImage: "https://resizing.flixster.com/qRm2u99QaQjw1YVMUh0RxsxXIZQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20224_v_h9_ap.jpg",
    director: "Gus Van Sant",
    description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    netflixLink: "https://www.netflix.com/title/17405997",
    primeLink: "https://www.primevideo.com/detail/Good-Will-Hunting/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "saving-private-ryan",
    title: "Saving Private Ryan",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdFj21HBCymrQM50F9Hykneh3cS3UhoIxbA&s",
    director: "Steven Spielberg",
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    netflixLink: "https://www.netflix.com/title/60036227",
    primeLink: "https://www.primevideo.com/detail/Saving-Private-Ryan/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  },
  {
    id: "back-to-the-future",
    title: "Back to the Future",
    coverImage: "https://m.media-amazon.com/images/I/819CLf3RK6L._AC_UF1000,1000_QL80_.jpg",
    director: "Robert Zemeckis",
    description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    netflixLink: "https://www.netflix.com/title/60010110",
    primeLink: "https://www.primevideo.com/detail/Back-to-the-Future/0QSTXR0EXWWYI4D3UGMN0XR6SS"
  }
];
