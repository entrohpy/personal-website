import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Papers',
      href: getPermalink('/#papers'),
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
      text: 'Misc.',
      href: getPermalink('/misc'),
    },
  ],
  actions: [{ text: 'Email me', href: 'mailto:rnema@cs.stanford.edu', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'About', href: getPermalink('/terms') },
    { text: 'Papers', href: getPermalink('/privacy') },
    { text: 'Talks', href: getPermalink('/privacy') },
    { text: 'Contact', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/entrohpy' },
  ],
  footNote: `
    Made by <a class="text-primary underline" href="https://github.com/entrohpy">Rohit Nema</a> using <a class="text-primary underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a>· All rights reserved.
  `,
};
