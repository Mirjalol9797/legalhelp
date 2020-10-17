import Vue from 'vue';
export default function ({ $auth, redirect, app }) {
    let user = $auth.$state.user;
    if (!user) {
        return redirect(app.localePath(`/`));
    }
}