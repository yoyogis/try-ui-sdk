import Vue from 'vue';
import Component from 'vue-class-component';
import { MenuItem } from 'try-ui-stateless-api';
import { homemModule } from 'try-ui-state-api';

@Component
export default class HeaderNav extends Vue {
  get menuItems(): MenuItem[] {
    return homemModule.headerStore.menus;
  }

  get subName(): string {
    return homemModule.subModule.sub1.name;
  }

  get selectedMenuItem(): MenuItem | null {
    return homemModule.headerStore.selectedMenuItem;
  }

  public selectMenuItem(menuItem: MenuItem) {
    homemModule.headerStore.selectMenuItem(menuItem);
  }
}
