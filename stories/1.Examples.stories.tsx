import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SettingFilled } from '../src';
import { IconProps } from '../src/interface';

export default {
  title: 'Examples',
  component: SettingFilled,
} as Meta;

const Template: Story<IconProps> = (args) => <SettingFilled {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Callback = Template.bind({});
Callback.args = {
  onClick: action('icon is clicked'),
};
