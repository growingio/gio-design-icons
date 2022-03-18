import * as GIOIcons from '../src';
export const all = Object.keys(GIOIcons);

const user: string[] = [
  'user',
  'user-tie',
  'user-search',
  'user-bars',
  'user-tgi',
  'user-group',
  'user-screen',
  'id',
  'user-plus',
  'user-service'
]
const data: string[] = [
  'database',
  'data-upload',
  'variable',
  'string',
  'number',
  'boolean',
  'terminal',
  'date',
  'array',
  'sql',
  'line-chart',
  'column-chart',
  'bar-chart',
  'bubble-chart',
  'pie-chart',
  'curve-chart',
  'number-chart',
  'table',
  'mixed-column-chart',
  'mixed-line-chart',
  'calculate',
  'click',
  'gauge',
  'code',
  'condition'
]
const platform: string[] = [
  'mobile',
  'mobile-filled',
  'desktop',
  'desktop-filled',
  'tablet',
  'tablet-filled',
  'browser',
  'browser-key',
  'browser-eye',
  'wechat',
  'wechat-filled',
  'alipay',
  'alipay-filled',
  'windows',
  'windows-filled',
  'apple',
  'apple-filled',
  'android',
  'android-filled',
  'mini-program',
  'mini-program-filled'
]

const toPascalCase = (input: string) => ('-' + input).replace(/-([a-z])/g, (match) => match[1].toUpperCase());

const dataIcons = data.map(toPascalCase)
const userIcons = user.map(toPascalCase);
const platformIcons = platform.map(toPascalCase);

const datum = [...dataIcons, ...userIcons, ...platformIcons]
const commonIcons = all.filter(n => !datum.includes(n))
export const categories: { [key: string]: any } = {
  ['Common 通用图标']: commonIcons,
  ['User 用户图标']: userIcons,
  ['Data 数据图标']: dataIcons,
  ['Platform & Device 平台和设备图标']: platformIcons,
}