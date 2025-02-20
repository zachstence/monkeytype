const badges: Record<number, MonkeyTypes.UserBadge> = {
  1: {
    id: 1,
    name: "Developer",
    description: "I made this",
    icon: "fa-rocket",
    color: "white",
    customStyle: "animation: rgb-bg 10s linear infinite;",
  },
  2: {
    id: 2,
    name: "Collaborator",
    description: "I helped make this",
    icon: "fa-code",
    color: "white",
    customStyle: "animation: rgb-bg 10s linear infinite;",
  },
  3: {
    id: 3,
    name: "Server Mod",
    description: "Discord server moderator",
    icon: "fa-hammer",
    color: "white",
    customStyle: "animation: rgb-bg 10s linear infinite;",
  },
  4: {
    id: 4,
    name: "OG Account",
    description: "First 100 users on the site",
    icon: "fa-baby",
    color: "var(--bg-color)",
    background: "var(--main-color)",
  },
  5: {
    id: 5,
    name: "OG Discordian",
    description: "First 100 Discord server members",
    icon: "fa-baby",
    color: "var(--bg-color)",
    background: "var(--main-color)",
  },
  6: {
    id: 6,
    name: "Supporter",
    description: "Donated money",
    icon: "fa-heart",
    color: "var(--bg-color)",
    background: "var(--sub-color)",
  },
  7: {
    id: 7,
    name: "Sugar Daddy",
    description: "Donated a lot of money",
    icon: "fa-gem",
    color: "var(--bg-color)",
    background: "var(--main-color)",
  },
};

export function getHTMLById(id: number): string {
  const badge = badges[id];
  if (!badge) {
    return "";
  }
  let style = "";
  if (badge.background) {
    style += `background: ${badge.background};`;
  }
  if (badge.color) {
    style += `color: ${badge.color};`;
  }
  if (badge.customStyle) {
    style += badge.customStyle;
  }
  return `<div class="badge" aria-label="${
    badge.description
  }" data-balloon-pos="right" style="${style}">${
    badge.icon ? `<i class="fas ${badge.icon}"></i>` : ""
  }<div class="text">${badge.name}</div></div>`;
}
