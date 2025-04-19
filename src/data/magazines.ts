
export interface Magazine {
  id: string;
  title: string;
  coverImage: string;
  publisher: string;
  description: string;
  readLink: string;
}

export const magazines: Magazine[] = [
  {
    id: "national-geographic",
    title: "National Geographic",
    coverImage: "https://files.magzter.com/resize/magazine/1406877547/1638427732/view/1.jpg",
    publisher: "National Geographic Partners",
    description: "National Geographic is the long-lived official magazine of the National Geographic Society, known for its stunning photography, mapmaking, and exploration coverage.",
    readLink: "https://issuu.com/national-geographic"
  },
  {
    id: "wired",
    title: "WIRED",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/8/86/Wired_US_magazine_November-December_2024_cover.webp",
    publisher: "Condé Nast",
    description: "WIRED is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
    readLink: "https://issuu.com/wired"
  },
  {
    id: "time",
    title: "TIME",
    coverImage: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2056/posts/32588/final_image/19-04-RT-Time-Mag-Cover-final-1.jpg",
    publisher: "Time Inc.",
    description: "TIME is an American weekly news magazine and news website published and based in New York City. It was first published in 1923.",
    readLink: "https://issuu.com/time"
  },
  {
    id: "new-yorker",
    title: "The New Yorker",
    coverImage: "https://media.newyorker.com/photos/675217996c1800ad4b57e386/master/w_1600%2Cc_limit/2024_12_16.jpg",
    publisher: "Condé Nast",
    description: "The New Yorker is an American weekly magazine featuring journalism, commentary, criticism, essays, fiction, satire, cartoons, and poetry.",
    readLink: "https://issuu.com/new-yorker"
  },
  {
    id: "vogue",
    title: "Vogue",
    coverImage: "https://m.media-amazon.com/images/I/714l7h50aHL.jpg",
    publisher: "Condé Nast",
    description: "Vogue is a fashion and lifestyle magazine covering many topics including fashion, beauty, culture, living, and runway. Vogue began as a weekly newspaper in 1892.",
    readLink: "https://issuu.com/vogue"
  },
  {
    id: "scientific-american",
    title: "Scientific American",
    coverImage: "https://static.scientificamerican.com/dam/m/15b983269f37e348/original/sa0125Cvr.jpg?m=1732721416.798",
    publisher: "Springer Nature",
    description: "Scientific American is an American popular science magazine. Many famous scientists, including Albert Einstein, have contributed articles to it.",
    readLink: "https://issuu.com/scientific-american"
  },
  {
    id: "the-economist",
    title: "The Economist",
    coverImage: "https://www.ebooksyard.com/wp-content/uploads/2025/03/The-Economist-USA-March-8-2025.webp",
    publisher: "The Economist Group",
    description: "The Economist is an international weekly newspaper printed in magazine-format and published digitally that focuses on current affairs, international business, politics, and technology.",
    readLink: "https://issuu.com/economist"
  },
  {
    id: "forbes",
    title: "Forbes",
    coverImage: "https://imageio.forbes.com/specials-images/imageserve/5fc56799bcb473118137a062/Forbes-Unveils-10th-Annual-Under-30-Cover/960x0.jpg?format=jpg&width=960",
    publisher: "Forbes Media",
    description: "Forbes is an American business magazine owned by Integrated Whale Media Investments and the Forbes family. Published eight times a year, it features original articles on finance, industry, investing, and marketing topics.",
    readLink: "https://issuu.com/forbes"
  },
  {
    id: "rolling-stone",
    title: "Rolling Stone",
    coverImage: "https://www.yourcelebritymagazines.com/cdn/shop/products/FAemipCXMAUGjbS.jpg?v=1633008207",
    publisher: "Penske Media Corporation",
    description: "Rolling Stone is an American monthly magazine that focuses on popular culture. It was founded in San Francisco in 1967 by Jann Wenner, who is still the magazine's publisher.",
    readLink: "https://www.rollingstone.com/magazine/"
  },
  {
    id: "cosmopolitan",
    title: "Cosmopolitan",
    coverImage: "https://m.media-amazon.com/images/I/71f9cOpKHuL.jpg",
    publisher: "Hearst Communications",
    description: "Cosmopolitan is an international fashion and entertainment magazine for women that was formerly titled The Cosmopolitan. Cosmopolitan magazine is one of the best-selling magazines and is directed mainly towards a female audience.",
    readLink: "https://issuu.com/cosmopolitan"
  },
  {
    id: "national-geographic-traveler",
    title: "National Geographic Traveler",
    coverImage: "https://m.media-amazon.com/images/I/9199TwBBE7L._AC_UF1000,1000_QL80_.jpg",
    publisher: "National Geographic Partners",
    description: "National Geographic Traveler is a magazine published by the National Geographic Society. It was launched in 1984. It contains articles about geography, popular culture, and world history.",
    readLink: "https://issuu.com/natgeo-traveler"
  },
  {
    id: "sports-illustrated",
    title: "Sports Illustrated",
    coverImage: "https://media.gettyimages.com/id/82663102/photo/february-18-2002-sports-illustrated-cover-high-school-basketball-closeup-portrait-of-st-vincent.jpg?s=612x612&w=gi&k=20&c=jIc8NbjtUxnhi9gQy5D8vhu1vBZx81r-WhI7h6vGZSE=",
    publisher: "Authentic Brands Group",
    description: "Sports Illustrated is an American sports magazine owned by Authentic Brands Group, and was first published in August 1954.",
    readLink: "https://issuu.com/sports-illustrated"
  },
  {
    id: "vanity-fair",
    title: "Vanity Fair",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/c/c4/Vanity_Fair_UK_Hollywood_2024-2025_cover.webp",
    publisher: "Condé Nast",
    description: "Vanity Fair is a magazine of popular culture, fashion, and current affairs published by Condé Nast in the United States.",
    readLink: "https://issuu.com/vanity-fair"
  },
  {
    id: "esquire",
    title: "Esquire",
    coverImage: "https://esquire.blob.core.windows.net/esquire20211001thumbnails/Covers/0x600/20211001.jpg",
    publisher: "Hearst Communications",
    description: "Esquire is an American men's magazine, published by the Hearst Corporation in the United States. Founded in 1933, it flourished during the Great Depression under the guidance of founders Arnold Gingrich, David A. Smart and Henry L. Jackson.",
    readLink: "https://issuu.com/esquire"
  },
  {
    id: "the-atlantic",
    title: "The Atlantic",
    coverImage: "https://cdn.theatlantic.com/thumbor/XlAoUWPxLPyjkXWKcnbulWJ-s2M=/0x0:2363x3150/343x457/media/img/issues/2017/09/08/1017_Cover/original.jpg",
    publisher: "Emerson Collective",
    description: "The Atlantic is an American magazine and multi-platform publisher. It was founded in 1857 in Boston, Massachusetts, as The Atlantic Monthly, a literary and cultural commentary magazine that published leading writers' commentary on the abolition of slavery, education, and other major political issues.",
    readLink: "https://issuu.com/the-atlantic"
  },
  {
    id: "harpers-bazaar",
    title: "Harper's Bazaar",
    coverImage: "https://m.media-amazon.com/images/I/91+JrBNLvEL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Hearst Communications",
    description: "Harper's Bazaar is an American monthly women's fashion magazine. It was first published in New York City on November 2, 1867, as the weekly Harper's Bazar.",
    readLink: "https://issuu.com/harpers-bazaar"
  },
  {
    id: "gq",
    title: "GQ",
    coverImage: "https://m.media-amazon.com/images/I/51HhMMkVSaL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Condé Nast",
    description: "GQ is an American international monthly men's magazine based in New York City and founded in 1931. The publication focuses on fashion, style, and culture for men, though articles on food, movies, fitness, sex, music, travel, sports, technology, and books are also featured.",
    readLink: "https://issuu.com/gq"
  },
  {
    id: "elle",
    title: "Elle",
    coverImage: "https://elleboutique.com/wp-content/uploads/2019/03/elle-magazine-13.jpg",
    publisher: "Lagardère Group",
    description: "Elle is a worldwide lifestyle magazine of French origin that focuses on fashion, beauty, health, and entertainment.",
    readLink: "https://issuu.com/elle"
  },
  {
    id: "national-review",
    title: "National Review",
    coverImage: "https://totalmagazines.com/cdn/shop/files/22a38e91-c489-4180-a47e-14e17c6814aa_grande.jpg?v=1735490095",
    publisher: "National Review, Inc.",
    description: "National Review is an American semi-monthly editorial magazine focusing on news and commentary pieces on political, social, and cultural affairs.",
    readLink: "https://issuu.com/national-review"
  },
  {
    id: "the-new-republic",
    title: "The New Republic",
    coverImage: "https://images.newrepublic.com/a2d4a61d3fc08b618603da153a9ec5da0c1af023.png?auto=format&ixlib=react-9.10.0",
    publisher: "Win McCormack",
    description: "The New Republic is an American magazine of commentary on politics, contemporary culture, and the arts, published since 1914.",
    readLink: "https://issuu.com/new-republic"
  },
  {
    id: "the-paris-review",
    title: "The Paris Review",
    coverImage: "https://images.ctfassets.net/nonm77rtn1g8/7m1XdI3NT22Q3FVzcBjNaJ/83c89b13137158cf96dbfd31b15357f5/Ed_Ruscha__Cover_67__1976.jpeg?w=1000&q=70",
    publisher: "The Paris Review Foundation",
    description: "The Paris Review is a quarterly English language literary magazine established in Paris in 1953 by Harold L. Humes, Peter Matthiessen, and George Plimpton.",
    readLink: "https://issuu.com/paris-review"
  },
  {
    id: "entertainment-weekly",
    title: "Entertainment Weekly",
    coverImage: "https://files.magzter.com/resize/magazine/1452683210/1584079441/view/3.jpg",
    publisher: "Meredith Corporation",
    description: "Entertainment Weekly is an American monthly entertainment magazine published by Meredith Corporation that covers film, television, music, Broadway theatre, books, and popular culture.",
    readLink: "https://issuu.com/entertainment-weekly"
  },
  {
    id: "people",
    title: "People",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMzMdq2ZaH8NOKAxlB7U8Y7GOpUb9pv_glQ&s",
    publisher: "Meredith Corporation",
    description: "People is an American weekly magazine of celebrity and human-interest stories, published by Meredith Corporation.",
    readLink: "https://issuu.com/people"
  },
  {
    id: "bloomberg-businessweek",
    title: "Bloomberg Businessweek",
    coverImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4NdGmhdZhAA/v0/715x953.jpg",
    publisher: "Bloomberg L.P.",
    description: "Bloomberg Businessweek, previously known as BusinessWeek, is an American weekly business magazine, published since 1929.",
    readLink: "https://issuu.com/businessweek"
  },
  {
    id: "the-nation",
    title: "The Nation",
    coverImage: "https://img.discountmags.com/https%3A%2F%2Fimg.discountmags.com%2Fproducts%2Fextras%2F121821-the-nation-cover-2017-january-16-issue-jpg%3Fbg%3DFFF%26fit%3Dscale%26h%3D1019%26mark%3DaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2pzcy1hc3NldHMvaW1hZ2VzL2RpZ2l0YWwtZnJhbWUtdjIzLnBuZw%253D%253D%26markpad%3D-40%26pad%3D40%26w%3D775%26s%3Db532a14a48b4ffba3e0fb9b0062dee7c?auto=format%2Ccompress&cs=strip&h=1018&w=774&s=a66d6c9e9cb48c1500fd51fe67db4c6d",
    publisher: "The Nation Company, L.P.",
    description: "The Nation is the oldest continuously published weekly magazine in the United States, covering progressive political and cultural news, opinion, and analysis.",
    readLink: "https://issuu.com/the-nation"
  },
  {
    id: "outdoor-life",
    title: "Outdoor Life",
    coverImage: "https://www.magazinedeals.com/images/products/7489/large/outdoor-life-magazine-1.jpg",
    publisher: "Bonnier Corporation",
    description: "Outdoor Life is an American magazine about the outdoors. The magazine features hunting, fishing, survival, and camping.",
    readLink: "https://issuu.com/outdoor-life"
  },
  {
    id: "fortune",
    title: "Fortune",
    coverImage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fortune-business-magazine-cover-design-template-7a3fa36056191a28a337dcbe922f29ce_screen.jpg?ts=1737148793",
    publisher: "Fortune Media Group Holdings",
    description: "Fortune is an American multinational business magazine headquartered in New York City. It is published by Fortune Media Group Holdings.",
    readLink: "https://issuu.com/fortune"
  },
  {
    id: "mens-health",
    title: "Men's Health",
    coverImage: "https://files.magzter.com/resize/magazine/Men's%20Health%20India/1443605852/view/3.jpg",
    publisher: "Hearst Communications",
    description: "Men's Health is the world's largest men's magazine brand, with 35 editions in 59 countries. It is a source for information relating to health, fitness, food, sex, style, and guy wisdom.",
    readLink: "https://issuu.com/mens-health"
  },
  {
    id: "womens-health",
    title: "Women's Health",
    coverImage: "https://d3ry4o1su9a59w.cloudfront.net/public/615443201504e8001496d830/5e78df66d9e8407437287b49/63f5a502b367b4001b9c374c/1/432-0001.jpg",
    publisher: "Hearst Communications",
    description: "Women's Health is a magazine focusing on health, nutrition, fitness, sex, and lifestyle. It is published by Hearst.",
    readLink: "https://issuu.com/womens-health"
  },
  {
    id: "the-new-yorker-fiction",
    title: "The New Yorker Fiction",
    coverImage: "https://media.newyorker.com/photos/62f58825c718d1a461593ad6/master/w_2560%2Cc_limit/CoverStory-STORY_rifkin_reading.jpg",
    publisher: "Condé Nast",
    description: "The New Yorker Fiction is a publication of The New Yorker magazine that focuses specifically on short stories and fiction pieces.",
    readLink: "https://issuu.com/new-yorker-fiction"
  },
  {
    id: "architectural-digest",
    title: "Architectural Digest",
    coverImage: "https://indiamags.com//uploads/products/large/170ef048f436e1e069210793a8d60c9e.jpg",
    publisher: "Condé Nast",
    description: "Architectural Digest is an American monthly magazine founded in 1920. Its principal subject is interior design, rather than architecture more generally.",
    readLink: "https://issuu.com/architectural-digest"
  },
  {
    id: "nature",
    title: "Nature",
    coverImage: "https://media.springernature.com/w440/springer-static/cover-hires/journal/41586/569/7756",
    publisher: "Springer Nature",
    description: "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.",
    readLink: "https://issuu.com/nature"
  },
  {
    id: "science",
    title: "Science",
    coverImage: "https://images-cdn.dashdigital.com/sciencemagazine/02_october_2020/data/imgpages/mobile3/0001_womtcn.jpg?lm=1601667960000",
    publisher: "American Association for the Advancement of Science",
    description: "Science is the academic journal of the American Association for the Advancement of Science and is one of the world's top academic journals.",
    readLink: "https://issuu.com/science"
  },
  {
    id: "cell",
    title: "Cell",
    coverImage: "https://www.cell.com/cms/asset/atypon:cms:attachment:img:d212e6:rev:1728441512375-12401:pii:S0092867423X00208/cover.tif.jpg",
    publisher: "Cell Press",
    description: "Cell is a peer-reviewed scientific journal publishing research papers across a broad range of disciplines within the life sciences, especially molecular biology, cell biology, systems biology, and neuroscience.",
    readLink: "https://issuu.com/cellpress"
  },
  {
    id: "lancet",
    title: "The Lancet",
    coverImage: "https://www.thelancet.com/cms/asset/atypon:cms:attachment:img:d82e6:rev:1678121635730-3099:pii:S2468266722X0011X/cover.tif.jpg",
    publisher: "Elsevier",
    description: "The Lancet is one of the oldest peer-reviewed medical journals. It publishes medical news, original research articles, and reviews on all aspects of clinical medicine and public health.",
    readLink: "https://issuu.com/thelancet"
  },
  {
    id: "nejm",
    title: "The New England Journal of Medicine",
    coverImage: "https://m.media-amazon.com/images/I/81JCnd51gQL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Massachusetts Medical Society",
    description: "NEJM is a premier peer-reviewed medical journal that publishes new medical research findings, review articles, and editorial opinion on a wide variety of topics of importance to biomedical science and clinical practice.",
    readLink: "https://issuu.com/nejm"
  }
];
