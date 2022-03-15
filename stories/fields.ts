import * as GIOIcons from '../src';
export const all: { [key: string]: any } = GIOIcons;

const filterIcon = (icons: string[], kw: string) => icons?.filter((iconName: string) => iconName.toLowerCase().includes(kw.replace(/-/g, '').replace(/(filled|outlined|twotone)$/, '')))

const user: string[] = [

]
const data: string[] = [
  'database',
  'data-upload',
  'variable',
  'string',
  'number'
]
const other: string[] = [
  'mobile',
  'desktop',
  'tablet',
  'browser',
  'browser-key',
  'browser-eye',
  'wechat',
  'alipay',
  'windows',
  'apple',
  'android',
  'mini-program'
]
function filterName(name: string, kw: string) {
  return name.toLowerCase().includes(kw.replace(/-/g, '').replace(/(filled|outlined|twotone)$/, ''));
}
const commonIcons: string[] = Object.keys(all).filter(name => ![...user, ...data, ...other].some(kw => filterName(name, kw)));
const dataIcons = Object.keys(all).filter(name => [...data].some(kw => filterName(name, kw)));
const userIcons = Object.keys(all).filter(name => [...user].some(kw => filterName(name, kw)));
const otherIcons = Object.keys(all).filter(name => [...other].some(kw => filterName(name, kw)));
export const categories: { [key: string]: any } = {
  ['Common 通用图标']: commonIcons,
  ['User 用户图标']: userIcons,
  ['Data 数据图标']: dataIcons,
  ['Platform & Device 平台和设备图标']: otherIcons
}