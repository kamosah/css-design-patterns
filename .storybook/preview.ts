import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/app.css'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded',
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        Dark: '',
        Light: 'light',
      },
      defaultTheme: 'Light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
