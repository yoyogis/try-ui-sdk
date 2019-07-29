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
    return userModule.getUsers();
  }

  get selectedUser() {
    return userModule.getSelectedUser();
  }

  get selectedUserAge() {
    return userModule.getSelectedUserName();
  }

  public click() {
    userModule.addUser(new User('abc', Math.random()));
  }

  public rename() {
    const name = 'hhhh';
    userModule.rename(userModule.getSelectedUser(), name);
  }

  public select(user: User) {
    userModule.selectUser(user);
  }
}
