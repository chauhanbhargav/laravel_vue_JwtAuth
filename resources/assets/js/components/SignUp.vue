<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>
                <div class="panel-body">
                    <form class="mui-form" method="post">
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="text" required v-model="authenticate.name">
                            <label>Full Name</label>
                        </div>
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="email" required v-model="authenticate.email">
                            <label>Email Address</label>
                        </div>
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="password" required v-model="authenticate.password">
                            <label>Password</label>
                        </div>
                        <div class="mui-textfield mui-textfield--float-label">
                            <input type="password" required v-model="authenticate.confirmPassword">
                            <label>Confirm Password</label>
                        </div>
                        <button @click.native="login" type="submit" class="mui-btn primary mui-btn--raised">Signup
                        </button>
                        <button type="button" class="mui-btn mui-btn--raised">Clear</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="reg-success" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content size">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Message</h4>
                    </div>
                    <div class="modal-body text-center">
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                authenticate: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            }
        },
        mounted() {
        },
        methods: {
            login() {
                alert('this');
                let authenticate = {
                    name: this.authenticate.name,
                    email: this.authenticate.email,
                    password: this.authenticate.password,
                    confirmPassword: this.authenticate.confirmPassword
                };
                console.log(authenticate);
            }
        }
    }
</script>