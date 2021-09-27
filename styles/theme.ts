export const theme = {
  color: '#333',
  background: '#E5E5E5',
  colors: {
    red: '#FF3300',
    blue: '#0000FF',
    yellow: '#FFFF00',
  },
}
type theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends theme {}
}
