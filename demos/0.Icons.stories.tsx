import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as GIOIcons from '../src';

import './icons.less';

export default {
  title: 'Icons',
} as Meta;

interface ItemProps {
  title: string;
  icon: React.ReactElement;
}

function Item({ title, icon }: ItemProps) {
  return (
    <CopyToClipboard
      text={`<${title} />`}
      onCopy={action(`Copied <${title} /> to clipboard.`)}
    >
      <div className="icon-item-container">
        <div className="icon-item-inner-container">
          {icon}
          <span className="icon-item-title">{title}</span>
        </div>
      </div>
    </CopyToClipboard>
  );
}

function filterIcons(iconKeys: string[], type: string) {
  return iconKeys.filter((k: string) => k.toLowerCase().endsWith(type));
}

const allIcons: {
  [key: string]: any;
} = GIOIcons;

interface IconListProps {
  category?: 'outlined' | 'filled';
}

function IconList({ category = 'outlined' }: IconListProps) {
  const iconKeys = filterIcons(Object.keys(allIcons), category);
  return (
    <div className="icons-category">
      {iconKeys.map((key: string) => (
        <Item key={key} title={key} icon={React.createElement(allIcons[key], { size: '24px' })} />
      ))}
    </div>
  );
};

const Template: Story<IconListProps> = (args) => <IconList {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {};

export const Filled = Template.bind({});
Filled.args = {
  category: 'filled',
};
