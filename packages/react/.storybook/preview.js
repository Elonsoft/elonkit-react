import React from 'react';

import { Controls, Description, DocsContainer, Primary, Stories, Subtitle, Title } from '@storybook/blocks';

import { ReferencesList } from './components/ReferencesList';
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
    },
    exclude: /^(classes|className|component|ref|sx|(on|icon|label)[A-Z].*)$/
  },
  darkMode: {
    light: themeLight,
    dark: themeDark
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        ['Installation', 'Usage', 'Theming', 'Localization', 'Icons', 'Scrollbars'],
        'Discover More',
        'Components',
        'Hooks',
        'Overrides',
        'Components API',
        'Hooks API'
      ]
    }
  },
  docs: {
    container: function Container(props) {
      const isDarkMode = useDarkMode();
      const currentProps = { ...props };
      currentProps.theme = isDarkMode ? themeDark : themeLight;

      return (
        <div className={`docs-container ${isDarkMode ? 'docs-container__dark' : ''}`}>
          <DocsContainer {...currentProps} />
        </div>
      );
    },
    page: () => {
      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
          <ReferencesList />
        </>
      );
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

export const argTypes = {
  // exclude: ['classes', 'className', 'sx']
  // classes: {
  //   table: {
  //     disable: true
  //   }
  // },
  // className: {
  //   table: {
  //     disable: true
  //   }
  // },
  // sx: {
  //   table: {
  //     disable: true
  //   }
  // }
};

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
