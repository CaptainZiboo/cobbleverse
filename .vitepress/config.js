export default {
  lang: "fr-FR",
  title: "CobbleVerse Wiki",
  description: "Wiki officiel du serveur minecraft CobbleVerse.",
  head: [["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }]],
  themeConfig: {
    lastUpdated: true,

    search: {
      provider: "local",
    },

    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: "discord", link: "https://discord.gg/AuSbtGFWnk" },
    ],

    sidebar: [
      {
        text: "CobbleVerse",
        collapsed: false,
        items: [
          {
            text: "Whitelist",
            link: "/whitelist",
          },
          { text: "Règlement", link: "/rules" },
          { text: "Installation", link: "/install" },
          { text: "Mises à jour", link: "/updates" },

          { text: "Bien débuter", link: "/beginner-guide" },
          { text: "Bugs connus", link: "/bugs" },
          { text: "FAQ", link: "/faq" },
        ],
      },
      {
        text: "Guides avancés",
        collapsed: true,
        items: [
          { text: "Cobbledex", link: "/cobbledex" },
          { text: "Combats / Duels", link: "/versus" },
          { text: "Stockage & Sacs", link: "/storage" },
          { text: "Shiny & Lunes", link: "/shiny" },
          { text: "Machines", link: "/machines" },
          { text: "Arènes", link: "/arenas" },
        ],
      },
      {
        text: "Cobblemon",
        collapsed: false,
        items: [
          { text: "Cobblemon", link: "https://wiki.cobblemon.com/" },
          {
            text: "Légendaires",
            link: "https://docs.google.com/document/d/1sghbYC-LRR1vn7ESI3V7WYG8WkLm_Ycw-r3ny9XhFLA/edit?tab=t.0",
          },
        ],
      },
    ],
  },
};
