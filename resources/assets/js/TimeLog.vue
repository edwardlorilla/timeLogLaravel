<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3>Create new time log</h3></div>

                    <div class="panel-body">

                        <form novalidate @submit.prevent='logIt'>
                            <div class='input-field'>
                                <label for='start'>Start?</label>
                                <input id='start' class="form-control" type='text' placeholder="Start" v-model='start'>
                            </div>
                            <div class='input-field'>
                                <label for='end'>End?</label>
                                <input id='end' type='text' class="form-control" autofocus placeholder="End" v-model='end'>
                            </div>
                            <div class='input-field'>
                                <label for='what'>What?</label>
                                <input id='what' type='text' class="form-control" placeholder="What" v-model='what'>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                            <input v-if='saveState !== "saving"' type='submit' class='btn btn-primary' value='Log time'/>
                    </div>
                    <div v-if='saveState === "saving"'>
                        <h4>Saving...</h4>
                        <div class='progress'>
                            <div class='indeterminate'></div>
                        </div>
                    </div>

                    <div v-if='saveState === "error"' class='card-panel red-text'>
                        <h4>Error...</h4>
                        <pre><code>{{error}}</code></pre>
                        <div>
                            Refresh the page maybe?
                        </div>
                    </div>
                    <div v-if='recordsState === "loaded"'>
                        <table class='table'>
                            <thead>
                            <tr>
                                <th data-field='start'>Start</th>
                                <th data-field='end'>End</th>
                                <th data-field='what'>
                                    What?
                                    <a href='#' @click.prevent='refreshRecords' class='right' title='refresh'>
                                        &#x21bb;</a>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for='record in lastRecords'>
                                <td>{{record[0]}}</td>
                                <td>{{record[1]}}</td>
                                <td>{{record[2]}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class='fixed-action-btn' style='bottom: 12px; right: 12px;'>
                            <a class='btn-floating btn-small red' :href='editLink' title='Edit records...'
                               target='_blank'>
                                <i class='small material-icons'>mode_edit</i>
                            </a>
                        </div>
                    </div>

                    <div v-if='recordsState === "loading"'>
                        <h4>Loading records...</h4>
                        <div class='progress'>
                            <div class='indeterminate'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // This is the heart of the application. This file may not be the prettiest.
    import appModel from './lib/appModel.js';
    import {getError, logTime, getSheetTitle} from './lib/goog.js';
    import {convertDateToSheetsDateString, getNow} from './lib/dateUtils.js';
    import getLastRecordsForComponent from './lib/getLastRecordsForComponent.js';
    import getSpreadsheetIdFromComponentRoute from './lib/getSpreadsheetIdFromComponentRoute.js';
    export default {
        data() {
            return {
                recordsState: 'loading',
                lastRecords: [],
                start: '',
                end: getNow(),
                what: '',
                saveState: '',
            };
        },
        computed: {
            /**
             * Provides a Google Docs link to edit a spreadsheet
             */
            editLink() {
                const sheetId = getSpreadsheetIdFromComponentRoute(this);
                return `https://docs.google.com/spreadsheets/d/${sheetId}/edit`;
            }
        },
        mounted() {

            getLastRecordsForComponent(this).then(function () {
                appModel.pageName = 'Loading data...';
                const sheetId = getSpreadsheetIdFromComponentRoute(this);
                getSheetTitle(sheetId, function (title) {
                    appModel.pageName = title;
                });
            }.bind(this))

        },

        methods: {
            refreshRecords() {
                getLastRecordsForComponent(this);
            },
            logIt() {
                var vm = this;
                this.saveState = 'saving';
                const start = convertDateToSheetsDateString(vm.start);
                const end = convertDateToSheetsDateString(vm.end);
                const spreadsheetId = getSpreadsheetIdFromComponentRoute(vm);
                logTime(spreadsheetId, start, end, vm.what)
                        .then(function () {
                            // TODO: This is not very reliable.
                            vm.lastRecords.unshift([start, end, vm.what]);
                            vm.start = vm.end;
                            vm.end = getNow();
                            vm.what = '';
                            vm.saveState = 'done';
                            vm.error = '';
                        }, function (response) {
                            vm.saveState = 'error';
                            vm.error = getError(response);
                        });
            }
        }
    };
</script>