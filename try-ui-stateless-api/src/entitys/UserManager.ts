import { User } from './user.entity';

export class UserManager {
  constructor(public list: User[] = [], public selected: User) {}
}
