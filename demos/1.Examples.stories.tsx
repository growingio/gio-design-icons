import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { GearOutlined } from '../src';
import { IconProps } from '../src/interfaces';
import '../src/Wrapper.css';

export default {
  title: 'Examples',
  component: GearOutlined,
} as Meta;

const Template: Story<IconProps> = (args) =>
  <GearOutlined {...args} />

export const Default = Template.bind({});
Default.args = {
  size: '50px',
  color: '#242e59'
};

export const Callback = Template.bind({});
Callback.args = {
  onClick: action('icon is clicked'),
};
