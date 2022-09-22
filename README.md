## Installation

```shell
npm install

yarn install
```

## Setting .ENV
```dotenv
TOKEN="your persnal token here"
ACCOUNT="your account here"
REPOSITORY="your repository here"
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