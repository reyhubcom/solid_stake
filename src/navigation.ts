import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/staking/btc'),
        },
        {
          text: 'Stake [ ETH ]',
          href: getPermalink('/staking/eth'),
        },
        {
          text: 'Stake [ MON ]',
          href: getPermalink('/staking/mon'),
        },
        {
          text: 'Stake [ SOL ]',
          href: getPermalink('/staking/sol'),
        },
        {
          text: 'All Blockchains',
          href: getPermalink('/all/chains'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Stocks',
          href: getPermalink('/stocks/markets'),
        },
        {
          text: 'Liquid',
          href: getPermalink('/liquid/token'),
        },
        
      ],
    },
    {
      text: 'Lending',
      links: [
        {
          text: 'Ethereum',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'BNB Chain',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Gnosis Chain',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Polygon',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Fantom',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'All Lending',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Exchange',
      href: '/home/exchange',
    },
  ],
  actions: [{ text: 'MEME', href: '/home/exchange', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Rey</a> · 2026 SolidStake.xyz All Rights Reserved.
  `,
};
