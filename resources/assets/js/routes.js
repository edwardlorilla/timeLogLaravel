/**
 * Created by Lorilla on 26/10/2017.
 */
const HOME = resolve => require(['./components/Example.vue'], resolve);
const ListFiles = resolve => require(['./ListFiles.vue'], resolve);
const TimeLog = resolve => require(['./TimeLog.vue'], resolve);
const CreateTimeLog = resolve => require(['./CreateTimeLog.vue'], resolve);

export default [
    {
        path: '/',
        component: ListFiles,
        name: 'HOME',
    },
    {
        path: '/create-time-log',
        component: CreateTimeLog,
        name: 'CreateTimeLog'
    },
    {
        path: '/time-log/:sheetId',
        component: TimeLog,
        name: 'TimeLog'
    }
]