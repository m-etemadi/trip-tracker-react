import { r as n, u as f, b as p, j as s, a as e, B as h } from './index.js';
import { L as g } from './Logo-35ca2e49.js';
const w = '_login_3s5f6_1',
  v = '_form_3s5f6_13',
  _ = '_row_3s5f6_24',
  t = { login: w, form: v, row: _ };
function N() {
  const [o, c] = n.useState('john@triptracker.com'),
    [r, m] = n.useState('John1234'),
    { login: d, isAuthenticated: i } = f(),
    l = p();
  function u(a) {
    a.preventDefault(), o && r && d(o, r);
  }
  return (
    n.useEffect(
      function () {
        i && l('/app', { replace: !0 });
      },
      [i, l]
    ),
    s('main', {
      className: t.login,
      children: [
        e(g, {}),
        s('form', {
          className: t.form,
          onSubmit: u,
          children: [
            s('div', {
              className: t.row,
              children: [
                e('label', { htmlFor: 'email', children: 'Email address' }),
                e('input', {
                  type: 'email',
                  id: 'email',
                  onChange: a => c(a.target.value),
                  value: o,
                }),
              ],
            }),
            s('div', {
              className: t.row,
              children: [
                e('label', { htmlFor: 'password', children: 'Password' }),
                e('input', {
                  type: 'password',
                  id: 'password',
                  onChange: a => m(a.target.value),
                  value: r,
                }),
              ],
            }),
            e('div', {
              children: e(h, { type: 'primary', children: 'Login' }),
            }),
          ],
        }),
      ],
    })
  );
}
export { N as default };
