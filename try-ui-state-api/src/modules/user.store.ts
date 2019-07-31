import { User } from "try-ui-stateless-api";

export class UserStore {
  list: Array<User>=[];
  selected: User=new User("222",12);

  getSelectedUser() {
    return this.selected;
  }

  getSelectedUserName() {
    return this.selected && this.selected.age;
  }

  getUsers() {
    return this.list;
  }

  addUser(user: User) {
    this.list.push(user);
  }

  rename(user: User, name: string) {
    user.name = name;
  }

  selectUser(user: User) {
    this.selected = user;
  }
}
