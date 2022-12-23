import { DocsContainer } from './components/DocsContainer';
import { themeDark, themeLight } from './themes';

import { Theme } from '../src/testing';

import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    light: themeLight,
    dark: themeDark
  },
  docs: {
    container: DocsContainer
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Discover More',
        ['Installation', 'Usage', 'Theming', 'Localization', 'Icons', 'Scrollbars'],
        'Components',
        'Hooks',
        'Overrides',
        'Components API',
        'Hooks API'
      ]
    }
  }
};

export const decorators = [
  (Story, context) => {
    const locale = context.globals.locale;
    const isDarkMode = useDarkMode();

    return (
      <Theme isDarkMode={isDarkMode} locale={locale}>
        <Story />
      </Theme>
    );
  }
];

const isRussian = window.navigator.language === 'ru-RU';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Set the locale of the components',
    defaultValue: isRussian ? 'ru' : 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' }
      ]
    }
  }
};
