import {
  money,
  iso,
  encrypt,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "signin",
    title: "SignIn",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: send,
    title: "Instant",
    content:
      "Share money to India in real time and control how much to share using our user-friendly app.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "0% fee",
    content:
      "There is absolutely 0% transaction fee. Share Money to India at Live Google Rates.",
  },
  {
    id: "feature-3",
    icon: star,
    title: "Build Credit Score",
    content:
      "Get the oppurtunity to increase credit score while sharing money to India and claim exciting rewards.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "256-bit encrypted",
    icon: encrypt,
  },
  {
    id: "stats-2",
    title: "Secure Money Handling.",
    icon: money,
  },
  {
    id: "stats-3",
    title: "ISO/IEC 27001:2013",
    icon: iso,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.coinfusion.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.coinfusion.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.coinfusion.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.coinfusion.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.coinfusion.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.coinfusion.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.coinfusion.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.coinfusion.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.coinfusion.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.coinfusion.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.coinfusion.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.coinfusion.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
