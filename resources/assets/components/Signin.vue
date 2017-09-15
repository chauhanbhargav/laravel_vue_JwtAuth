<template>
    <div>
        <h2 align="center"><strong>Login</strong></h2>
        <form autocomplete="off">
            <div class="form-group">
                <label for="email">E-mail <span class="required">*</span></label>
                <input type="email" id="email" class="form-control" placeholder="email" v-model="login.email" required>
            </div>
            <div class="form-group">
                <label for="password">Password <span class="required">*</span></label>
                <input type="password" id="password" class="form-control" placeholder="password" v-model="login.password"
                       required>
            </div>
            <button type="submit" class="btn btn-default btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                login: {
                    email: '',
                    password: '',
                }
            }
        }
    }
</script>