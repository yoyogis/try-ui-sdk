import { HeaderStore } from './header.store';
import  {subModule} from './sub/sub.module';
import  sub11Module from './sub/sub1-1/sub1-1.module';
const headerStore = new HeaderStore();

export default { headerStore, subModule, sub11Module };
