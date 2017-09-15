<template>
    <div>
        <div v-if="apiStatus == 'ok'" class="alert alert-success text-center">
            <strong>{{message}}</strong>
        </div>
        <div v-if="apiStatus == 'fail'" class="alert alert-danger text-center">
            <strong>{{message}}</strong>
        </div>

        <h2 align="center"><strong>Register</strong></h2>
        <form @submit.prevent="registration">
            <div class="form-group">
                <label for="name">Name <span class="required">*</span></label>
                <input type="text" id="name" class="form-control" placeholder="name" v-model="signup.name" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail <span class="required">*</span></label>
                <input type="email" id="email" class="form-control" placeholder="email" v-model="signup.email"
                       required>
            </div>
            <div class="form-group">
                <label for="password">Password <span class="required">*</span></label>
                <input type="password" id="password" class="form-control" placeholder="password"
                       v-model="signup.password" required>
            </div>
            <button type="submit" class="btn btn-default btn-primary">Register</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                apiStatus: '',
                signup: {
                    email: '',
                    password: '',
                    name: ''
                }
            }
        },
        methods: {
            registration() {
                let component = this;
                axios.post('api/signup', this.signup)
                    .then(function (res) {
                        component.message = res.data.meta.message;
                        component.apiStatus = res.data.meta.status;
                    }, function (response) {
                        console.log(response);
                    })
            }
        }
    }
</script>