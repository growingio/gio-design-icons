import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as allIcons from '../src';
import { categories } from './fields';
import './icons.css';
import '../src/Wrapper.css'
import { SearchOutlined } from '../src';
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
  title: string,
  theme?: string,
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
function Category({ icons = [], title, theme, ...iconProps }: CategoryProps) {
  const themeIcons = theme ? icons.filter(i => i.endsWith(theme)) : icons;
  const items = themeIcons.map(name => allIcons[name] && <Item key={name} title={name} icon={React.createElement(allIcons[name], { ...iconProps })}></Item>).filter(Boolean);
  return items?.length > 0 && (
    <div>
      <h3 className='icons-category-title'>{title}<small>({items?.length})</small></h3>
      <div className="icons-list">{items}</div>
    </div>)
}
function filterIcons(iconKeys: string[], kw: string) {
  if (kw?.trim()) {
    return iconKeys.filter((k: string) => k.toLowerCase().replace(/(outlined|filled|twotone)$/i, '').includes(kw?.trim()));
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
  const [searchKey, setSearchKey] = React.useState(keyword)
  const children = React.useMemo(() => {
    return Object.keys(categories).map(key => {
      const icons = filterIcons(categories[key], searchKey)
      return <Category key={key} icons={icons} title={key} {...iconProps}></Category>

    })
  }, [searchKey, iconProps])
  return (
    <div>
      <div className='search-bar'>
        <input type='text' placeholder='输入icon名称搜索' onChange={(e) => setSearchKey(e.target.value)} />
        <div className='suffix'>
          <SearchOutlined />
        </div>
      </div>
      <div className='divider'></div>
      <div className="icons">
        {children}
      </div>
    </div>
  );
};

const Template: Story<IconListProps> = (args) => <IconList {...args} />;

export const AllIcons = Template.bind({});
AllIcons.args = {
  color: '',
  rotating: false,
  size: '16px'
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: '',
  rotating: false,
  theme: 'Outlined'
};

export const Filled = Template.bind({});
Filled.args = {
  color: '',
  rotating: false,
  theme: 'Filled'
};

export const TwoTone = Template.bind({});
TwoTone.args = {
  color: '',
  rotating: false,
  theme: 'TwoTone'
};