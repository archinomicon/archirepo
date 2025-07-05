// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import d2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
  site: 'https://archinomicon.github.io',
  base: 'ea-repo',
  integrations: [
    d2(),
    // d2({ output: 'd2' }),
    starlight({
      title: 'Enterprise Architecture',
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://archinomicon.github.io',
        },
      ],
      sidebar: [
        {
          label: 'Featured',
          items: [
            {
              label: 'Introduction',
              slug: 'featured/introduction',
            },
            {
              label: 'Library',
              slug: 'featured/library',
            },
          ],
        },
        {
          label: 'Open Tasks',
          autogenerate: { directory: 'tasks' },
        },
        {
          label: 'Architecture Board',
          autogenerate: { directory: 'board' },
        },
        {
          label: 'Artifacts',
          autogenerate: { directory: 'artifacts' },
        },
        {
          label: 'Decision Records',
          autogenerate: { directory: 'records' },
        },
      ],
    }),
  ],
});
