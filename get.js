// IMPORT LIB
const githubLabelSync = require('github-label-sync');
const dotenv = require('dotenv')
const fs = require('fs');

// SET : ENV VAR
dotenv.config()
const {TOKEN, ACCOUNT, REPOSITORY} = process.env

// SET : GIT HUB INFO VAR
githubLabelSync({
    accessToken: TOKEN,
    repo: `${ACCOUNT}/${REPOSITORY}`,
    labels: [],
    dryRun: true,
}).then(response => {
    // SET : GIT HUB LABELS
    const responseJSON = JSON.stringify(response, null, 4)
    fs.writeFileSync('response-labels.json', responseJSON)
}).catch(error => {
    console.log(error.body.message)
});