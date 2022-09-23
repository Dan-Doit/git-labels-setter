// IMPORT LIB
const githubLabelSync = require('github-label-sync');
const labels = require('./labels.json')
const dotenv = require('dotenv')

// SET : ENV VAR
dotenv.config()
const {TOKEN, ACCOUNT, REPOSITORY} = process.env

// SET : GIT HUB INFO VAR
githubLabelSync({
    accessToken: TOKEN,
    repo: `${ACCOUNT}/${REPOSITORY}`,
    labels,
    dryRun: false,
}).then(labels => {

    if (labels.length === 0) {
        console.log('\x1b[33m%s\x1b[0m', 'Labels are already up to date');
    } else {
        labels.map(label => {
            console.debug(`Label ===> ${label.name} updated`)
        })
        console.log('\x1b[32m%s\x1b[0m', 'ALL LABELS UPDATED SUCCESSFULLY');
    }

}).catch(e => console.error(e));