import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: 'iphonex',
  },
};
