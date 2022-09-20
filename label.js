const githubLabelSync = require('github-label-sync');
const pk = require('./package.json');
const fs = require('fs');

const config = pk.config

githubLabelSync({
    accessToken: config.TOKEN,
    repo: config.ACCOUNT + '/' + config.REPOSITORY,
    labels: [],
    dryRun: true,
}).then(response => {
    const responseJSON = JSON.stringify(response, null, 4)
    const fileName = 'response-labels.json'
    fs.writeFileSync(fileName, responseJSON)
}).catch(error => {
    console.log(error.body.message)
});