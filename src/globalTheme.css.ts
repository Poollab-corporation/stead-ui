/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
  lineHeight: '1.15' /* 1 */,
})

globalStyle('body', {
  margin: 0,
})

globalStyle('main', {
  display: 'block',
})

globalStyle('h1', {
  fontSize: '2em',
  margin: '0.67em 0',
})
globalStyle('hr', {
  boxSizing: 'content-box',
  height: 0,
  overflow: 'visible',
})

globalStyle('pre', {
  fontFamily: 'monospace, monospace' /* 1 */,
  fontSize: '1em' /* 2 */,
})

globalStyle('a', {
  backgroundColor: 'transparent',
})

globalStyle('abbr[title]', {
  borderBottom: 'none' /* 1 */,
  textDecoration: 'underline' /* 2 */,
})

globalStyle('b, strong', {
  fontWeight: 'bolder',
})

globalStyle('code, kbd, samp', {
  fontFamily: 'monospace, monospace' /* 1 */,
  fontSize: '1em' /* 2 */,
})

globalStyle('small', {
  fontSize: '80%',
})

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
})

globalStyle('sub', {
  bottom: '-0.25em',
})

globalStyle('sup', {
  top: '-0.5em',
})

globalStyle('img', {
  borderStyle: 'none',
})

globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit' /* 1 */,
  fontSize: '100%' /* 1 */,
  lineHeight: 1.15 /* 1 */,
  margin: 0 /* 2 */,
})

globalStyle('button, input', {
  overflow: 'visible',
})

globalStyle('button, select', {
  textTransform: 'none',
})

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
})

globalStyle('button::-moz-focus-inner', {
  borderStyle: 'none',
  padding: 0,
})
