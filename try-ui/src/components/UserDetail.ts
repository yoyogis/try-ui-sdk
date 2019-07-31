import Vue from 'vue';
import { userStore } from 'try-ui-state-api';

export default class UserDetail extends Vue {

    get user() {
        return userStore.getSelectedUser();
    }
}
