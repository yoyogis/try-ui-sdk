import Vue from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from 'try-ui-stateless-api';
import { headerStore, sub1 } from 'try-ui-state-api';

@Component
export default class HeaderNav extends Vue {
  get menuItems(): MenuItem[] {
    return headerStore.menus;
  }

  get subName(): string {
    return sub1.name;
  }

  get selectedMenuItem(): MenuItem | null {
    return headerStore.selectedMenuItem;
  }

  public selectMenuItem(menuItem: MenuItem) {
    headerStore.selectMenuItem(menuItem);
  }
}
