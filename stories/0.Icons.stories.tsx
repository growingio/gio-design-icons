import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as GIOIcons from '../src';
import { all, all as allIcons, categories } from './fields';
import './icons.less';
export default {
  title: 'Icons',

} as Meta;

interface ItemProps {
  title: string;
  icon: React.ReactElement;
}
interface CategoryProps {
  icons: string[],
  title: string
}
// const allIcons: {
//   [key: string]: any;
// } = GIOIcons;
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
function Category({ icons = [], title }: CategoryProps) {
  console.log(icons);
  const items = icons.map(name => allIcons[name] ? <Item key={name} title={name} icon={React.createElement(allIcons[name])}></Item> : '');
  return (
    <div>
      <h3>{title}</h3>
      <ul className="icons-category">{items}</ul>
    </div>)
}
// function filterIcons(iconKeys: string[], type: string) {
//   return iconKeys.filter((k: string) => k.toLowerCase().endsWith(type));
// }



interface IconListProps {
  category?: 'outlined' | 'filled';
}

function IconList({ category = 'outlined' }: IconListProps) {
  const children = Object.keys(categories).map(key => {
    return <Category key={key} icons={categories[key]} title={key}></Category>

  })
  return (
    <div className="icons">
      {children}
    </div>
  );
};

const Template: Story<IconListProps> = (args) => <IconList {...args} />;

export const AllIcons = Template.bind({});
AllIcons.args = {};

export const Filled = Template.bind({});
Filled.args = {
  category: 'filled',
};
