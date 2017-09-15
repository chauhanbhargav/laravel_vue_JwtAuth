<template>
    <div>
        <div v-if="apiStatus == 'ok'" class="alert alert-success text-center">
            <strong>{{message}}</strong>
        </div>
        <div v-if="apiStatus == 'fail'" class="alert alert-danger text-center">
            <strong>{{message}}</strong>
        </div>
        <h2 align="center"><strong>Login</strong></h2>
        <form @submit.prevent="signin">
            <div class="form-group">
                <label for="email">E-mail <span class="required">*</span></label>
                <input type="email" id="email" class="form-control" placeholder="email" v-model="login.email" required>
            </div>
            <div class="form-group">
                <label for="password">Password <span class="required">*</span></label>
                <input type="password" id="password" class="form-control" placeholder="password"
                       v-model="login.password"
                       required>
            </div>
            <button type="submit" class="btn btn-default btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    import VueSession from 'vue-session';

    export default {
        data () {
            return {
                apiStatus: '',
                login: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            signin() {
                let component = this;
                let auth = {
                    email: this.login.email,
                    password: this.login.password
                };
                axios.post('api/authentication', auth)
                    .then(function (res) {
                            if (res.data.meta.status === "ok") {
                                component.$session.start();
                                component.$session.set('jwt', res.data.token);
                                component.$session.set('user', res.data.user);
                                component.$router.push('dashboard');
                            } else {
                                component.message = res.data.meta.message;
                                component.apiStatus = res.data.meta.status;
                            }
                        },
                        function (res) {
                            console.log(res);
                        })
            }
        }
    }
</script>