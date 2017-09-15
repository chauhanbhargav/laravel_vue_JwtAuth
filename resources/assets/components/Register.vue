<template>
    <div>
        <h2 align="center"><strong>Register</strong></h2>
        <form autocomplete="off">
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
                       v-model="signup.password"
                       required>
            </div>
            <button type="submit" class="btn btn-default btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                signup: {
                    email: '',
                    password: '',
                    name: ''
                }
            }
        }
    }
</script>