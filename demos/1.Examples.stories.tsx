import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Gear } from '../src';
import { IconProps } from '../src/interfaces';

export default {
  title: 'Examples',
  component: Gear,
  // decorators: [(Story, context) => <div style={{
  //   display: 'inline-block', padding: '20px',
  // }}>{Story()}</div>]
} as Meta;

const Template: Story<IconProps> = (args) =>
  <Gear {...args} />

export const Default = Template.bind({});
Default.args = {
  size: '50px',
  color: '#242e59'
};

export const Callback = Template.bind({});
Callback.args = {
  onClick: action('icon is clicked'),
};
