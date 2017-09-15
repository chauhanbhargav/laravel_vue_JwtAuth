<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <nav>
                    <div class="row">
                        <div class="col-lg-6">
                            <router-link :to="{ name: 'home' }">Home</router-link>
                        </div>
                        <div class="col-lg-offset-2 col-lg-2 text-center">
                            <router-link :to="{ name: 'login' }">Login</router-link>
                        </div>
                        <div class="col-lg-1 text-center">
                            <router-link :to="{ name: 'register' }">Register</router-link>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="panel-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>