// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '单列表单',
    path: '/',
  },
  {
    name: '两列表单',
    path: '/two-column-form',
  },
  {
    name: '三列表单',
    path: '/three-column-form',
  },
  {
    name: '四列表单',
    path: '/four-column-form',
  },
  {
    name: '分组表单',
    path: '/form-group',
  },
  {
    name: '步骤表单',
    path: '/step-form',
  },
  {
    name: '底部工具栏',
    path: '/form-group-toolbar',
  },
  {
    name: '调查问卷',
    path: '/survey',
  },
];

export { headerMenuConfig, asideMenuConfig };
