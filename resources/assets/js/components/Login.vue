<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form class="mui-form">
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="email" required v-model="authenticate.email">
                            <label>Email Address</label>
                        </div>
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="password" required v-model="authenticate.password">
                            <label>Password</label>
                        </div>
                        <button type="submit" class="mui-btn primary mui-btn--raised">Login</button>
                        <button type="button" class="mui-btn mui-btn--raised">Clear</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                authenticate: {
                    email: '',
                    password: ''
                }
            }
        },
        mounted() {
        },
        methods: {
            login() {
                let authenticate = {
                    email: this.authenticate.email,
                    password: this.authenticate.password
                };
            }
        }
    }
</script>