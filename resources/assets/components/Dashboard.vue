<template>
    <div v-on:load="authUser()">
        <div class="alert alert-success text-center">
            <h1><strong>Welcome to the dashboard</strong></h1>
        </div>
    </div>
</template>
<script>
    import VueSession from 'vue-session';

    export default {
        data () {
            return {
                apiStatus: '',
                dashboard: {
                    user: '',
                    token: '',
                }
            }
        },
        beforeCreate() {
            if (!this.$session.exists()) {
                this.$router.push('/')
            }
        },
        methods: {
            authUser() {
                let component = this;
                console.log(component.$session.getAll());
            },
            logout: function () {
                this.$session.destroy();
                this.$router.push('/')
            }
        }
    }
</script>