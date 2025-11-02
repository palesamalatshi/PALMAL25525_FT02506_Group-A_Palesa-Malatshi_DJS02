// ----- data.js -----
// All arrays are defined as global vars for compatibility with the non-module app

var genres = [
  { id: 1, name: "Wellness" },
  { id: 2, name: "True Crime" },
  { id: 3, name: "History" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Culture" },
  { id: 6, name: "Business" },
];

var podcasts = [
  {
    id: "10716",
    title: "Something Was Wrong",
    description:
      "An Iris Award-winning true-crime docuseries about discovery, trauma, and recovery from shocking life events and abusive relationships.",
    seasons: 14,
    image:
      "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    genres: [1, 2],
    updated: "2022-11-03T07:00:00.000Z",
  },
  {
    id: "5675",
    title: "This Is Actually Happening",
    description:
      "What if your mother left to follow a cult, or you woke up in a morgue? Extraordinary true stories told by survivors.",
    seasons: 12,
    image:
      "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png",
    genres: [2],
    updated: "2022-11-01T10:00:00.000Z",
  },
  {
    id: "5279",
    title: "American History Tellers",
    description:
      "The Cold War, Prohibition, the Gold Rush, the Space Race — stories that shaped society.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  },
  // ----- New podcasts added -----
  {
    id: "11001",
    title: "Mindful Minutes",
    description:
      "Quick mindfulness exercises and meditations to help you start your day calm, confident, and grounded.",
    seasons: 5,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    genres: [1],
    updated: "2023-01-10T08:00:00.000Z",
  },
  {
    id: "11002",
    title: "The Investigators",
    description:
      "Dive into unsolved mysteries and the stories behind real investigative journalism.",
    seasons: 8,
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    genres: [2],
    updated: "2023-02-14T09:00:00.000Z",
  },
  {
    id: "11003",
    title: "History Untold",
    description:
      "Lesser-known stories from around the world — uncovering the hidden and forgotten past.",
    seasons: 6,
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    genres: [3],
    updated: "2023-03-05T07:30:00.000Z",
  },
  {
    id: "11004",
    title: "Laugh Factory",
    description:
      "Comedy that heals — stand-up clips and fun interviews with comedians from around the globe.",
    seasons: 4,
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
    genres: [4],
    updated: "2023-03-20T12:00:00.000Z",
  },
  {
    id: "11005",
    title: "Pop Culture Pulse",
    description:
      "Weekly entertainment news, celebrity updates, and cultural conversations with flair.",
    seasons: 7,
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493",
    genres: [5],
    updated: "2023-04-01T10:15:00.000Z",
  },
  {
    id: "11006",
    title: "Startup Stories",
    description:
      "Empowering entrepreneurship — authentic stories, failures, and hacks from fearless founders.",
    seasons: 3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    genres: [6],
    updated: "2023-04-12T11:30:00.000Z",
  },
  {
    id: "11007",
    title: "Wellness Weekly",
    description:
      "Interviews, fitness, and real talk for a healthier mind and body — because balance is beautiful.",
    seasons: 5,
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    genres: [1],
    updated: "2023-05-01T09:00:00.000Z",
  },
  {
    id: "11008",
    title: "Cultural Conversations",
    description:
      "Art, culture, and society meet through inspiring voices and feminine perspectives.",
    seasons: 4,
    image: "https://images.unsplash.com/photo-1532619187606-102acde7b847",
    genres: [5],
    updated: "2023-05-20T12:00:00.000Z",
  }
];

var seasons = [
  { podcastId: "10716", season: 14 },
  { podcastId: "5675", season: 12 },
  { podcastId: "5279", season: 51 },
  { podcastId: "11001", season: 5 },
  { podcastId: "11002", season: 8 },
  { podcastId: "11003", season: 6 },
  { podcastId: "11004", season: 4 },
  { podcastId: "11005", season: 7 },
  { podcastId: "11006", season: 3 },
  { podcastId: "11007", season: 5 },
  { podcastId: "11008", season: 4 },
];
