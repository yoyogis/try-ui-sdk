import { Component, Prop, Vue } from 'vue-property-decorator';
import { userModule } from 'try-ui-state-api';
import { User } from 'try-ui-stateless-api';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  constructor() {
    super();
  }

  get outsideState() {
    return userModule.userStore.getUsers();
  }

  get selectedUser() {
    return userModule.userStore.getSelectedUser();
  }

  get selectedUserAge() {
    return userModule.userStore.getSelectedUserName();
  }

  public click() {
    userModule.userStore.addUser(new User('abc', Math.random()));
  }

  public rename() {
    const name = 'hhhh';
    userModule.userStore.rename(userModule.userStore.getSelectedUser(), name);
  }

  public select(user: User) {
    userModule.userStore.selectUser(user);
  }
}
