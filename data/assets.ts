export type PortfolioAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const dimensions = {
  width: 1672,
  height: 941
};

export const assets = {
  heroPortrait: {
    src: "/Primary Hero Portrait.png",
    alt: "Portrait of Gurtej seated on an orange bench at night in a cinematic park setting.",
    ...dimensions
  },
  closeupPortrait: {
    src: "/Close-Up Face Portrait.png",
    alt: "Close-up cinematic portrait of Gurtej wearing a red turban.",
    ...dimensions
  },
  workingShot: {
    src: "/work shot.png",
    alt: "Gurtej working in a focused low-light setup.",
    ...dimensions
  },
  silhouetteShot: {
    src: "/back shot.png",
    alt: "Silhouette back shot of Gurtej in a cinematic night setting.",
    ...dimensions
  },
  motionShot: {
    src: "/motion.png",
    alt: "Motion portrait of Gurtej walking with cinematic blur.",
    ...dimensions
  },
  detailShot: {
    src: "/detail shot.png",
    alt: "Detail portrait emphasizing the red turban and cinematic texture.",
    ...dimensions
  },
  fullBodyEditorial: {
    src: "/Full Body Editorial Shot.png",
    alt: "Full-body editorial portrait of Gurtej.",
    ...dimensions
  },
  contactPortraitBackground: {
    src: "/contact portrait background.png",
    alt: "Cinematic contact portrait background of Gurtej.",
    ...dimensions
  },
  signature: {
    src: "/g_singh_signature_white_bold_transparent.png",
    alt: "Gurtejbir Singh signature mark.",
    width: 1955,
    height: 1187
  },
  swsLuxuryProject: {
    src: "/sws-luxury-21x10.png",
    alt: "SWS Luxury commerce website project preview.",
    width: 1890,
    height: 900
  },
  ghostEngineerProject: {
    src: "/ghost-engineer-21x10.png",
    alt: "Ghost Engineer product website project preview.",
    width: 1890,
    height: 900
  },
  obsidianProject: {
    src: "/obsidian-21x10.png",
    alt: "Obsidian Finish Studio automotive detailing website project preview.",
    width: 1890,
    height: 900
  },
  ironForgeProject: {
    src: "/iron-forge-21x10.png",
    alt: "Iron Forge Athletics gym website project preview.",
    width: 1890,
    height: 900
  }
} satisfies Record<string, PortfolioAsset>;
