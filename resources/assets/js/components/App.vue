<template>
    <div>
        <nav class="navbar navbar-default navbar-static-top">
            <!--<nav class="navbar navbar-inverse navbar-static-top">-->
            <div class="container-fluid">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <router-link class="navbar-brand" :to="{ name: 'HOME' }">Time Log</router-link>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->

                    <ul class="nav navbar-nav navbar-left">
                        <a class='waves-effect waves-light btn' @click='onSignInClick'>Sign in to Google Sheets</a>
                    </ul>
                </div>
            </div>
        </nav>
        <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
        </transition>

        <div class="navbar navbar-default navbar-fixed-bottom">
            <div class="container">
                <p class="navbar-text pull-left">Copyright &copy; {{dataDate}}
                    <router-link :to="{ name: 'HOME' }">Mindanao Kokusai Daigaku</router-link>
                </p>


            </div>


        </div>

    </div>
</template>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<script>
    import appModel from './../lib/appModel.js';
    import {signIn, signOut} from './../lib/goog.js';
    export default {
        data(){
            return appModel
        },
        methods: {
            onSignInClick() {
                signIn();
            },
            onSignOutClick() {
                // TODO: should I also navigate to root path?
                signOut(function () {
                    return window.location.reload();
                });
            }
        },
        computed:{
            unknown() {
                return appModel.authenticated === undefined;
            },
            apiLoaded() {
                return appModel.authenticated && appModel.sheetsAPIReady;
            },
            needsAuthentication() {
                return appModel.authenticated === false;
            },
            dataDate(){
                var d = new Date();
                var vm = this
                return d.getFullYear()
            }
        }
    }
</script>
