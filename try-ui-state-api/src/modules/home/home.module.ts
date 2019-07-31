import { HeaderStore } from './header.store';
import  {subModule} from './sub/sub.module';
const headerStore = new HeaderStore();

export const  homemModule = { headerStore, subModule };
