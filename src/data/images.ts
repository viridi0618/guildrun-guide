export type GuideImage = {
  src: string;
  alt: string;
  sourceUrl: string;
  credit: "Leyline / Guildrun official media";
  width: number;
  height: number;
  objectPosition: string;
};

export const homeImage = {
  src: "/images/guildrun/home-hero.webp",
  alt: "Three Guildrun heroes charging through a glowing forest portal",
  sourceUrl: "https://static.wixstatic.com/media/029bb4_623a4e7f616d450d9b70f587ceb94214~mv2.png/v1/fill/w_980%2Ch_437%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/guildrunbackdrop.png",
  credit: "Leyline / Guildrun official media",
  width: 980,
  height: 437,
  objectPosition: "50% 50%",
} as const satisfies GuideImage;

export const guideImages = {
  "beginner-guide": {
    src: "/images/guildrun/beginner-guide.webp",
    alt: "Guildrun trial screen offering shard, item, and relic rewards to a party",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_de9c33dba6034927939f5854939a8576~mv2.png",
    credit: "Leyline / Guildrun official media",
    width: 1920,
    height: 1080,
    objectPosition: "50% 50%",
  },
  "reserve-heroes": {
    src: "/images/guildrun/reserve-heroes.webp",
    alt: "Four Guildrun heroes posed together on a transparent background",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_d75cd7b0c3ad4fb29913acc6a81c91e7~mv2.png/v1/fill/w_980%2Ch_971%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/SomeHeroes.png",
    credit: "Leyline / Guildrun official media",
    width: 980,
    height: 971,
    objectPosition: "50% 35%",
  },
  "shop-guide": {
    src: "/images/guildrun/shop-guide.webp",
    alt: "Guildrun shop screen with items, three heroes, reroll, freeze, and sell controls",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_e6ab1fb0011a4fdeaeb85eafac180040~mv2.png",
    credit: "Leyline / Guildrun official media",
    width: 1920,
    height: 1080,
    objectPosition: "50% 50%",
  },
  "release-date": {
    src: "/images/guildrun/release-date.webp",
    alt: "Guildrun key art with three heroes and the game logo",
    sourceUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3669200/ba1be5e06b4213bdc210aafb0fa151acf9947d34/header_2x.jpg",
    credit: "Leyline / Guildrun official media",
    width: 920,
    height: 430,
    objectPosition: "50% 50%",
  },
  "difficulty-endless": {
    src: "/images/guildrun/difficulty-endless.webp",
    alt: "A Guildrun party fighting a large crystal dragon in an intense arena battle",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_9c373838e14c42158ac9a4cf43e7430b~mv2.png/v1/fill/w_1450%2Ch_816%2Cq_90%2Cenc_avif%2Cquality_auto/029bb4_9c373838e14c42158ac9a4cf43e7430b~mv2.png",
    credit: "Leyline / Guildrun official media",
    width: 1450,
    height: 816,
    objectPosition: "50% 50%",
  },
  "rush-mechanic": {
    src: "/images/guildrun/rush-mechanic.webp",
    alt: "A Guildrun party pushing through a crowded fight against multiple enemies",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_ea881d87ce744cc8a3161ecb48a85e29~mv2.png",
    credit: "Leyline / Guildrun official media",
    width: 1920,
    height: 1080,
    objectPosition: "50% 50%",
  },
  "beginner-mistakes": {
    src: "/images/guildrun/beginner-mistakes.webp",
    alt: "Guildrun hero upgrade screen presenting three passive ability choices",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_378f169b7e3a4f1abc2d843d993a9be9~mv2.png",
    credit: "Leyline / Guildrun official media",
    width: 1920,
    height: 1080,
    objectPosition: "50% 50%",
  },
  builds: {
    src: "/images/guildrun/builds.webp",
    alt: "Teal Guildrun hero display backdrop with layered light streaks",
    sourceUrl: "https://static.wixstatic.com/media/029bb4_8b7ae2afd2304cd0b55923db5fae2ffa~mv2.png/v1/fill/w_980%2Ch_477%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/heroesbackdrop.png",
    credit: "Leyline / Guildrun official media",
    width: 980,
    height: 477,
    objectPosition: "50% 50%",
  },
  "tier-list": {
    src: "/images/guildrun/tier-list.webp",
    alt: "Three Guildrun hero cards displayed together in the official launch trailer",
    sourceUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/257359590/9faa7bf1a8e968c24669c679c37e173999baa970/movie_full.jpg",
    credit: "Leyline / Guildrun official media",
    width: 1920,
    height: 1080,
    objectPosition: "50% 42%",
  },
} as const satisfies Record<string, GuideImage>;

export function getGuideImage(slug: string): GuideImage | undefined {
  return guideImages[slug as keyof typeof guideImages];
}
