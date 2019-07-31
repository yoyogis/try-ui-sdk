import { HeaderStore } from './header.store';
export * from './sub/sub.module';

const headerStore = new HeaderStore();

export { headerStore };
