import { MenuItem } from "../entitys/entity";

export function requestMenus() {
  
  return Promise.resolve([
    {
      name: '数据接入1',
      path: '/access',
      isDefault:true
    },
    {
      name: '数据接入2',
      path: '/access',
      isDefault:false
    },
    {
      name: '数据接入3',
      path: '/access',
      isDefault:false
    },
  ]);
}

export function filterDefaultMenu(menus:MenuItem[]){
    return menus.filter(menu=>menu.isDefault)[0];
}
