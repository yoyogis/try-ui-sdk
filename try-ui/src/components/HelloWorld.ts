import { Component, Prop, Vue } from 'vue-property-decorator';
import { userStore } from 'try-ui-state-api';
import { User } from 'try-ui-stateless-api';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  constructor() {
    super();
  }

  get outsideState() {
    return userStore.getUsers();
  }

  get selectedUser() {
    return userStore.getSelectedUser();
  }

  get selectedUserAge() {
    return userStore.getSelectedUserName();
  }

  public click() {
    userStore.addUser(new User('abc', Math.random()));
  }

  public rename() {
    const name = 'hhhh';
    userStore.rename(userStore.getSelectedUser(), name);
  }

  public select(user: User) {
    userStore.selectUser(user);
  }
}
