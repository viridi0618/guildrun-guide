const normalize = (value: string) => value.replace(/\/+$/, "");

export const siteConfig = {
  siteName: "Guildrun Guide",
  shortName: "GR Guide",
  gameName: "Guildrun",
  description: "Practical, source-aware Guildrun guides, mechanics, builds, and answers for the Steam demo.",
  url: normalize(process.env.NEXT_PUBLIC_SITE_URL || "https://guildrunguide.wiki"),
  officialGameUrl: "https://store.steampowered.com/app/3669200/Guildrun/",
};

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteConfig.url}${normalized}`;
}
