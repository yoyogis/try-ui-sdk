import Vue from 'vue';
import { userModule } from 'try-ui-state-api';

export default class UserDetail extends Vue {

    get user() {
        return userModule.userStore.getSelectedUser();
    }
}
