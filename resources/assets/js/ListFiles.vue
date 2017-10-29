<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div v-if='filesLoaded && !empty'>
                            <h4>Your Sheets</h4>

                        </div></div>
                    <ul class="list-group">
                        <li class="list-group-item" v-for='file in files'>
                            <router-link :to="{path: '/time-log/' + file.id}">
                                <a>
                                    {{file.name}}
                                </a>
                            </router-link>
                        </li>
                    </ul>
                    <div class="panel-footer">
                        <div v-if='empty'>
                            <h3>No time sheets?</h3>
                            <p>I could not find any time logs in your account.
                                <router-link :to="{path: '/create-time-log'}">Create new time log</router-link>
                                .
                            </p>
                        </div>
                        <router-link class='btn btn-info' :to="{path: '/create-time-log'}"
                                     title='Create new time log'>
                            <i class='glyphicon glyphicon-plus-sign'></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import appModel from './lib/appModel.js';
    export default {
        data() {
            return appModel;
        },
        computed: {
            empty() {
                return appModel.files.length === 0 && appModel.filesLoaded;
            }
        }
    };
</script>