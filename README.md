## Installation

```shell
npm install

yarn install
```

## Setting .ENV
```dotenv
TOKEN="your github personal token"
PROJECT_NAME="project name"
REPOSITORY_NAME="repository name"
```


## Documentation

#### Get all repository labels
target repository's labels data will save `response-labels.json` file. 
```shell
npm run get

yarn get
```

#### Set all repository labels
target repository's labels data will set by `labels.json` file.
```shell
npm run set

yarn set
```