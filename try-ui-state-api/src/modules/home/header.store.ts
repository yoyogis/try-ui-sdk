import { MenuItem, requestMenus, filterDefaultMenu } from 'try-ui-stateless-api';

export class HeaderStore {
  public menus: MenuItem[] = [];
  public selectedMenuItem: MenuItem|null = null;
  public temp:MenuItem|null;

  constructor(){
      this.temp = null;
      this.requestMenus();
  }

  public selectMenuItem(menuItem: MenuItem) {
    this.selectedMenuItem = menuItem;
  }

  public requestMenus() {
    requestMenus().then(menus=>{
        this.menus = menus;
        let defaultMenu = filterDefaultMenu(menus)
        this.selectMenuItem(defaultMenu)
    });
  }
}
