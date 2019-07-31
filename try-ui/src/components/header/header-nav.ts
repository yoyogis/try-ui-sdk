import Vue from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from 'try-ui-stateless-api';
import { homeModule } from 'try-ui-state-api';

@Component
export default class HeaderNav extends Vue {
  get menuItems(): MenuItem[] {
    return homeModule.headerStore.menus;
  }

  get subName(): string {
    return homeModule.subModule.sub1.name;
  }

  get selectedMenuItem(): MenuItem | null {
    return homeModule.headerStore.selectedMenuItem;
  }

  public selectMenuItem(menuItem: MenuItem) {
    homeModule.headerStore.selectMenuItem(menuItem);
  }
}
