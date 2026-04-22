import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Papers',
      href: getPermalink('/#publications'),
    },
    {
      text: 'Talks',
      href: getPermalink('/#talks'),
    },
    {
      text: 'Teaching',
      href: getPermalink('/#teaching'),
    },
    {
      text: 'Personal',
      href: getPermalink('/personal'),
    },
  ],
  actions: [{ text: 'Email me', href: 'mailto:rnema@cs.stanford.edu', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Papers', href: getPermalink('/#publications') },
    { text: 'Talks', href: getPermalink('/#talks') },
    { text: 'Teaching', href: getPermalink('/#teaching') },
    { text: 'Personal', href: getPermalink('/Personal') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/entrohpy' },
  ],
  footNote: `
    Made by <a class="text-primary underline" href="https://github.com/entrohpy">Rohit Nema</a> using <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a>· All rights reserved.
  `,
};
