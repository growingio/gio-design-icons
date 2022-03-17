import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import CopyToClipboard from 'react-copy-to-clipboard';
import { all as allIcons, categories } from './fields';
import './icons.css';
export default {
  title: 'Icons',
  component: IconList,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/kP3A6S2fLUGVVMBgDuUx0f/GIO-Design?node-id=7670%3A84757',
      allowFullscreen: true,
    },
  },
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
          <span title={title} className="icon-item-title">{title}</span>
        </div>
      </div>
    </CopyToClipboard>
  );
}
function Category({ icons = [], title, ...iconProps }: CategoryProps) {
  const items = icons.map(name => <Item key={name} title={name} icon={React.createElement(allIcons[name], { ...iconProps })}></Item>);
  return items?.length > 0 && (
    <div>
      <h3 className='icons-category-title'>{title}<small>({items?.length})</small></h3>
      <div className="icons-list">{items}</div>
    </div>)
}
function filterIcons(iconKeys: string[], kw: string) {
  console.log(kw, iconKeys);
  if (kw?.trim()) {
    return iconKeys.filter((k: string) => k.toLowerCase().includes(kw?.trim()));
  }
  return iconKeys;
}



interface IconListProps {
  // type?: 'outlined' | 'filled' | 'twotone';
  keyword?: string,
  /**
     * 是否有旋转动画
     */
  rotating?: boolean;
  /**
   * 图标颜色
   */
  color?: string;
}

function IconList({ keyword, ...iconProps }: IconListProps) {

  const children = Object.keys(categories).map(key => {
    const icons = filterIcons(categories[key], keyword)
    return <Category key={key} icons={icons} title={key} {...iconProps}></Category>

  })
  return (
    <div className="icons">
      {children}
    </div>
  );
};

const Template: Story<IconListProps> = (args) => <IconList {...args} />;

export const AllIcons = Template.bind({});
AllIcons.args = {
  keyword: '',
  color: '',
  rotating: false,
};

