export const theme = {
  color: '#333',
  background: '#eee',
  colors: {
    mint: '#08ffc8',
    white: '#fff7f7',
    navy: '#204969',
    gray: '#dadada',
  },
}
type theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends theme {}
}
