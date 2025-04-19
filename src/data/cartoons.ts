
export interface Cartoon {
  id: string;
  title: string;
  coverImage: string;
  studio: string;
  description: string;
  youtubeId?: string;
  youtubeLink: string;
}

export const cartoons: Cartoon[] = [
  {
    id: "spongebob-squarepants",
    title: "SpongeBob SquarePants",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Nickelodeon",
    description: "The series chronicles the adventures and endeavors of SpongeBob SquarePants, an over-optimistic sea sponge who lives in a pineapple under the sea.",
    youtubeId: "r9L4AseD-aA",
    youtubeLink: "https://www.youtube.com/watch?v=pr80hyFCeGY&list=PLaMHyq8hhBW1puOzcGpRtNikKGigiFTAa",
  },
  {
    id: "phineas-and-ferb",
    title: "Phineas and Ferb",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg",
    studio: "Disney",
    description: "Phineas Flynn and his stepbrother Ferb Fletcher spend their summer vacation building elaborate projects and getting into adventures, much to the dismay of their older sister Candace.",
    youtubeId: "NkQrKxTFARM",
    youtubeLink: "https://www.youtube.com/watch?v=fLWBx37eKBM&list=PLg6R6yXKSLYB7kxBoElpG5rSgThsWdrzr"
  },
  {
    id: "doraemon",
    title: "Doraemon",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTRjMDA5ZTQtNWVkMy00OTAwLWI2NmMtYjQxYWM4MTIxYWFhXkEyXkFqcGc@._V1_.jpg",
    studio: "Shin-Ei Animation",
    description: "Doraemon, a robotic cat from the 22nd century, travels back in time to help a young boy named Nobita Nobi navigate the challenges of everyday life with futuristic gadgets.",
    youtubeId: "1b2sSI51Edw",
    youtubeLink: "https://www.youtube.com/watch?v=2CzfZA8nskw&list=PLEhZGgUEYh3XE-gl44NYaxOmHvaL58HwV"
  },
  {
    id: "shinchan",
    title: "Shinchan",
    coverImage: "https://u.livechart.me/anime/8429/poster_image/2bd92d7801d6c6155d7eabbaf6a2c0a9.webp/large.jpg",
    studio: "Shin-Ei Animation",
    description: "The misadventures of a mischievous five-year-old boy named Shinnosuke 'Shin' Nohara, who lives with his parents, baby sister, and dog in Japan.",
    youtubeId: "bPuvqQR-a_0",
    youtubeLink: "https://www.youtube.com/watch?v=GWTJ9O5lFDk&list=PLGAYjnLR9kZutEIxAopqorcE0i3RhqN8r"
  },
  {
    id: "pokemon",
    title: "Pokémon",
    coverImage: "https://br.web.img2.acsta.net/pictures/14/07/18/10/57/567741.jpg",
    studio: "OLM, Inc.",
    description: "The show follows Ash Ketchum, a Pokémon Trainer, as he travels through various regions with his friends, capturing new Pokémon and striving to become a Pokémon Master.",
    youtubeId: "1roy4o4tqQM",
    youtubeLink: "https://www.youtube.com/watch?v=wq8d8R8gin4&list=PLbZxdQd9WcS1uKICOgIvHBAjRyJsAtZgr"
  },  
  {
    id: "ben-10",
    title: "Ben 10",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_.jpg",
    studio: "Cartoon Network",
    description: "The series centers on Ben Tennyson, a 10-year-old boy on a summer vacation road trip with his cousin Gwen and their grandfather Max. During their first night camping, Ben finds a strange watch-like device named the Omnitrix.",
    youtubeId: "97dwYLnbW4E",
    youtubeLink: "https://www.youtube.com/watch?v=hNBDtBfv6wE&list=PLD7E4B63582E0479D"
  },
  {
    id: "gravity-falls",
    title: "Gravity Falls",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_.jpg",
    studio: "Disney",
    description: "The series follows the adventures of Dipper Pines and his twin sister Mabel who are sent to spend the summer with their great-uncle Stan in the mysterious town of Gravity Falls, Oregon.",
    youtubeId: "X2DUpDxFJyg",
    youtubeLink: "https://www.youtube.com/results?search_query=gravity+falls+playlist"
  },
  {
    id: "adventure-time",
    title: "Adventure Time",
    coverImage: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png",
    studio: "Cartoon Network",
    description: "Set in the Land of Ooo, the series follows the adventures of Finn, a human boy, and his best friend and adoptive brother Jake, a dog with magical powers to change shape and grow and shrink at will.",
    youtubeId: "KEoGrbKAyKE",
    youtubeLink: "https://www.youtube.com/results?search_query=adventure+time+playlist"
  },
  {
    id: "rick-and-morty",
    title: "Rick and Morty",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
    studio: "Adult Swim",
    description: "An animated series that follows the exploits of a super scientist Rick Sanchez and his grandson Morty Smith, who split their time between domestic life and interdimensional adventures.",
    youtubeId: "E8cXKMR9a1k",
    youtubeLink: "https://www.youtube.com/results?search_query=rick+and+morty+playlist"
  },
  {
    id: "avatar-last-airbender",
    title: "Avatar: The Last Airbender",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMDMwMThjYWYtY2Q2OS00OGM2LTlkODQtNDJlZTZmMjAyYmFhXkEyXkFqcGc@._V1_.jpg",
    studio: "Nickelodeon",
    description: "Set in a world where people can manipulate the elements of water, earth, fire, or air, with the titular Avatar being the only one who can manipulate all four and bring balance to the world.",
    youtubeId: "d1EnW4kn1kg",
    youtubeLink: "https://www.youtube.com/results?search_query=avatar+last+airbender+playlist"
  },
  {
    id: "steven-universe",
    title: "Steven Universe",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZGJjMmI3ZDMtZTgyNi00MTZhLWE2ZjAtN2Q4YTUyMTg4OGY1XkEyXkFqcGc@._V1_.jpg",
    studio: "Cartoon Network",
    description: "The series is set in the fictional town of Beach City, where the Crystal Gems live in an ancient beachside temple and protect humanity from monsters and other threats.",
    youtubeId: "h-Z7ytsEZDo",
    youtubeLink: "https://www.youtube.com/results?search_query=steven+universe+playlist"
  },
  
  {
    id: "family-guy",
    title: "Family Guy",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_.jpg",
    studio: "20th Television Animation",
    description: "The series follows the dysfunctional Griffin family, consisting of father Peter, mother Lois, daughter Meg, son Chris, baby Stewie, and the family dog Brian, who reside in their hometown of Quahog.",
    youtubeId: "6mNHZb-9iZI",
    youtubeLink: "https://www.youtube.com/results?search_query=family+guy+playlist"
  },
  {
    id: "the-simpsons",
    title: "The Simpsons",
    coverImage: "https://ic.c4assets.com/vps/the-simpsons/7114094d-dd50-404f-acbf-8ddb8dc28885.jpg?imformat=chrome&resize=700px:*",
    studio: "20th Television Animation",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield.",
    youtubeId: "XPG0MqIcby8",
    youtubeLink: "https://www.youtube.com/results?search_query=the+simpsons+playlist"
  },
  {
    id: "south-park",
    title: "South Park",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNTBlMzA3ZTUtODZjNi00NTM0LWExMjMtNjJhYzA3YTkwMWYwXkEyXkFqcGc@._V1_.jpg",
    studio: "Comedy Central",
    description: "The animated series follows the surreal adventures of four young boys who live in the small town of South Park, Colorado.",
    youtubeId: "IeDdTkK1ACg",
    youtubeLink: "https://www.youtube.com/results?search_query=south+park+playlist"
  },
  {
    id: "bojack-horseman",
    title: "BoJack Horseman",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZmMwMDlkNTEtMmQzZS00ODQ0LWJlZmItOTgwYWMwZGM4MzFiXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    studio: "Netflix",
    description: "BoJack Horseman was the star of the hit TV show 'Horsin' Around' in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
    youtubeId: "i1eJMig5Ik4",
    youtubeLink: "https://www.youtube.com/results?search_query=bojack+horseman+playlist"
  },
  {
    id: "futurama",
    title: "Futurama",
    coverImage: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2351/1721629522351-i",
    studio: "20th Television Animation",
    description: "Fry, a pizza delivery boy, is accidentally frozen in 1999 and thawed out on New Year's Eve 2999. He gets a job at an interplanetary delivery company, working with a variety of alien species and robots.",
    youtubeId: "ScMzIvxBSi4",
    youtubeLink: "https://www.youtube.com/results?search_query=futurama+playlist"
  },
  {
    id: "bobs-burgers",
    title: "Bob's Burgers",
    coverImage: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    studio: "20th Television Animation",
    description: "The series centers on the Belchers, a family who run a hamburger restaurant. The family consists of parents Bob and Linda, and their children Tina, Gene, and Louise.",
    youtubeId: "kr1I3mBojc0",
    youtubeLink: "https://www.youtube.com/results?search_query=bobs+burger+playlist"
  },
  {
    id: "regular-show",
    title: "Regular Show",
    coverImage: "https://resizing.flixster.com/m4e7lzJ_zFwoa0G1L4AoRrBljZQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8273235_b_h10_aa.jpg",
    studio: "Cartoon Network",
    description: "The series revolves around the everyday lives of two working-class friends, a blue jay named Mordecai and a raccoon named Rigby—both employed as groundskeepers at a local park.",
    youtubeId: "ko7xBcMw-Xg",
    youtubeLink: "https://www.youtube.com/watch?v=EZXnss-ptyg&list=PLDNGzGULCjyzgIpJTAONs4EAoa0MpIebM"
  },
  {
    id: "samurai-jack",
    title: "Samurai Jack",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNjU4ZmVhZGMtNTU4Yy00YmZhLTlmOGQtNGMwMTcwNTEyZjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Cartoon Network",
    description: "A samurai warrior is sent to the future by an evil shape-shifting wizard and fights to return to the past and defeat the wizard.",
    youtubeId: "VSrv_n4zP_U",
    youtubeLink: "https://www.youtube.com/watch?v=EDezpt2Qc9A&list=PLQ_7USJXwgG_FXuZuP4Zot7K8evzqMmwW"
  },
  {
    id: "courage-the-cowardly-dog",
    title: "Courage the Cowardly Dog",
    coverImage: "https://m.media-amazon.com/images/M/MV5BNDJiYjJlZTctYmFkMy00MDE0LTgyYmYtZTg3NjViZmY3MDc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Cartoon Network",
    description: "The plot revolves around a pink anthropomorphic beagle named Courage who lives with an elderly couple in a farmhouse in the middle of 'Nowhere'.",
    youtubeId: "okQlNQw0H6I",
    youtubeLink: "https://www.youtube.com/watch?v=pyEKOY1TIbU&list=PLo0OWYjmyFyY7q-QY6zbjsUamL_3LeA6D"
  },
  {
    id: "the-amazing-world-of-gumball",
    title: "The Amazing World of Gumball",
    coverImage: "https://img2.hulu.com/user/v3/artwork/c8b9c799-b81e-4522-a05b-40212f69e7a6?base_image_bucket_name=image_manager&base_image=8bcb132d-e694-4318-8375-c0dfd651ef75&size=458x687&format=webp",
    studio: "Cartoon Network",
    description: "The series revolves around the life of a 12-year-old cat named Gumball Watterson and his frequent shenanigans in the fictional American city of Elmore, accompanied by his adopted goldfish brother Darwin.",
    youtubeId: "bo36MrBfTk4",
    youtubeLink: "https://www.youtube.com/watch?v=-qKKf0mxLhY&list=PL77ED97B132C66551"
  },
  {
    id: "over-the-garden-wall",
    title: "Over the Garden Wall",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/8/82/Over_the_Garden_Wall_%28animated_miniseries%29_poster.jpg",
    studio: "Cartoon Network",
    description: "Two brothers, Wirt and Greg, find themselves lost in the Unknown, a strange forest adrift in time. With the help of a wise old Woodsman and a foul-tempered bluebird named Beatrice, they travel through the foggy land hoping to find their way home.",
    youtubeId: "Q9wxkhI7cRc",
    youtubeLink: "https://www.youtube.com/watch?v=X-0vZeaIrFg&list=PLg6KfZlgBuDUTnoy9a-FMuBdAgNcQxTZb"
  },
  {
    id: "we-bare-bears",
    title: "We Bare Bears",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMjM2NDQ5ODMxOV5BMl5BanBnXkFtZTgwMzc5MDc0NjE@._V1_FMjpg_UX1000_.jpg",
    studio: "Cartoon Network",
    description: "Three bear siblings, Grizzly, Panda, and Ice Bear, try to integrate with human society in the San Francisco Bay Area.",
    youtubeId: "pg96HZ4n5Kg",
    youtubeLink: "https://www.youtube.com/watch?v=uo3kXFsQ0Jc&list=PLg6KfZlgBuDXwQ56IZ8tByQGgmgONP4Wr"
  },
  {
    id: "dexters-laboratory",
    title: "Dexter's Laboratory",
    coverImage: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/dexterslab_3.png",
    studio: "Cartoon Network",
    description: "The series follows Dexter, a boy-genius and inventor with a hidden laboratory in his room, which he keeps secret from his parents.",
    youtubeId: "QbZq8Rufh9g",
    youtubeLink: "https://www.youtube.com/watch?v=EQ4tvikcZZs&list=PLQYq3fV2rJ7phKoZrlfweeNlQLcpxiZVc"
  },
  {
    id: "powerpuff-girls",
    title: "The Powerpuff Girls",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMDI5NmQwZTUtNWI0Mi00MDE2LTkwNzQtMDFmZjRkM2Y1YjEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Cartoon Network",
    description: "Three kindergarten-aged girls with superpowers: Blossom, Bubbles, and Buttercup. The plot of an episode is usually some humorous variation of standard superhero and tokusatsu shows, with the girls using their powers to defend their town from various villains.",
    youtubeId: "iaBEKo5sM7w",
    youtubeLink: "https://www.youtube.com/watch?v=zwHYGtTQvdM&list=PLx8JHubmxgM9C1TYIQdOhCc3nGiMSBsaQ"
  },
  {
    id: "ed-edd-n-eddy",
    title: "Ed, Edd n Eddy",
    coverImage: "https://m.media-amazon.com/images/M/MV5BOWNmY2Y0MDUtMmM4Zi00NGEzLWI1MjEtMDUzYmM2MzFjNTU2XkEyXkFqcGc@._V1_.jpg",
    studio: "Cartoon Network",
    description: "The series revolves around three adolescent boys known as 'the Eds', who live in a suburban cul-de-sac in the fictional town of Peach Creek.",
    youtubeId: "xGU8cRLp0L0",
    youtubeLink: "https://www.youtube.com/watch?v=1BPLXepRC8E&list=PLLhOnau-tupRbyQFl0kGjXa1V68g1eNSP"
  },
  {
    id: "avatar-legend-of-korra",
    title: "Avatar: The Legend of Korra",
    coverImage: "https://m.media-amazon.com/images/I/71ICRka7FhL._AC_UF1000,1000_QL80_.jpg",
    studio: "Nickelodeon",
    description: "Set in the fictional world of Avatar: The Last Airbender, 70 years after the events of the original series, the series follows the adventures of Korra, who is the successor of Aang.",
    youtubeId: "BCr2OxRGDfA",
    youtubeLink: "https://www.youtube.com/watch?v=rDZMdnT3Psk&list=PL0uuU7hMyKdVliNMLJ2-QO0de--QSH49K"
  },
  {
    id: "archer",
    title: "Archer",
    coverImage: "https://resizing.flixster.com/niXP--CaZDXw3MDq8-EZOe-6Xkw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMWIwOWY5NjItNzEyOC00NTk0LWIzODktOWY1NzVhYTc1YTE1LmpwZw==",
    studio: "FX",
    description: "Archer follows the exploits of a dysfunctional intelligence agency, led by Sterling Archer (voiced by H. Jon Benjamin) and seven of his colleagues.",
    youtubeId: "AK3oQYY4E2I",
    youtubeLink: "https://www.youtube.com/watch?v=SCX213WI10M&list=PLqU8wrm6VnUxPTUvxQuuex087S0CtEDx_"
  },
  {
    id: "teen-titans",
    title: "Teen Titans",
    coverImage: "https://www.adgully.com/img/800/60998_teen-titans-go.jpg",
    studio: "Cartoon Network",
    description: "The Teen Titans are a team of young superheroes who work together to fight crime and protect their city. The members include Robin, Starfire, Cyborg, Raven, and Beast Boy.",
    youtubeId: "QWaWvQuIVMI",
    youtubeLink: "https://www.youtube.com/watch?v=1E_FwRwqO7w&list=PLcrApfnvcfVw8109V5oSIBQXZ9BRUmeCw"
  },
  {
    id: "danny-phantom",
    title: "Danny Phantom",
    coverImage: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/pbuofbmzlaixzjdjqp7d3qzrd4w_5.jpg",
    studio: "Nickelodeon",
    description: "The series follows a teenage boy who, after an accident with an unpredictable portal between the human world and the Ghost Zone, becomes half-ghost and frequently saves his town and the world from ghost attacks.",
    youtubeId: "2djsx7r5SkM",
    youtubeLink: "https://www.youtube.com/watch?v=WDF3oRn7uqY&list=PLLhOnau-tupSWT0Rg_-KyVIJFjO1vjF3Z"
  },
  {
    id: "transformers-animated",
    title: "Transformers: Animated",
    coverImage: "https://m.media-amazon.com/images/M/MV5BY2ZkOWNhZmQtMTE3MC00NTk3LTk2ZGUtYzFlYWRlY2ZkYmE2XkEyXkFqcGc@._V1_.jpg",
    studio: "Cartoon Network",
    description: "The Transformers' war continues in an older time, through a new generation. On Cybertron, the heroic Autobots battle the evil Decepticons, who try to obtain the Allspark, the source of all Transformers life.",
    youtubeId: "ZEgE4QRd_WU",
    youtubeLink: "https://www.youtube.com/watch?v=rP72deF2QGY&list=PLvMHCfwLXJRYQk7TJ5pTsLJ8_8HEsI6ca"
  },
  {
    id: "star-wars-clone-wars",
    title: "Star Wars: The Clone Wars",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg",
    studio: "Cartoon Network",
    description: "Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
    youtubeId: "RI7WyhWZkzk",
    youtubeLink: "https://www.youtube.com/watch?v=BFmI_HBrLBQ&list=PLhcUoUk1kLVwK73QKzD_h7sTV9aqe15jx"
  },
  {
    id: "batman-the-animated-series",
    title: "Batman: The Animated Series",
    coverImage: "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_.jpg",
    studio: "Warner Bros. Animation",
    description: "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
    youtubeId: "rrmUk2YUm14",
    youtubeLink: "https://www.youtube.com/watch?v=SmQgcmEenzA&list=PLBJAZVFKjDq2vW8BovPYNyYNQTaJFhHn1"
  },
  {
    id: "justice-league-unlimited",
    title: "Justice League Unlimited",
    coverImage: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/justice_league_unlimited_tv_series_waifu2x_art_scale.png",
    studio: "Warner Bros. Animation",
    description: "An expanded Justice League of superheroes fights crime, rescues people, and battles injustice.",
    youtubeId: "WwVgB0MRCVg",
    youtubeLink: "https://www.youtube.com/watch?v=zthA5r5YcAM&list=PLcrApfnvcfVxJV1nxdHke0tgQiO-xkJ2f"
  },
  {
    id: "kim-possible",
    title: "Kim Possible",
    coverImage: "https://m.media-amazon.com/images/M/MV5BMmIwNjQ5MzEtNTg4Zi00NWMyLThkZDktZDg0MGU4MmYzMjlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Disney",
    description: "A high school cheerleader and her accident-prone best friend balance their high school life with their job as international spies.",
    youtubeId: "I43SMbqOMmY",
    youtubeLink: "https://www.youtube.com/watch?v=d_vahxFi-0g&list=PLLhOnau-tupRiU2lBR78wDVYfi2mfC8DT"
  },
  
  {
    id: "the-fairly-oddparents",
    title: "The Fairly OddParents",
    coverImage: "https://m.media-amazon.com/images/M/MV5BY2RlNWMwZmUtMjM4MC00MDczLTk3NjktYTg2OTNiNThhNmNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    studio: "Nickelodeon",
    description: "A 10-year-old boy, Timmy Turner, receives fairy godparents who grant his every wish, but his wishes often backfire.",
    youtubeId: "no8vgXg1i38",
    youtubeLink: "https://www.youtube.com/watch?v=wzLf1bxxSU0&list=PLiHCGKI2GVtoLz25HEfUbbo4o_xyCRBO4"
  }
];
