import { withDesign } from 'storybook-addon-designs';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [withDesign];
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'zh-CN',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en-US', right: '🇺🇸', title: 'English' },
        { value: 'zh-CN', right: '🇨🇳', title: '简体中文' },
      ],
    },
  },
};

