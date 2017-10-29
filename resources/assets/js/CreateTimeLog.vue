<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"> <h3>Create new time log</h3></div>

                    <div class="panel-body">

                        <form @submit.prevent='create'>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" autofocus v-model='name' placeholder="name">
                            </div>
                            <input type='submit' class='btn btn-default' value='Create new file' v-if='status === ""'/>
                        </form>

                        <div v-if='status === "saving"'>
                            <h4>Saving {{name}}...</h4>
                            <div class='progress'>
                                <div class='indeterminate'></div>
                            </div>
                        </div>

                        <div v-if='error' class='card-panel red-text'>
                            <h4>Error...</h4>
                            <pre><code>{{error}}</code></pre>
                            <div>
                                Refresh the page maybe?
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {getError, createSpreadsheet} from './lib/goog.js';
    export default {
        data() {
            return {
                name: '',
                status: '',
                error: ''
            };
        },
        methods: {
            create() {
                var vm = this
                vm.status = 'saving';
                createSpreadsheet(vm.name).then(function (result) {
                    vm.status = '';
                    var spreadsheetId = result.spreadsheetId;
                    vm.$router.push({name: 'TimeLog', params: {sheetId: spreadsheetId}})
                }, function (response) {
                    vm.error = getError(response)
                });
            },
        },
    };
</script>