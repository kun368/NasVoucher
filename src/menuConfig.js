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
    name: '首页',
    path: '/',
    icon: 'home2',
  },
  {
    name: '市场',
    path: '/Market',
    icon: 'shop',
  },
  {
    name: '制作',
    path: '/Create/:typeId',
    icon: 'publish',
  },
  {
    name: '我的',
    path: '/MyCenter',
    icon: 'yonghu',
  },
];

export { headerMenuConfig, asideMenuConfig };
