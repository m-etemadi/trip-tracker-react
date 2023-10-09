import { j as r, a as e, L as a } from './index.js';
import { L as o } from './Logo-35ca2e49.js';
const s = '_homepage_12zua_1',
  t = { homepage: s };
function c() {
  return r('main', {
    className: t.homepage,
    children: [
      e(o, {}),
      r('section', {
        children: [
          r('h2', {
            children: [
              'You travel the world.',
              e('br', {}),
              'Trip Tracker keeps track of your adventures.',
            ],
          }),
          e('h3', {
            children:
              'An interactive world map that traces your footsteps across every city, ensuring your cherished memories are never lost, and allowing you to share your global wanderings with friends.',
          }),
          e(a, {
            to: '/login',
            className: 'cta',
            children: 'Start tracking now',
          }),
        ],
      }),
    ],
  });
}
export { c as default };
