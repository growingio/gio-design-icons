import * as GIOIcons from "../src";
export const all = Object.keys(GIOIcons);

const user: string[] = [
  "user-outlined",
  "user-tie-outlined",
  "user-search-outlined",
  "user-bars-outlined",
  "user-tgi-outlined",
  "user-group-outlined",
  "user-screen-outlined",
  "id-outlined",
  "user-plus-filled",
  "user-service-filled",
];
const data: string[] = [
  "database-outlined",
  "data-upload-outlined",
  "variable-outlined",
  "string-outlined",
  "number-outlined",
  "boolean-outlined",
  "terminal-outlined",
  "date-outlined",
  "array-outlined",
  "sql-outlined",
  "line-chart-outlined",
  "column-chart-outlined",
  "bar-chart-outlined",
  "bubble-chart-outlined",
  "pie-chart-outlined",
  "curve-chart-outlined",
  "number-chart-outlined",
  "table-outlined",
  "mixed-column-chart-outlined",
  "mixed-line-chart-outlined",
  "boxplot-chart-outlined",
  "calculate-outlined",
  "click-outlined",
  "gauge-outlined",
  "code-outlined",
  "condition-outlined",
  "absolute-outlined",
  "percentage-outlined",
  "stacked-area-chart-outlined",
  "stacked-column-chart-outlined",
  "switch-outlined",
  "security-outlined",
  "suspend-outlined",
  "space-outlined",
  "reject-outlined",
];
const platform: string[] = [
  "mobile-outlined",
  "mobile-filled",
  "desktop-outlined",
  "desktop-filled",
  "tablet-outlined",
  "tablet-filled",
  "browser-outlined",
  "browser-key-outlined",
  "browser-eye-outlined",
  "wechat-outlined",
  "wechat-filled",
  "alipay-outlined",
  "alipay-filled",
  "windows-filled",
  "windows-outlined",
  "apple-outlined",
  "apple-filled",
  "android-outlined",
  "android-filled",
  "mini-program-outlined",
  "mini-program-filled",
];

const toPascalCase = (input: string) =>
  ("-" + input).replace(/-([a-z])/g, (match) => match[1].toUpperCase());

const dataIcons = data.map(toPascalCase);
const userIcons = user.map(toPascalCase);
const platformIcons = platform.map(toPascalCase);

const datum = [...dataIcons, ...userIcons, ...platformIcons];
const commonIcons = all.filter((n) => !datum.includes(n));
export const categories: { [key: string]: any } = {
  ["Common 通用图标"]: commonIcons,
  ["User 用户图标"]: userIcons,
  ["Data 数据图标"]: dataIcons,
  ["Platform & Device 平台和设备图标"]: platformIcons,
};
